import { gql, useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import debounce from 'lodash.debounce';

const SEARCH_QUERY = gql`
  query searchCourse($searchTerm: String!) {
    searchTerms: courses(
      where: {
        OR: [
          { name: { contains: $searchTerm } }
          { description: { contains: $searchTerm } }
        ]
      }
    ) {
      id
      name
      description
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [searchCourse, { data, loading, error }] = useLazyQuery(SEARCH_QUERY, {
    fetchPolicy: 'no-cache', // don't cache the results of the query, always fetch fresh
  });

  const searchedItems = data?.searchTerms || [];
  const findItemsDebounced = debounce(searchCourse, 500);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getComboboxProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items: searchedItems,
    onInputValueChange() {
      findItemsDebounced({
        variables: { searchTerm: inputValue },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      console.log('selectedItem', selectedItem);
      router.push({
        pathname: `/course/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item.name || '',
  });
  return (
    <div>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for a course',
            id: 'search',
            className: loading ? 'loading' : '',
          })}
        />
      </div>
      <div {...getMenuProps()}>
        {isOpen &&
          searchedItems.map((item, index) => (
            <div
              key={item.id}
              style={index === highlightedIndex ? 'backgroundColor: "blue"' : ''}
              {...getItemProps({ item, index })}
            >
              {item.name}
            </div>
          ))}
        {isOpen && !searchedItems.length && !loading && <div>No results found</div>}
      </div>
    </div>
  );
}

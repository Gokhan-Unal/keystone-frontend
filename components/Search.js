import React, { useEffect, useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import debounce from 'lodash.debounce';

import { useRouter } from 'next/dist/client/router';
import { Dropdown, DropDownItem, SearchStyles } from './styles/SearchStyles';

const SEARCH_QUERY = gql`
  query searchCourse($searchTerm: String!) {
    searchTerms: courses(
      where: {
        OR: [
          { name: { contains: $searchTerm, mode: insensitive } }
          { description: { contains: $searchTerm, mode: insensitive } }
        ]
      }
    ) {
      id
      name
      description
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}

export default function Search() {
  const router = useRouter();
  const [searchCourse, { loading, data }] = useLazyQuery(SEARCH_QUERY, {
    fetchPolicy: 'no-cache', // always go to the network
  });

  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(searchCourse, 350);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items: items,
    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/course/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item.name || '',
  });

  return (
    <SearchStyles>
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
      <Dropdown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item.id}
              highlighted={index === highlightedIndex}
              {...getItemProps({ item, index })}
            >
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No Course found for {inputValue}</DropDownItem>
        )}
      </Dropdown>
    </SearchStyles>
  );
}

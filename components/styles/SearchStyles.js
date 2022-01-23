import styled from 'styled-components';

export const SearchStyles = styled.div`
  max-width: var(--max-width);
  margin: auto;
  padding-top: 1rem;

  input {
    width: 100%;
    padding: 1rem;
    ::placeholder {
      font-size: 1rem;
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  width: var(--max-width);
  z-index: 2;
`;

export const DropDownItem = styled.div`
  transition: padding 0.2s ease-in-out;
  opacity: ${(props) => (props.highlighted ? 1 : 0.8)};
  border-bottom: 1px solid var(--blue);
  background: ${(props) => (props.highlighted ? '#d8d4d4' : 'white')};
  padding: 1rem;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid ${(props) => (props.highlighted ? `var(--blue)` : 'white')};
`;

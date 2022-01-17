import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease, opacity 1s ease-in-out;
  opacity: 0.8;
  cursor: pointer;
  img {
    display: block;
    line-height: 0;
    width: 100%;
    height: auto;
  }
  p {
    line-height: 2;
    font-weight: 300;
    padding: 0 3rem;
    font-size: 1.4rem;
  }
  &:hover {
    transform: translateY(-5px);
    opacity: 1;
  }
`;

export default ItemStyles;
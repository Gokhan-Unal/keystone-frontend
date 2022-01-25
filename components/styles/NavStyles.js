import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 1.2rem;
  list-style-type: none;
  a,
  button {
    padding: 1rem 1.2rem;
    display: inline-block;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: var(--blue);
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
    @media (max-width: 700px) {
      font-size: 0.8rem;
      padding: 0 10px;
    }
  }
  @media (max-width: 1300px) {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 1rem;
  }
`;

export default NavStyles;

export const FormStyles = styled.form`
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 2;
  box-shadow: var(--bs);
  background: rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input {
    padding: 0.5rem;
    border: 3px solid #ccc;
    border-radius: 3px;
    width: 100%;
  }

  button {
    background: var(--blue);
    color: var(--offWhite);
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
  }
`;

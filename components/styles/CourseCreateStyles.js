import styled from 'styled-components';

export const CreateCourseStyles = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 2rem;
  box-shadow: var(--bs);
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.7rem;
  }

  select {
    cursor: pointer;
  }

  input[type='file'] {
  }

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }

  .custom-file-input::before {
    content: 'Select an Image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }

  button {
    border: none;
    padding: 1rem;
    background: var(--blue);
    color: var(--offWhite);
  }
`;

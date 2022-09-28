import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  max-width: 50rem;
  position: relative;

  input {
    background: linear-gradient(35deg, #494949, #313131);
    border: none;
    border-radius: 1rem;
    color: #fff;
    font-size: 1.5rem;
    outline: none;
    padding: 1rem 3rem;
    width: 100%;
  }

  svg {
    color: #fff;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
  }
`;

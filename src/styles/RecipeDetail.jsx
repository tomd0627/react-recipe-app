import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10rem;
  margin: 10rem 0 5rem;

  img {
    border-radius: 2rem;
  }

  a {
    color: #e94057;
  }

  h2 {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul,
  ol {
    margin-left: 1.5rem;
    margin-top: 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export const RecipeButton = styled.button`
  background: #fff;
  border: 2px solid #000;
  color: #313131;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-right: 2rem;
  padding: 1rem 2rem;

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
`;

export const RecipeMeta = styled.div`
  flex: 0 0 40%;
`;

export const RecipeInfo = styled.div`
  flex: 0 0 60%;
`;

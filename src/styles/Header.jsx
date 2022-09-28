import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  align-items: center;
  display: flex;
  font-family: "Lobster Two", cursive;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;

  svg {
    font-size: 2rem;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 4rem 0;
`;

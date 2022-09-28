import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CategoryLink = styled(NavLink)`
  align-items: center;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  height: 6rem;
  justify-content: center;
  margin: 0 1rem;
  text-decoration: none;
  width: 6rem;

  h4,
  svg {
    color: #fff;
  }

  h4 {
    font-size: 0.8rem;
    margin: 0.5rem 0 0;
  }

  svg {
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

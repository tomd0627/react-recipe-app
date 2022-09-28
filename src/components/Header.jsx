import React from "react";
import { Logo, Nav } from "../styles/Header";
import { GiKnifeFork } from "react-icons/gi";

function Header() {
  return (
    <Nav>
      <Logo to={"/"}>
        <GiKnifeFork />
        delicious
      </Logo>
    </Nav>
  );
}

export default Header;

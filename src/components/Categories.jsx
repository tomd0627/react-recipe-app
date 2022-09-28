import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { CategoriesList } from "../styles/CategoriesList";
import { CategoryLink } from "../styles/CategoryLink";

function Categories() {
  return (
    <CategoriesList>
      <CategoryLink to={"cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </CategoryLink>
      <CategoryLink to={"cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </CategoryLink>
      <CategoryLink to={"cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </CategoryLink>
      <CategoryLink to={"cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </CategoryLink>
    </CategoriesList>
  );
}

export default Categories;

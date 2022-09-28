import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { Wrapper } from "../styles/Wrapper";
import { SplideCard, SplideCardGradient } from "../styles/SplideCard";
import { Link } from "react-router-dom";

function Veggie() {
  useEffect(() => {
    getVegetarianRecipes();
  }, []);

  const [vegetarian, setVegetarian] = useState([]);

  const getVegetarianRecipes = async () => {
    const checkVegetarian = localStorage.getItem("vegetarian");

    if (checkVegetarian) {
      setVegetarian(JSON.parse(checkVegetarian));
    } else {
      const TAGS = "vegetarian";
      const NUMBER = 9;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=${TAGS}&number=${NUMBER}`
      );
      const data = await api.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Recipes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {vegetarian.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <SplideCard>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <SplideCardGradient />
                </Link>
              </SplideCard>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Veggie;

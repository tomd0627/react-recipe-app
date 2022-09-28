import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { Wrapper } from "../styles/Wrapper";
import { SplideCard, SplideCardGradient } from "../styles/SplideCard";
import { Link } from "react-router-dom";

function Popular() {
  useEffect(() => {
    getPopularRecipes();
  }, []);

  const [popular, setPopular] = useState([]);

  const getPopularRecipes = async () => {
    const checkPopular = localStorage.getItem("popular");

    if (checkPopular) {
      setPopular(JSON.parse(checkPopular));
    } else {
      const NUMBER = 9;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${NUMBER}`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => (
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

export default Popular;

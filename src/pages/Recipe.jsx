import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RecipeButton,
  RecipeInfo,
  RecipeMeta,
  RecipeWrapper,
} from "../styles/RecipeDetail";
import { motion } from "framer-motion";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const getRecipe = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeDetails = await data.json();
    setRecipe(recipeDetails);
  };

  useEffect(() => {
    getRecipe(params.name);
  }, [params.name]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RecipeWrapper>
        <RecipeMeta>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
        </RecipeMeta>
        <RecipeInfo>
          <RecipeButton
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </RecipeButton>
          <RecipeButton
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </RecipeButton>
          {activeTab === "instructions" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></h3>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </RecipeInfo>
      </RecipeWrapper>
    </motion.div>
  );
}

export default Recipe;

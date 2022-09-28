import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid } from "../styles/Grid";
import { GridCard } from "../styles/GridCard";

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  let params = useParams();

  const getSearchResults = async (query) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`
    );
    const recipes = await data.json();
    setSearchResults(recipes.results);
  };

  useEffect(() => {
    getSearchResults(params.query);
  }, [params.query]);

  return (
    <Grid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchResults.map((item) => (
        <GridCard key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </GridCard>
      ))}
    </Grid>
  );
}

export default SearchResults;

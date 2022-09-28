import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SearchForm } from "../styles/SearchForm";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
    setInput("");
  };

  return (
    <SearchForm onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search recipes..."
        value={input}
      />
    </SearchForm>
  );
}

export default Search;

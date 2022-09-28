import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Search />
        <Categories />
        <Pages />
      </Router>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  console.log(search);
  console.log(query);

  const APP_ID = "bfc8b0c7";
  const APP_KEY = "3eaec3dbc8690491c0a5246845ec6dc9";
  const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setRecipeData(data.hits);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getRecipes();
    console.log("i run");
  }, [query]);

  const searchRecipe = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="recipe-container">
      <div className="search">
        <form onSubmit={searchRecipe}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="recipes">
        {recipeData.length > 1 ? (
          recipeData.map((recipeItem,i) => <Recipe key={i} recipe={recipeItem.recipe} />)
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;

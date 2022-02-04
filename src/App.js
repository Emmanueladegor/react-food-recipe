import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const App = () => {

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');


useEffect(()=>{
getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
  const data = await response.json();

  setRecipes(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

return (
  <>
 
    <form onSubmit={getSearch}>
      <div className="form-group row mt-4 mx-auto">
      <div className="col-10">
      <input className="form-control" type="text" value={search} onChange={updateSearch}/>
      </div>
      <div className="col-2">
      <button className="btn btn-danger ml-auto" type="submit">Search</button>
      </div>
      </div>
    </form>

<div className="row mt-3">
    {recipes.map(recipe=> (
      <Recipe 
      key={recipe.recipe.calories}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    ))}
  </div>
  </>
);
};

export default App;

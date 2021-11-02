import { useRef, useState } from 'react';
import './App.css';
import useRecipe from './hooks/useRecipe';

const App = () => {
  const queryRef = useRef(null)

  const [recipe, setRecipe] = useState('chicken')
  const recipes = useRecipe(recipe)

  const generateRecipe = e => {
    e.preventDefault()
    setRecipe(queryRef.current.value)
  }

  return (
    <div className="App">
      <center>
        <h1>Recipe Generator</h1>
        <form>
          <input placeholder="Search for food recipe..." ref={queryRef} />
        </form>
        <button onClick={generateRecipe}>Generate Recipe</button>
        {recipes.map(meal => (
          <div key={meal.idMeal}>
            <h4>{meal.strMeal}</h4>
            <h5>{meal.strInstructions}</h5>
          </div>
        ))}
      </center>
    </div>
  );
}

export default App;

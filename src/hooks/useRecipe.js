import { useState, useEffect } from 'react'

const useRecipe = (query) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        const fetchRecipe = async () => {
            await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals)
            })
        }
    
        fetchRecipe()
    }, [query])

    return recipes
}

export default useRecipe

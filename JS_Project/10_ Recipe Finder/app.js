const apiKey = '5eb5a461d270400a9a07040aa4565493'; // Replace with your API key (e.g., from Spoonacular )

async function getRecipes() {
  const query = document.getElementById('searchInput').value;
  if (!query) return;

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&apiKey=${apiKey}&number=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const recipes = data.results;
    displayRecipes(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

function displayRecipes(recipes) {
  const recipeResults = document.getElementById('recipeResults');
  recipeResults.innerHTML = ''; // Clear any previous results

  if (recipes.length === 0) {
    recipeResults.innerHTML = '<p>No recipes found.</p>';
    return;
  }

  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
      <h3>${recipe.title}</h3>
      <p><strong>Ready in:</strong> ${recipe.readyInMinutes} mins</p>
      <p><strong>Servings:</strong> ${recipe.servings}</p>
      <button onclick="getRecipeDetails(${recipe.id})">View Recipe</button>
    `;
    
    recipeResults.appendChild(recipeCard);
  });
}

async function getRecipeDetails(recipeId) {
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const recipe = await response.json();
    alert(`Ingredients: ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(', ')}`);
  } catch (error) {
    console.error("Error fetching recipe details:", error);
  }
}

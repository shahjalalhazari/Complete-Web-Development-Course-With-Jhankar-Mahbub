const loadMeals = (key) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    // console.log(meals);
    meals.forEach(meal => {
        const mealContainer = document.getElementById("meal-container");
        mealContainer.innerHTML = "";
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                </div>
            </div>
        `
        mealContainer.appendChild(mealDiv);
    });
}



const searchMeal = () => {
    const searchInput = document.getElementById("search-input").value;
    loadMeals(searchInput)
}
const loadMeals = search => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    console.log(meals);
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name: ${meal.strMeal}</h5>
          <p class="card-text"> <h6>Cooking Process:</h6> ${meal.strInstructions.slice(0,300)}</p>
          <p class="card-text">  <a href="${meal.strYoutube}">Watch on youtube</a></p>
        </div>
      </div>
        `;
        mealsContainer.appendChild(mealDiv);
    });
}

const searchMeals = () =>{
    const searchField = document.getElementById('search-field');
    const searchText =searchField.value;
    loadMeals(searchText);
    searchField.value = ``;
}

const loadMealDetails = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
  console.log("Hello",meal.idMeal);
  const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML = ``;
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('card');
  // console.log(detailContainer);
  mealDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name: ${meal.strMeal}</h5>
    <p class="card-text"><h6>Cooking Process:</h6> ${meal.strInstructions}</p>
    <p class="card-text">  <a href="${meal.strYoutube}">Watch on youtube</a></p>
  </div>
  `;
  detailContainer.appendChild(mealDiv);
}
 loadMeals('');
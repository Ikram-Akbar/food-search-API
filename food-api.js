const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // now check 
    // console.log(searchText);
    // clear data 
    searchField.value="";
    if(searchText == 0){
        // please write something to display
    }
    else{
         // take api from food-meal Db
    const url =    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
    }
}

const displaySearchResult = (meals) => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
//    remove search result by using innerHTMl -
    // searchResult.innerHTML = '';
    // or you can use this process - text content
    searchResult.textContent ='';
    if(meals.length == 0){
        // no result found will be appered here by using div or something by index file
    }
   meals.forEach(meal => {
    //    console.log(meals);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
         </div>
      </div>
    `;

    // append the div into the search result
    searchResult.appendChild(div);



   })
}

const loadMealDetail = (mealId) => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId} `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail= (meal) => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-detail');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-outline-secondary">Go somewhere</a>
    </div>
    ` ;  
    mealDetails.appendChild(div);
} 
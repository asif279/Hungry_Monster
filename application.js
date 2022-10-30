const button = document.getElementById("searchbtn").addEventListener("click",function(){

const searchInput= document.getElementById("search-field").value;

//console.log(searchInput);

let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
fetch(url)
  .then(response => response.json())
  .then(data => displayData(data.meals))
});

function displayData(meal){
    

  const mealBox =document.getElementById("song-container");
  for (let i = 0; i < meal.length; i++) {
    const user = meal[i];
    console.log(user);
    //console.log(user.strMeal);

    const div =document.createElement('div');
    div.className = ('single-element');
    //console.log(div);
    div.innerHTML = `
    <h3 id="meal">${user.strMeal}</h3>
    <img src="${user.strMealThumb}" id="img">
    
    `
    mealBox.appendChild(div);
    
  }


}



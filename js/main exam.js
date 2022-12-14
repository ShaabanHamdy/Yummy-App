// ----------------------------------Loading Screen----------------------------------------------
$(document).ready(function () {
  homePage("").then(()=>{
    $(".loadingScreen").fadeOut(500);
    $('body').css({'overflow':' visible'})
  })

  
});
// -------------------------------------Side Nav--------------------------------
$(".close-icon").click(() => {
  let sideWidth = $(".side-div ").outerWidth();
  if ($(".side-div ").css("left") == "-264.562px") {
    $(".side-div").animate({ left: "0px" }, 500);
    $(".nav-right").animate({ left: "264.562px" }, 500);
    $(".close-icon").removeClass("fa-align-justify");
    $(".close-icon").addClass("fa-x");
    for (let i = 0; i < 5; i++) {
      $(".nav-top ul li")
        .eq(i)
        .animate({ top: "0" }, (i + 5) * 150);
    }
  } else {
    $(".nav-top ul li").animate({ top: "400" }, 500);
    $(".side-div").animate({ left: -sideWidth }, 500);
    $(".nav-right").animate({ left: "0px" }, 500);
    $(".close-icon").addClass("fa-align-justify");
    $(".close-icon").removeClass("fa-x");
  }
});
// =============================================================================
let arrayData = document.getElementById("arrayData");
let home = document.getElementById("Home");
let serchPage=document.getElementById('serchPage')

// =====================================SearchByName(term)=======================



async function homePage(term) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
  response = await response.json();
  displayDatat(response.meals);
}
// ================================== displayDatat(item)====================================================

function displayDatat(item) {
  let showData = "";
  for (let i = 0; i < item.length; i++) {
    showData += `
            <div class="col-md-3">
                  <div onclick='getIdDetails("${item[i].idMeal}")' class="meal rounded-4 position-relative overflow-hidden">
                    <img class="w-100" src="${item[i].strMealThumb}" alt="">
                  <div class="overLayer">
                    <h3 class="ms-3">${item[i].strMeal}</h3>
                  </div>
                  </div>
            </div>
    
    `;

   
  }
  arrayData.innerHTML = showData;
  serchPage.innerHTML= ''
}

// ===========================================getIdDetails===============================

async function getIdDetails(mealId) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  response = await response.json();
  getMealDetails(response.meals[0]);
}

function getMealDetails(meal) {
  let ingrdens = "";
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingrdens += `<span class="btn btn-info mx-1 my-1"> 
      ${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</span>`;
    }
  }
let tags = meal.strTags?.split(",");
  if (!tags) tags = [];

  let tagsStr = "";
  for (let i = 0; i < tags.length; i++) {
    tagsStr += 
    `<span class="btn btn-danger mx-1">${tags[i]}</span>`;
  }
  // ---------------------------
  let getDataDetails = `
    <div class="col-md-5">
    <img class="w-100" src=${meal.strMealThumb}>
    <h2 class=" text-white text-center">${meal.strMeal}</h2>
  </div>
  <div class="col-md-7">
    <div class="text-white">
      <h2>Instructions</h2>
    <p class=' text-muted'>${meal.strInstructions}</p>
    <p> <span class=" fw-bolder">Area : </span>${meal.strArea} </p>
    <p> <span class=" fw-bolder">Category : </span>${meal.strCategory}</p>
    <h3>Recipes :</h3>
    <div class="my-2 m-1">
      ${ingrdens}
    </div>
    <h3>Tags : </h3>
    ${tagsStr}
    <br>
    <br>
    <a target='_blank' href="${meal.strSource}" class="btn btn-success">Source</a>
    <a target='_blank' href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>

    </div>
  </div>`;

  arrayData.innerHTML = getDataDetails;
  serchPage.innerHTML= ''
}




home.onclick = () => {
  homePage("");

};



// -----------------------------------------Search-------------


function showSearchInputs() {
  serchPage.innerHTML = `
        <div class="row pt-5">
        <div class="col-md-6">
          <input onKeyup="getSearchApi(this.value)" class=" form-control bg-transparent" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
          <input  onKeyup="getSearchApip(this.value)" maxlength='1'  class=" form-control bg-transparent" type="text" placeholder="Search By First letter">
        </div>
      </div>
    `;
    
    arrayData.innerHTML=''
}
async function getSearchApi(term) {

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
  response = await response.json();
  displayDatat(response.meals)

      
}
async function getSearchApip(term) {
 
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`
  );
  response = await response.json();
  displayDatat(response.meals)
  
      
}

let Search=document.getElementById('Search')

Search.onclick=function(){
  showSearchInputs()
}

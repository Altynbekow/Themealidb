


const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b\n'
async function getFoods (){
    const res = await fetch(url)
    const data = await res.json()
    renderData(data.meals)
}

getFoods();

const foodsDiv = document.getElementById('foods')
function renderData(foods){
    console.log(foods);
    for (const item of foods) {
        // language=HTML format=false
        foodsDiv.innerHTML += `
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${item.strMealThumb}">
        </a>
        <div class="mt-4">
          <h2 onclick="getInfo(${item.idMeal})" class="text-current title-font text-lg font-medium cursor-pointer">${item.strMeal}</h2>
          <p class="mt-1">$ ${~~(Math.random() * 30) }</p>
        </div>
      </div>
        `
    }
}


function getInfo(id){
    console.log(id);
    localStorage.setItem('ID', id)
    window.location.href = "info.html"


}
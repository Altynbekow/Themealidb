



const id = localStorage.getItem('ID');
let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
let foods = [];
if (id) {
    fetch(url + id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            foods.push(data.meals[0]);
            renderinfo(data.meals[0]);
        })
}

const image = document.querySelector('#image');
const h1Name = document.querySelector('#f-name');
const desc = document.querySelector('#desc');
const ing = document.querySelector('.ing');
const btn = document.getElementById("btn");
const likebtn = document.getElementById("likebtn");
const videoFrame = document.getElementById("videoFrame");
function renderinfo(food){

    image.src = food.strMealThumb;
    h1Name.innerText = food.strMeal;
    desc.innerText = food.strInstructions;
    videoFrame.src = food.strYoutube.replace('watch?v=','embed/');
    ing.innerHTML = '';
    for (let i = 1; i< 21; i++) {
        if (food["strIngredient" + i]) {
            ing.innerHTML += `
        <div class="flex border-t border-gray-800 py-2">
                        <span class="text-gray-500">${food["strIngredient"+ i]}</span>
                        <span class="ml-auto text-white">${food["strMeasure"+ i]}</span>
                    </div>
`;
        }
    }
}

btn.addEventListener('click', () => {
    window.location.href = "index.html";
});

let islike = false;

likebtn.onclick = () => {
    islike=!islike;
   const food = foods.find( food => food.idMeal === id);
   console.log(food,"-------------fff---------------");
   const likeFood = {
       ...food,
       like: islike

   }

   console.log(likeFood,"-------------fff------0---------");
   const svg = likebtn.querySelector('svg');
   svg.style.fill = islike?'red' : '';




}







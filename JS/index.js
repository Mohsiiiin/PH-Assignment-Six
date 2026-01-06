const loadCetagory = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
}

const randomData = ()=>{
    const url ="https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPlants(data.plants.slice(0,3)))
}

const loadTrees=(id)=>{
    const url =`https://openapi.programming-hero.com/api/category/${id}`

    // category-btn-active

    const categoryBtn = document.querySelectorAll(".btn-category");
    for(let btn of categoryBtn ){
        btn.classList.remove("active")
    }

    const currentBtn= document.getElementById(`category-btn-${id}`);
    currentBtn.classList.add("active")
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlants(data.plants))
}

const loadTreeDetails=(id)=>{
    const url =`https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayModal(data.plants))
}

// card-section
const displayPlants = (plants) =>{
    const ChooseTrees =document.getElementById("Choose-trees");
    ChooseTrees.innerHTML ="";

    for(let plant of plants){
        const plantCard = document.createElement("div")
        plantCard.innerHTML= `
        <div onclick="loadTreeDetails(${plant.id})" class="card bg-base-100 transition-shadow w-[320px] h-[520px]">
            <figure>
            <img
                src="${plant.image}"
                alt=""/>
            </figure>
            <div class="card-body">
              <h2 class="card-title items-start">${plant.name}</h2>
              <p>${plant.description}</p>
              <div class="flex justify-between">
                <p class="text-green-800 font-semibold">${plant.category}</p>
                <h1 class="font-bold text-black text-[18px]">${plant.price}</h1>
              </div>
              <div class="card-actions justify-end"> 
                <button class="btn w-full rounded-2xl border-none bg-green-800 text-white">Buy Now</button>
              </div>
            </div>
          </div>`;
        ChooseTrees.append(plantCard)
    }
}

// left-category
const displayCategory = (categories) => {
    const catCategory = document.getElementById("left-side");
    catCategory.innerHTML = "";

    for (let category of categories) {
        const leftCategory = document.createElement("div")
        leftCategory.innerHTML =`
        <button id="category-btn-${category.id}" onclick = "loadTrees(${category.id})" class="btn justify-start btn-block shadow flex-1 btn-category">${category.category_name} </button>`;
        catCategory.append(leftCategory);
    }
}

const displayModal = (plants) =>{
   const detailsContainer =document.getElementById("details-container");
   detailsContainer.innerHTML= `<div>
        <img src="${plants.image}" alt="">
      </div>
      <p>${plants.category}</p>
      <p>${plants.description}</p>
      <h1>${plants.price}</h1>`;
      
    document.getElementById("my_modal_5").showModal();

}


loadCetagory();
randomData();
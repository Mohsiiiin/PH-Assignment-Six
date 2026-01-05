const loadCetagory = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
}

const loadTrees=(id)=>{
    const url =`https://openapi.programming-hero.com/api/category/${id}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlants(data.plants))
}

const displayPlants = (plants) =>{
    const ChooseTrees =document.getElementById("Choose-trees");
    ChooseTrees.innerHTML ="";

    for(let plant of plants){
        const plantCard = document.createElement("div")
        plantCard.innerHTML= `
        <div class="card bg-base-100 transition-shadow w-[320px] h-[520px]">
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





const displayCategory = (categories) => {
    const catCategory = document.getElementById("left-side");
    catCategory.innerHTML = "";

    for (let category of categories) {
        const leftCategory = document.createElement("div")
        leftCategory.innerHTML =`
        <button onclick = "loadTrees(${category.id})" class="btn justify-start btn-block shadow flex-1">${category.category_name} </button>`;
        catCategory.append(leftCategory);
    }
}



loadCetagory();
const loadCetagory = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
}

const displayCategory = (categories) => {
    const catCategory = document.getElementById("left-side");
    catCategory.innerHTML = "";

    for (let category of categories) {
        const leftCategory = document.createElement("div")
        leftCategory.innerHTML =`
        <button  class="btn justify-start btn-block shadow flex-1 ">${category.category_name} </button>`;

        catCategory.append(leftCategory)
    }
}

loadCetagory();
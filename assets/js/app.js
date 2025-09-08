// select elements
const categoryParent = document.getElementById("category__parent");
const categoryPreloaderGif = document.getElementById("category__preloader");
const cardContainer = document.getElementById("card__container");
const cardPreload = document.getElementById("cardPreload");

// category preloader
const categoryPreloader = (status) => {
  if (status === true) {
    categoryPreloaderGif.classList.remove("hidden");
    categoryParent.classList.add("hidden");
  } else {
    categoryParent.classList.remove("hidden");
    categoryPreloaderGif.classList.add("hidden");
  }
};

// card container preloader
const cardContainerPreloader = (status) => {
  if (status === true) {
    cardPreload.classList.remove("hidden");
    cardContainer.classList.add("hidden");
  } else {
    cardContainer.classList.remove("hidden");
    cardPreload.classList.add("hidden");
  }
};

// loadCategoryPlants
const loadCategoryPlants = (id) => {
  cardContainerPreloader(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayCategoryPlants(data.plants);
    });
};

// display category plants
const displayCategoryPlants = (plants) => {
  cardContainer.innerHTML = "";

  plants.forEach((plant) => {
    const plantDiv = document.createElement("div");
    plantDiv.innerHTML = `
        <div class="p-4 bg-white rounded-lg h-full flex flex-col justify-between">
            <!-- image -->
            <div class="">
                <img class="rounded-lg h-48 w-full object-cover overflow-hidden" src="${plant.image}" alt="">
            </div>
            <!-- title & paragraph -->
            <div class="mt-3 space-y-2">
                <h2 class="text-gray-800 text-sm font-semibold">${plant.name}</h2>
                <p class="text-gray-800 text-xs font-normal">
                ${plant.description}
                </p>
            </div>

            <!-- category and price -->
            <div class="mt-2 flex items-center justify-between">
                <!-- category -->
                <div class="px-3 py-1 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                <span>${plant.category}</span>
                </div>

                <!-- price -->
                <div class="text-gray-800 text-sm font-semibold">
                <p><span>৳</span>${plant.price}</p>
                </div>
            </div>

            <!-- button -->
            <div class="mt-3">
                <button class="w-full px-5 py-3 bg-green-700 rounded-full text-white text-base font-medium cursor-pointer transition duration-75 hover:bg-green-600">Add to Cart</button>
            </div>

        </div>
    `;

    // append
    cardContainer.appendChild(plantDiv);
  });
  cardContainerPreloader(false);
};

// load categories
const loadCategories = () => {
  categoryPreloader(true); // preload first
  const url = "https://openapi.programming-hero.com/api/categories";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// display categories
const displayCategories = (categories) => {
  // vitore dhukbo
  categories.forEach((category) => {
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button onclick="loadCategoryPlants(${category.id})" class="w-full text-start text-gray-800 text-base font-normal cursor-pointer px-2.5 py-2 rounded transition duration-75 hover:bg-green-700 hover:text-white">${category.category_name}</button>
    `;

    categoryParent.appendChild(categoryDiv);
  });
  categoryPreloader(false);
};

// all plants
const loadPlants = () => {
  cardContainerPreloader(true);
  const url = "https://openapi.programming-hero.com/api/plants";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

const displayPlants = (plants) => {
  cardContainer.innerHTML = "";

  plants.forEach((plant) => {
    const plantCardDiv = document.createElement("div");
    plantCardDiv.innerHTML = `
        <div class="p-4 bg-white rounded-lg h-full flex flex-col justify-between">
            <!-- image -->
            <div class="">
                <img class="rounded-lg h-48 w-full object-cover overflow-hidden" src="${plant.image}" alt="">
            </div>
            <!-- title & paragraph -->
            <div class="mt-3 space-y-2">
                <h2 class="text-gray-800 text-sm font-semibold">${plant.name}</h2>
                <p class="text-gray-800 text-xs font-normal">
                ${plant.description}
                </p>
            </div>

            <!-- category and price -->
            <div class="mt-2 flex items-center justify-between">
                <!-- category -->
                <div class="px-3 py-1 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                <span>${plant.category}</span>
                </div>

                <!-- price -->
                <div class="text-gray-800 text-sm font-semibold">
                <p><span>৳</span>${plant.price}</p>
                </div>
            </div>

            <!-- button -->
            <div class="mt-3">
                <button class="w-full px-5 py-3 bg-green-700 rounded-full text-white text-base font-medium cursor-pointer transition duration-75 hover:bg-green-600">Add to Cart</button>
            </div>

        </div>
    `;

    // append
    cardContainer.appendChild(plantCardDiv);
  });
  cardContainerPreloader(false);
};

loadCategories();

loadPlants();

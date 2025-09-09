// select elements
const categoryParent = document.getElementById("category__parent");
const categoryPreloaderGif = document.getElementById("category__preloader");
const cardContainer = document.getElementById("card__container");
const cardPreload = document.getElementById("cardPreload");
const modalContainer = document.getElementById("modal__container");
const plantModal = document.getElementById("plant__modal");
const cartContainer = document.getElementById("cart__container");
const cartTotal = document.getElementById("cart__total");

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

const removeActiveClassFormBtn = () => {
  const categoryBtns = document.querySelectorAll(".category_btn");
  categoryBtns.forEach((btn) => btn.classList.remove("btn__active"));
};

// loadCategoryPlants
const loadCategoryPlants = (id) => {
  cardContainerPreloader(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClassFormBtn();
      const clickedCategory = document.getElementById(`btn__category__${id}`);
      clickedCategory.classList.add("btn__active");
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
                <h2 onclick="loadPlantDetails(${plant.id})" class="text-gray-800 text-sm font-semibold cursor-pointer">${plant.name}</h2>
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
                <button onclick="addToCart(${plant.id}, '${plant.name}', ${plant.price})" class="w-full px-5 py-3 bg-green-700 rounded-full text-white text-base font-medium cursor-pointer transition duration-75 hover:bg-green-600">Add to Cart</button>
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
        <button id="btn__category__${category.id}" onclick="loadCategoryPlants(${category.id})" class="w-full text-start text-gray-800 text-base font-normal cursor-pointer px-2.5 py-2 rounded transition duration-75 hover:bg-green-700 hover:text-white category_btn">${category.category_name}</button>
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
    .then((data) => {
      removeActiveClassFormBtn();
      const activeBtnHtml = document.getElementById("allBtn");
      activeBtnHtml.classList.add("btn__active");
      displayPlants(data.plants);
    });
};

// load Plant Details
const loadPlantDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayLoadPlantDetails(data.plants);
    });
};

const displayLoadPlantDetails = (plantsDetails) => {
  modalContainer.innerHTML = `
    <div class="">
      <h1 class="text-3xl font-semibold text-zinc-800">${plantsDetails.name}</h1>

      <!-- image -->
      <div class="my-5 h-56">
        <img class="h-full w-full object-cover overflow-hidden rounded-lg" src="${plantsDetails.image}" alt="Image">
      </div>

      <!--  -->
      <div class="space-y-2">
        <div class="">
          <strong>Category:</strong>
          <span>${plantsDetails.category}</span>
        </div>

        <div class="flex flex-row gap-2">
          <strong>Price:</strong>
          <p>
            <span>$</span>${plantsDetails.price}
          </p>
        </div>

        <div class="">
          <strong>Description:</strong>
          <span>
            ${plantsDetails.description}
          </span>
        </div>

      </div>

    </div>
  `;
  plantModal.showModal();
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
                <h2 onclick="loadPlantDetails(${plant.id})" class="text-gray-800 text-sm font-semibold cursor-pointer">${plant.name}</h2>
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
                <button onclick="addToCart(${plant.id}, '${plant.name}', ${plant.price})" class="w-full px-5 py-3 bg-green-700 rounded-full text-white text-base font-medium cursor-pointer transition duration-75 hover:bg-green-600">Add to Cart</button>
            </div>

        </div>
    `;

    // append
    cardContainer.appendChild(plantCardDiv);
  });
  cardContainerPreloader(false);
};

// add to cart
let cart = [];
const addToCart = (id, name, price) => {
  const confirmAdd = confirm(
    `Do you want to add "${name}" ($${price}) to your cart?`
  );

  if (!confirmAdd) {
    return;
  }

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  updateCartUI();
};

const updateCartUI = () => {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.classList =
      "flex items-center justify-between px-3 py-2 bg-green-50 rounded-lg mb-2";

    div.innerHTML = `
      <div>
        <h4 class="text-gray-800 text-sm font-semibold mb-1">${item.name}</h4>
        <p class="text-gray-800 text-base font-normal opacity-50">
          $${item.price} × ${item.quantity}
        </p>
      </div>
      <div>
        <span onclick="removeFromCart(${item.id})" class="cursor-pointer text-neutral-400 text-xl">
          <i class="ri-close-line"></i>
        </span>
      </div>
    `;

    // append
    cartContainer.appendChild(div);
  });

  cartTotal.innerText = `$${total}`;
};

// removecart
const removeFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
};

loadCategories();

loadPlants();

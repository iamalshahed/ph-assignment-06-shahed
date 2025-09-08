// select elements
const categoryParent = document.getElementById("category__parent");
const categoryPreloaderGif = document.getElementById("category__preloader");

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

// load categories
const loadCategories = () => {
  categoryPreloader(true);
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
        <button class="w-full text-start text-gray-800 text-base font-normal cursor-pointer px-2.5 py-2 rounded transition duration-75 hover:bg-green-700 hover:text-white">${category.category_name}</button>
    `;

    categoryParent.appendChild(categoryDiv);
  });
  categoryPreloader(false);
};

loadCategories();

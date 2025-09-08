// select elements
const categoryParent = document.getElementById("category__parent");

// load categories
const loadCategories = () => {
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
};

loadCategories();

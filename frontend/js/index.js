import {
  fetchPopularCities,
  setCityCookie,
  getCityCookie,
  fetchCities,
} from "./utils/cities.js";

const $ = document;
const popularCitiesParent = $.querySelector(".main__cities-list .row");
const citySearchInput = $.querySelector(".main__input");
const citySearchResult = $.querySelector(".search-result-cities");

let cities = null;

const cityClickHandler = (event, city) => {
  event.preventDefault();
  setCityCookie(city);
  window.location.href = `http://127.0.0.1:5500/frontend/pages/main.html?${city}`;
};

const showPopularCities = (cities) => {
  cities.forEach((city) => {
    popularCitiesParent.insertAdjacentHTML(
      "beforeend",
      `<div class="col-2 d-flex justify-content-center">
           <li class="main__cities-item">
               <a class="main__cities-link"  href="#" onclick="cityClickHandler(event , '${city.href}')">${city.name}</a>
               </li> 
               </div>`
    );
  });
};

const loadCityPosts = (cityCookie) => {
  if (cityCookie) {
    window.location.href = `http://127.0.0.1:5500/frontend/pages/main.html?${city}`;
  }
};

const citySearchHandler = (event) => {
  const citySearchTitle = event.target.value;
  const citiesResult = cities.filter((city) =>
    city.name.startsWith(citySearchTitle)
  );

  if (citySearchTitle.trim()) {

    return true;
  }

  citySearchResult.classList.add("active");

  citySearchResult.innerHTML = "";

  citiesResult.forEach((city) => {
    citySearchResult.insertAdjacentHTML(
      "beforeend",
      `
    <li>${city.name}</li>
    `
    );
  });
};

citySearchInput.addEventListener("keyup", (event) => citySearchHandler(event));

window.cityClickHandler = cityClickHandler;

window.addEventListener("load", async () => {
  const popularCities = await fetchPopularCities();
  console.log(popularCities);
  showPopularCities(popularCities);

  const cityCookie = getCityCookie();
  loadCityPosts(cityCookie);

  cities = await fetchCities();
});

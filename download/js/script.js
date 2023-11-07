let headerCountryBtn = document.querySelector(".header__country")
let countryModal = document.querySelector(".country-modal")
let headerLeftDropDown = document.querySelector(".header__left-dropdown")
let headerLeftLink = document.querySelector(".header__left-link")
let headerLeftBtn = document.querySelector(".header__left-btn")
let loginModal = document.querySelector(".login-modal")
let overlay = document.querySelector(".overlay")
let overlayHeader = document.querySelector(".overlay-header")

headerCountryBtn.addEventListener("click", () => {
    countryModal.classList.toggle("country-modal--active")
    overlay.classList.toggle("overlay--active")
})

overlay.addEventListener("click", () => {
    countryModal.classList.remove("country-modal--active")
    overlay.classList.remove("overlay--active")
    loginModal.classList.remove("login-modal--active")
})

overlayHeader.addEventListener("click", () => {
    overlayHeader.classList.remove("overlay-header--active")
})

headerLeftLink.addEventListener("click", () => {
    headerLeftDropDown.classList.toggle("header__left-dropdown--active")
})

headerLeftBtn.addEventListener("click", () => {
    overlay.classList.add("overlay--active")
    loginModal.classList.add("login-modal--active")
})
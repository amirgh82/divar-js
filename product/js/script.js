let headerCountryBtn = document.querySelector(".header__country")
let countryModal = document.querySelector(".country-modal")
let headerCategoryBtn = document.querySelector(".header__category-btn")
let headerCategoryMenu = document.querySelector(".header__category-menu")
let headerSearchBarDropDown = document.querySelector(".header__searchbar-dropdown")
let headerFormInput = document.querySelector(".header__form-input")
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

overlay.addEventListener("click" , ()=>{
    countryModal.classList.remove("country-modal--active")
    overlay.classList.remove("overlay--active")
    loginModal.classList.remove("login-modal--active")
})

headerCategoryBtn.addEventListener("click" , ()=>{
    headerCategoryMenu.classList.toggle("header__category-menu--active")  
    overlayHeader.classList.toggle("overlay-header--active")
})

overlayHeader.addEventListener("click",()=>{
    headerCategoryMenu.classList.remove("header__category-menu--active")
    overlayHeader.classList.remove("overlay-header--active")
    headerSearchBarDropDown.classList.remove("header__searchbar-dropdown--active")
})

headerFormInput.addEventListener("focus", ()=>{
    headerSearchBarDropDown.classList.add("header__searchbar-dropdown--active")
    overlayHeader.classList.add("overlay-header--active")
})

headerLeftLink.addEventListener("click" , ()=>{
    headerLeftDropDown.classList.toggle("header__left-dropdown--active")
})

headerLeftBtn.addEventListener("click" , ()=>{
    overlay.classList.add("overlay--active")
    loginModal.classList.add("login-modal--active")
})
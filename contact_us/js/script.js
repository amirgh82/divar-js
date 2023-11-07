let headerLeftDropDown = document.querySelector(".header__left-dropdown")
let headerLeftLink = document.querySelector(".header__left-link")

headerLeftLink.addEventListener("click", () => {
    headerLeftDropDown.classList.toggle("header__left-dropdown--active")
})

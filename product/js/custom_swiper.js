let previewSlider = new Swiper(".product__preview-slider", {
    pagination: {
        el: ".swiper-pagination",
    },
});

let mainSlider = new Swiper(".main__slider-wrapper", {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 20,
});
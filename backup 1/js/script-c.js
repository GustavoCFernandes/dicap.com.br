var swiper = new Swiper(".slide-content-c", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
       0: {
            slidesPerView: 1.1,
        },
        370: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 3,
        },
        670: {
            slidesPerView: 4,
        },
        950: {
            slidesPerView: 6,
        },
    },
  });
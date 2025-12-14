export function initSwiperTestimonials() {
  const prevButton = document.querySelector('.testimonials__button--prev');
  const nextButton = document.querySelector('.testimonials__button--next');

  const swiper = new Swiper('.testimonials__box', {
    slidesPerView: 1.3,
    loop: false,
    spaceBetween: 39,

    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },
    on: {
      init() {
        updateButtons(this);
      },
      slideChange() {
        updateButtons(this);
      }
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1348: {
        slidesPerView: 3,
      },
    }
  })

  function updateButtons(swiper) {
    if (swiper.isBeginning) {
      prevButton.classList.add("disabled");
    } else {
      prevButton.classList.remove("disabled");
    }

    if (swiper.isEnd) {
      nextButton.classList.add("disabled");
    } else {
      nextButton.classList.remove("disabled");
    }
  }
}
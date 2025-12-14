export function initSwiperChooseUs() {
    const prevButton = document.querySelector('.choose-us__button--prev');
    const nextButton = document.querySelector('.choose-us__button--next');

    const swiper = new Swiper('.choose-us__wrapper', {
      slidesPerView: 1.2,
      loop: false,
      spaceBetween: 18,
      enable: true,

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
        },
        
        1104: {
          slidesPerView: 3,
          spaceBetween: 38,
        }
        
        
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
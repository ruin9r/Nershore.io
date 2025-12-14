export function initSwiperInsights() {
  const prevButton = document.querySelector(".insights__button--prev");
  const nextButton = document.querySelector(".insights__button--next");

  const swiper = new Swiper(".insights__swiper", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
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
      1086: {
        slidesPerView: 2.5,
        spaceBetween: 28,
      },


      
      440: {
        slidesPerView: 1.5,
      }
      
    },
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
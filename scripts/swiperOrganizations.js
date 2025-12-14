export function initSwiperOrganization() {
  const swiper = new Swiper('.organizations__inner', {
    enabled: false,
    slidesPerView: 4,
    speed: 9000,
    loop: true,
    loopedSlides: 100,
    loopAdditionalSlides: 3,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },

    breakpoints: {
      768: {
        enabled: true,
      }
    }

  });
}
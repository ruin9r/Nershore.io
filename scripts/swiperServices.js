export function initSwiperServices() {
  const swiper = new Swiper('.services__wrapper', {
    enabled: false,
    loopedSlides: 6,
    loop: true,

    breakpoints: {
      320: {
        enabled: true,
        slidesPerView: 1,
        spaceBetween: 35,
        rtl: true,
      },
      492: {
        enabled: false,
      }
    }
  });
}
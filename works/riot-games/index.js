var swiper1 = new Swiper(".visual-swiper", {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: { // 버튼 사용자 지정
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true, // 마우스 그랩 기능 추가
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,// 사용자 상호작용
  },
  speed: 800,
});

var swiper2 = new Swiper(".s2-swiper", {
  pagination: false,
  navigation: { // 버튼 사용자 지정
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true, // 마우스 그랩 기능 추가
  loop: true,
  autoplay: false,
  slidesPerView: 'auto',
  slideWidth: window.innerWidth / 5,
  // spaceBetween: 48,
  centeredSlides: true,
});
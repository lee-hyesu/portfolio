const swiper1 = new Swiper(".visual-swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    // 버튼 사용자 지정
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: false, // 마우스 그랩시 커서 손모양
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // 사용자 상호작용
  },
  speed: 800,
});

// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.matchMedia({
//   '(min-width:1025px)':function(){
//       // 섹션2 아래서 올라오는거
//       ScrollTrigger.create({
//           trigger:'.s1',
//           start:'top top',
//           // end:'+=250%',
//     end:'+=100%',
//           pin:true,
//           // animation:s1_tl01,
//           // scrub:1,
//       })

//       gsap.timeline({
//           scrollTrigger:{
//               trigger:'.s1',
//               // end:'100%',
//               scrub:1,
//           }
//       })
//       .to('.s2',{marginTop:'-100vh',})
//   },
//   '(max-width:1024px)':function(){

//   }
// })

const swiper2 = new Swiper(".s2-swiper", {
  pagination: false,
  navigation: {
    // 버튼 사용자 지정
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: false,
  loop: true,
  autoplay: false,
  slidesPerView: "auto",
  slideWidth: window.innerWidth / 5,
  // spaceBetween: 48,
  centeredSlides: true,
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1.5,
  //     spaceBetween: 24,
  //   },
  //   768: {
  //     slidesPerView: 3.2,
  //     spaceBetween: 24,
  //   },
  //   1024: {
  //     slidesPerView: 4.3,
  //     spaceBetween: 48,
  //   },
  // },
});

// s4
let swiper3 = new Swiper(".s4-swiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: ".s4 .swiper-button-next",
    prevEl: ".s4 .swiper-button-prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 1.12,
      spaceBetween: 80,
    },
  },
  on: {
    slideChange: function () {
      let wp = $(window).innerWidth();

      if (wp > 700) {
        $(".main .s4 .txt-container").addClass("down");
      }
    },
    slideChangeTransitionEnd: function () {
      let wp = $(window).innerWidth();

      if (wp > 700) {
        $(".main .s4 .txt-container").removeClass("down");
      }
    },
  },
  centeredSlides: true,
});
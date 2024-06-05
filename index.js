/*
gsap.to(".main-text span", { 
  duration: 4.5, text: "Lee Hye Su." ,
//   repeat: -1,
//   yoyo: true
});
*/

/* 커서 */
// document.addEventListener("DOMContentLoaded", function() {
//   var cursor = document.querySelector('.follow-cursor');

//   document.addEventListener('mousemove', function(e) {
//     cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//   });
// });

/* 로고 클릭 시 이동을 억제함 */
$('a[href="#"]').on("click", (e) => e.preventDefault());

/* 파티클 js */
// particlesJS("particles-js", {
//   particles: {
//     number: {
//       value: 200, // 파티클의 수
//       density: {
//         // 파티클 밀도 설정
//         enable: true,
//         value_area: 1000, // 파티클이 분포될 영역 크기
//       },
//     },
//     color: {
//       // value: "#f9f9f9",
//       value: "#efefef",
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//       polygon: {
//         nb_sides: 4, // 다각형 변의 수
//       },
//       image: {
//         src: "img/github.svg",
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 2,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 5,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: false,
//       distance: 150,
//       color: "#000",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 1,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "bubble",
//       },
//       onclick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 3,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   retina_detect: true,
// });

// 페이지가 로드될 때 실행
document.addEventListener("DOMContentLoaded", function () {
  // 헤더 요소와 .header-marquee 요소를 가져옴
  var header = document.querySelector("header");
  var marquee = document.querySelector(".header-marquee");

  // 스크롤 이벤트를 감지하여 헤더가 일정 이상 스크롤되면 opacity를 0으로 설정
  window.addEventListener("scroll", function () {
    if (window.scrollY > header.offsetHeight) {
      marquee.style.opacity = "0";
      header.style.padding = "0.8vw 0 0";
    } else {
      marquee.style.opacity = "1";
      header.style.padding = "2.2vw 0 0";
    }
  });
});

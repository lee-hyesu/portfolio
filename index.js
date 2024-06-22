/*
gsap.to(".main-text span", { 
  duration: 4.5, text: "Lee Hye Su." ,
//   repeat: -1,
//   yoyo: true
});
*/

/* 로고 클릭 시 이동을 억제함 */
// $('a[href="#"]').on("click", (e) => e.preventDefault());

// works 섹션 프로젝트 눌러도 안 올라가게 제어
$('.works-container a[href="#"]').on("click", (e) => e.preventDefault());

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

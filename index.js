AOS.init({
  duration: 1000,
});

// 현재 스크롤 위치 확인
window.onscroll = function () {
  var scrollPosition = window.scrollY;
  console.log("현재 스크롤 위치: " + scrollPosition + "px");
};

/* 로고 클릭 시 이동을 억제함 */
// $('a[href="#"]').on("click", (e) => e.preventDefault());

// works 섹션 프로젝트 눌러도 안 올라가게 제어
$('.works-container a[href="#"]').on("click", (e) => e.preventDefault());

// 페이지가 로드될 때 실행
document.addEventListener("DOMContentLoaded", function () {
  // 헤더 요소와 .header-marquee 요소를 가져옴
  let header = document.querySelector("header");
  let marquee = document.querySelector(".header-marquee");

  // 스크롤 이벤트를 감지하여 헤더가 일정 이상 스크롤되면 opacity를 0으로 설정
  // 이 부분 때문에 스크롤 올릴 때 한 번 걸리는 현상 생김
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

$(window).on('scroll', () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition >= 200) {
    $('#about .title-box .title-line').css({
      'width': '330px',
    });
  } else {
    $('#about .title-box .title-line').css({
      'width': '0',
    });
  }

  if (scrollPosition >= 1110) {
    $('#works .title-box .title-line').css({
      'width': '330px',
    });
  } else {
    $('#works .title-box .title-line').css({
      'width': '0',
    });
  }
});

// .sejin 요소에 마우스 이벤트 리스너 추가
$('#works .works-text-box .sejin').on('mouseenter', () => {
  $('#works .works-text-box .works-img img').attr('src', './images/pf-parking.jpg');
  $('#works .works-text-box .works-img img').css('opacity', '1');
});

$('#works .works-text-box .sejin').on('mouseleave', () => {
  $('#works .works-text-box .works-img img').attr('src', './images/pf-parking.jpg');
  $('#works .works-text-box .works-img img').css('opacity', '0');
});
// .beaurit
$('#works .works-text-box .beaurit').on('mouseenter', () => {
  $('#works .works-text-box .works-img img').attr('src', './images/pf-beaurit.jpg');
  $('#works .works-text-box .works-img img').css('opacity', '1');
});
$('#works .works-text-box .beaurit').on('mouseleave', () => {
  $('#works .works-text-box .works-img img').css('opacity', '0');
});
// 국립극단
$('#works .works-text-box .ntck').on('mouseenter', () => {
  $('#works .works-text-box .works-img img').attr('src', './images/pf-ntck.jpg');
  $('#works .works-text-box .works-img img').css('opacity', '1');
});

$('#works .works-text-box .ntck').on('mouseleave', () => {
  $('#works .works-text-box .works-img img').attr('src', './images/pf-ntck.jpg');
  $('#works .works-text-box .works-img img').css('opacity', '0');
});
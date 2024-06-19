// 현재 스크롤 위치 확인
window.onscroll = function () {
  var scrollPosition = window.scrollY;
  console.log("현재 스크롤 위치: " + scrollPosition + "px");
};

// menu-nav 열렸을 때 x 아이콘 눌러도 a 기능 안 되도록 함
$(document).ready(function() {
  $('.menu').on('click', function(event) {
    event.preventDefault();
  });
});

// 푸터 '무엇을 도와드릴까요?' 하단 li a 기능 안 되도록 함
$(document).ready(function() {
  $('.footer-inner ul li a').click(function(event) {
    event.preventDefault();
  });
});

// 헤더 패딩값 조절 및 햄버거 아이콘 패딩값 조절
$(window).on("scroll", () => {
  if (document.documentElement.scrollTop >= 100) {
    $("header .nav-wrapper").addClass("on");
    $('.menu').addClass('on');
  } else {
    $("header .nav-wrapper").removeClass("on");
    $('.menu').removeClass('on');
  }
});

// 초기 상태에서 .on 클래스 추가
$(".main-nav ul li:first-child p a").addClass("on");
$(".bg-wrapper .bg-img .inner-bg-1").addClass("on");
$(".bg-wrapper .bg-img .inner-1").addClass("on");
$(".main-nav ul li p").addClass("on");
$(".slide-inner-wrapper #main-slide1 .inner-text h2 .play-title").addClass(
  "active"
);
$(".slide-inner-wrapper #main-slide1 .inner-text p").addClass("active");

// 스크롤에 따른 main-nav 글씨 색상 조절
$(window).on("scroll", () => {
  var scrollPosition = window.scrollY;

  if (scrollPosition < 700) {
    $(".main-nav ul li:first-child p a").addClass("on");
  } else {
    $(".main-nav ul li:first-child p a").removeClass("on");
  }

  if (scrollPosition >= 700 && scrollPosition < 1500) {
    $(".main-nav ul li:nth-child(2) p a").addClass("on");
  } else {
    $(".main-nav ul li:nth-child(2) p a").removeClass("on");
  }

  if (scrollPosition >= 1500 && scrollPosition <= 2500) {
    $(".main-nav ul li:last-child p a").addClass("on");
  } else {
    $(".main-nav ul li:last-child p a").removeClass("on");
  }

  if (scrollPosition > 2500) {
    $(".main-nav").addClass("on");
    $(".main-nav").css("opacity", "0");
  } else {
    $(".main-nav").removeClass("on");
    $(".main-nav").css("opacity", "1");
  }

  // about 부분 텍스트 나타나는 효과
  if (scrollPosition >= 2900) {
    $(".about .about-title p").addClass("active");
  } else {
    $(".about .about-title p").removeClass("active");
  }

  // 연극 inner-bg
  if (scrollPosition < 300) {
    $(".bg-wrapper .bg-img .inner-bg-1").addClass("on");
    $(".bg-wrapper .bg-img .inner-1").addClass("on");
  } else {
    $(".bg-wrapper .bg-img .inner-bg-1").removeClass("on");
    $(".bg-wrapper .bg-img .inner-1").removeClass("on");
  }

  if (700 <= scrollPosition && scrollPosition < 1200) {
    $(".bg-wrapper .bg-img .inner-bg-2").addClass("on");
    $(".bg-wrapper .bg-img .inner-2").addClass("on");
  } else {
    $(".bg-wrapper .bg-img .inner-bg-2").removeClass("on");
    $(".bg-wrapper .bg-img .inner-2").removeClass("on");
  }

  if (1500 <= scrollPosition && scrollPosition < 2150) {
    $(".bg-wrapper .bg-img .inner-bg-3").addClass("on");
    $(".bg-wrapper .bg-img .inner-3").addClass("on");
  } else {
    $(".bg-wrapper .bg-img .inner-bg-3").removeClass("on");
    $(".bg-wrapper .bg-img .inner-3").removeClass("on");
  }

  // 전기없는마을 제목 및 소개 애니메이션
  if (scrollPosition >= 480) {
    $(".slide-inner-wrapper #main-slide2 .inner-text h2 .play-title").addClass("active");
    $(".slide-inner-wrapper #main-slide2 .inner-text p").addClass("active");
  } else {
    $(
      ".slide-inner-wrapper #main-slide2 .inner-text h2 .play-title"
    ).removeClass("active");
    $(".slide-inner-wrapper #main-slide2 .inner-text p").removeClass("active");
  }
  // 활화산 제목 및 소개 애니메이션
  if (scrollPosition >= 1300) {
    $(".slide-inner-wrapper #main-slide3 .inner-text h2 .play-title").addClass(
      "active"
    );
    $(".slide-inner-wrapper #main-slide3 .inner-text p").addClass("active");
  } else {
    $(
      ".slide-inner-wrapper #main-slide3 .inner-text h2 .play-title"
    ).removeClass("active");
    $(".slide-inner-wrapper #main-slide3 .inner-text p").removeClass("active");
  }
});

// 자세히 보기 버튼 밑줄 효과
$(document).ready(function () {
  // 초기 상태에서 on 클래스 추가
  $("#main-slide1 .more-btn").addClass("on");
  $("#main-slide1 .more-btn p").addClass("active");

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition <= 800) {
      $("#main-slide1 .more-btn").addClass("on");
    } else {
      $("#main-slide1 .more-btn").removeClass("on");
    }

    if (900 <= scrollPosition && scrollPosition <= 1700) {
      $("#main-slide2 .more-btn").addClass("on");
      $("#main-slide2 .more-btn p").addClass("active");
    } else {
      $("#main-slide2 .more-btn").removeClass("on");
    }

    if (1900 <= scrollPosition && scrollPosition <= 2700) {
      $("#main-slide3 .more-btn").addClass("on");
      $("#main-slide3 .more-btn p").addClass("active");
    } else {
      $("#main-slide3 .more-btn").removeClass("on");
    }

    if (2190 <= scrollPosition) {
      $(".notice .title h3").addClass("on");
    } else {
      $(".notice .title h3").removeClass("on");
    }

    // TOP 버튼 유무
    if (700 <= scrollPosition) {
      $(".go-to-top").addClass("active");
    } else {
      $(".go-to-top").removeClass("active");
    }

    if (scrollPosition >= 2298) {
      $(".notice .title .more-btn").addClass("on");
    } else {
      $(".notice .title .more-btn").removeClass("on");
    }

    if (scrollPosition >= 3500) {
      $('.ntck h3').addClass('on');
    } else {
      $('.ntck h3').removeClass('on');
    }
  });
});

$(document).ready(function() {
  $('.menu').on('click', function() {
    $(this).toggleClass('is-close');
    $('nav').toggleClass('is-active');
  });
});
/*
// 스크롤에 따른 국립극단 섹션 item 1, 3, 4, 6 Y축 이동
var prevScrollTop = 0;
var scrollStep = 0.05; // 스크롤 이동 단위를 1로 변경-> 0.05로 변경
var translateYTarget = 0; // 목표 translateY 값 -70 -> 0으로 변경
var translateYCurrent = -70; // 현재 translateY 값
var translateYSpeed = 100; // translateY 값 변화 속도 증가

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var itemHeight = $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-1').outerHeight();

  // 스크롤 방향에 따라 translateYTarget 값 계산
  if (scrollTop > prevScrollTop) { // Scrolling down
    // translateYTarget = Math.max(-70, -70 * (1 - scrollTop / itemHeight));
    translateYTarget = 0;
  } else { // Scrolling up
    translateYTarget = -70;
  }

  translateYCurrent += (translateYTarget - translateYCurrent) / translateYSpeed;
  translateYCurrent = Math.round(translateYCurrent / scrollStep) * scrollStep;

  // translateY 값이 -70px에서 0px 사이로 유지되도록 제한
  translateYCurrent = Math.max(-70, Math.min(0, translateYCurrent));

  $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-1').css({
    'transform': 'translateY(' + translateYCurrent + 'px)',
    'transition': 'transform 0.3s ease-out' // 트랜지션 시간 감소
  });
  $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-3').css({
    'transform': 'translateY(' + translateYCurrent + 'px)',
    'transition': 'transform 0.3s ease-out'
  });
  $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-4').css({
    'transform': 'translateY(' + translateYCurrent + 'px)',
    'transition': 'transform 0.3s ease-out'
  });
  $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-6').css({
    'transform': 'translateY(' + translateYCurrent + 'px)',
    'transition': 'transform 0.3s ease-out'
  });

  prevScrollTop = scrollTop;
});

// item 2, 5 Y축 조절
var prevScrollTop2 = 0;
var scrollStep2 = 0.05; // 스크롤 이동 단위
var targetTranslateY1 = 50; // 목표 translateY 값 (item-2)
var currentTranslateY1 = 70; // 현재 translateY 값 (item-2)
var targetTranslateY2 = 50; // 목표 translateY 값 (item-5)
var currentTranslateY2 = 70; // 현재 translateY 값 (item-5)
var translateYSpeed = 100; // translateY 값 변화 속도

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var itemHeight = $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-1').outerHeight();

  // 스크롤 방향에 따라 translateYTarget 값 계산
  if (scrollTop > prevScrollTop2) { // Scrolling down
    targetTranslateY1 = 0;
    targetTranslateY2 = 0;
  } else { // Scrolling up
    targetTranslateY1 = 70;
    targetTranslateY2 = 70;
  }

  currentTranslateY1 += (targetTranslateY1 - currentTranslateY1) / translateYSpeed;
  currentTranslateY1 = Math.round(currentTranslateY1 / scrollStep2) * scrollStep2;

  currentTranslateY2 += (targetTranslateY2 - currentTranslateY2) / translateYSpeed;
  currentTranslateY2 = Math.round(currentTranslateY2 / scrollStep2) * scrollStep2;

  // translateY 값이 70px에서 0px 사이로 유지되도록 제한
  currentTranslateY1 = Math.max(0, Math.min(70, currentTranslateY1));
  currentTranslateY2 = Math.max(0, Math.min(70, currentTranslateY2));

  $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-2').css({
    'transform': 'translateY(' + currentTranslateY1 + 'px)',
    'transition': 'transform 0.3s ease-out'
  });
  $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-5').css({
    'transform': 'translateY(' + currentTranslateY2 + 'px)',
    'transition': 'transform 0.3s ease-out'
  });

  prevScrollTop2 = scrollTop;
});
*/
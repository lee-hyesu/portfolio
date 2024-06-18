// 현재 스크롤 위치 확인
window.onscroll = function () {
  var scrollPosition = window.scrollY;
  console.log("현재 스크롤 위치: " + scrollPosition + "px");
};

// 헤더 패딩값 조절
$(window).on("scroll", () => {
  if (document.documentElement.scrollTop >= 100) {
    $("header .nav-wrapper").addClass("on");
  } else {
    $("header .nav-wrapper").removeClass("on");
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

  if (1600 <= scrollPosition && scrollPosition < 2130) {
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

    if (900 <= scrollPosition && scrollPosition <= 1600) {
      $("#main-slide2 .more-btn").addClass("on");
      $("#main-slide2 .more-btn p").addClass("active");
    } else {
      $("#main-slide2 .more-btn").removeClass("on");
    }

    if (1900 <= scrollPosition && scrollPosition <= 2400) {
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
  });
});

// 스크롤에 따른 국립극단 섹션의 Y축 이동
var prevScrollTop = 0;
var scrollStep = 0.05; // 스크롤 이동 단위를 1로 변경
var translateYTarget = -70; // 목표 translateY 값
var translateYCurrent = -70; // 현재 translateY 값
var translateYSpeed = 100; // translateY 값 변화 속도 증가

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var itemHeight = $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-1').outerHeight();

  // 스크롤 방향에 따라 translateYTarget 값 계산
  if (scrollTop > prevScrollTop) { // Scrolling down
    // translateYTarget = Math.max(-70, -70 * (1 - scrollTop / itemHeight));
    translateYTarget = 50;
  } else { // Scrolling up
    translateYTarget = -70;
  }

  translateYCurrent += (translateYTarget - translateYCurrent) / translateYSpeed;
  translateYCurrent = Math.round(translateYCurrent / scrollStep) * scrollStep;

  // translateY 값이 -70px에서 0px 사이로 유지되도록 제한
  translateYCurrent = Math.max(-70, Math.min(50, translateYCurrent));

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

/*
// item 2, 4 Y축 조절
var prScrollTop = 0;
var scrollMove = 0.05; // 스크롤 이동 단위를 1로 변경
var translateYTarget = -70; // 목표 translateY 값
var translateYCurrent = -70; // 현재 translateY 값
var translateYSpeed = 100; // translateY 값 변화 속도 증가

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var itemHeight = $('.ntck .ntck-wrapper .ntck-inner li .ntck-item-1').outerHeight();

  // 스크롤 방향에 따라 translateYTarget 값 계산
  if (scrollTop > prScrollTop) { // Scrolling down
    // translateYTarget = Math.max(-70, -70 * (1 - scrollTop / itemHeight));
    translateYTarget = 50;
  } else { // Scrolling up
    translateYTarget = -70;
  }

  translateYCurrent += (translateYTarget - translateYCurrent) / translateYSpeed;
  translateYCurrent = Math.round(translateYCurrent / scrollMove) * scrollMove;

  // translateY 값이 -70px에서 0px 사이로 유지되도록 제한
  translateYCurrent = Math.max(-70, Math.min(50, translateYCurrent));

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

  prScrollTop = scrollTop;
});
*/
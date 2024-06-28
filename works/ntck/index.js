// 현재 스크롤 위치 확인
// window.onscroll = function () {
//   var scrollPosition = window.scrollY;
//   console.log("현재 스크롤 위치: " + scrollPosition + "px");
// };

AOS.init({
  duration: 1500,
});

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
  let scrollPosition = window.scrollY;

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
  if (scrollPosition >= 2940) {
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

  if (1500 <= scrollPosition && scrollPosition < 2200) {
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
    let scrollPosition = $(this).scrollTop();

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

    if (2200 <= scrollPosition) {
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

    if (scrollPosition >= 2200) {
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
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

// main-nav 글씨 색상 조절
$(window).on("scroll", () => {
  var scrollPosition = window.scrollY;

  if (scrollPosition <= 450) {
    $(".main-nav ul li:first-child p a").addClass("on");
  } else {
    $(".main-nav ul li:first-child p a").removeClass("on");
  }

  if (scrollPosition > 450 && scrollPosition <= 1200) {
    $(".main-nav ul li:nth-child(2) p a").addClass("on");
  } else {
    $(".main-nav ul li:nth-child(2) p a").removeClass("on");
  }

  if (scrollPosition > 1200 && scrollPosition <= 1660) {
    $(".main-nav ul li:last-child p a").addClass("on");
  } else {
    $(".main-nav ul li:last-child p a").removeClass("on");
  }

  if (scrollPosition > 1700) {
    $(".main-nav").addClass("on");
    $(".main-nav").css("opacity", "0");
  } else {
    $(".main-nav").removeClass("on");
    $(".main-nav").css("opacity", "1");
  }

  // about 부분 텍스트 나타나는 효과
  if (scrollPosition >= 2400) {
    $('.about .about-title p').addClass('active');
  } else {
    $('.about .about-title p').removeClass('active');
  }
});

// 자세히 보기 버튼 밑줄 효과
$(document).ready(function() {
  // var $moreBtn = $('#main-slide1 .more-btn');

  // 초기 상태에서 on 클래스 추가
  $('#main-slide1 .more-btn').addClass('on');

  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition <= 800) {
      $('#main-slide1 .more-btn').addClass('on');
    } else {
      $('#main-slide1 .more-btn').removeClass('on');
    }

    if (700 <= scrollPosition && scrollPosition <= 1600) {
      $('#main-slide2 .more-btn').addClass('on');
    } else {
      $('#main-slide2 .more-btn').removeClass('on');
    }

    if (1500 <= scrollPosition && scrollPosition <= 2400) {
      $('#main-slide3 .more-btn').addClass('on');
    } else {
      $('#main-slide3 .more-btn').removeClass('on');
    }

    if (1780 <= scrollPosition) {
      $('.notice .title h3').addClass('on');
    } else {
      $('.notice .title h3').removeClass('on');
    }
  });
});

// 현재 스크롤 위치 확인
window.onscroll = function () {
  var scrollPosition = window.scrollY;
  console.log("현재 스크롤 위치: " + scrollPosition + "px");
};

window.onscroll = function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 1200) {
    $('.go-to-top').css('opacity',"1")
    $('.go-to-top').css('scale',"1")
  } else {
    $('.go-to-top').css('opacity',"0")
    $('.go-to-top').css('scale',"0")
  }
};
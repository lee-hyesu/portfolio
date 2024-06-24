window.onscroll = function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 2100) {
    $('.go-to-top').css('opacity',"1")
  } else {
    $('.go-to-top').css('opacity',"0")
  }
};
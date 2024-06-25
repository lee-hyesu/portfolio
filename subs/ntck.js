window.onscroll = function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 2100) {
    $('.go-to-top').css('opacity',"1")
    $('.go-to-top').css('scale',"1")
  } else {
    $('.go-to-top').css('opacity',"0")
    $('.go-to-top').css('scale',"0")
  }
};
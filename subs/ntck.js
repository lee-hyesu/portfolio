window.onscroll = function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 2200) {
    $('.go-to-top').css('opacity',"1")
  } else {
    $('.go-to-top').css('opacity',"0")
  }
};
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("nav").css("background", "rgb(54, 5, 99)");
    } else {
      $("nav").css("background", "transparent");
    }
  });
});

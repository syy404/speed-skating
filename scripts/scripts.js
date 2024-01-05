$(document).ready(function () {
  $("video").each(function () {
    this.play();
  });
  ScrollReveal().reveal("p");
  ScrollReveal().reveal("iframe");
  $(".JAMWF").hide();
  $("body").css("overflow", "hidden");
  $(window).scrollTop(0);
  let clickCount = 0;
  $(document).on("click", function () {
    clickCount++;

    if (clickCount === 1) {
      $(".title").fadeOut();
      $(".JAMWF").fadeIn(function () {
        $(this).css("opacity", "1");
      });
    } else if (clickCount === 2) {
      $("html, body").animate(
        {
          scrollTop: "+=" + 1000,
        },
        800,
        function () {
          $("body").css("overflow", "auto");
        }
      );
    }
  });
  $(".star img").click(function () {
    var $popstar = $(this).siblings(".popstar");

    if ($popstar.is(":visible")) {
      $popstar.fadeOut();
      $(".popstar-text").fadeOut();
    } else {
      $popstar.fadeIn();
      $(".popstar-text").fadeOut();
    }
  });
});

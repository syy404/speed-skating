$(document).ready(function () {
  $(window).scrollTop(0);

  //wait me!
  $("#waitme").fadeIn();
  $("body").css("overflow", "hidden");
  function hideWaitme() {
    $("#waitme").fadeOut(function () {
      $("#hintme").fadeIn();
    });
    $("body").css("overflow", "auto");
  }

  //hint me!
  $(window).on("load", hideWaitme);
  setTimeout(hideWaitme, 30000);
  $("#hintme").click(function () {
    $(this).fadeOut(function () {
      $("#meme")[0].play();
    });
  });
  $("video").each(function () {
    this.pause();
  });

  //scroll V
  ScrollReveal().reveal("p");
  ScrollReveal().reveal("iframe");

  // click game
  let clickCount = 0;
  $(".frontpage").on("click", function () {
    clickCount++;
    if (clickCount === 1) {
      $(".title").fadeOut();
      $(".JAMWF").fadeIn(function () {
        $(this).css("opacity", "1");
      });
    } else if (clickCount === 2) {
      var containerTop = $(".container").offset().top;
      $("html, body").animate(
        {
          scrollTop: containerTop,
        },
        800,
        function () {
          $("body").css("overflow", "auto");
        }
      );
    }
  });

  //star wall
  $(".star img").click(function () {
    var $popstar = $(this).siblings(".popstar");
    if ($popstar.is(":visible")) {
      $popstar.hide();
      $(".popstar-text").hide();
    } else {
      $popstar.show();
      $(".popstar-text").show();
    }
  });
});

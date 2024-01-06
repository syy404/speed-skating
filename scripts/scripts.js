$(document).ready(function () {
  $(window).scrollTop(0);
  $("video").each(function () {
    this.pause();
  });
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
  //setTimeout(hideWaitme, 30000);
  $("#hintme").click(function () {
    console.log("@@@ hint clicked");
    $(this).fadeOut(function () {
      $("#meme")[0].play();
      console.log("@@@ video start");
    });
  });

  //scroll V
  ScrollReveal().reveal("p");
  ScrollReveal().reveal("iframe");

  // click game
  let clickCount = 0;
  $(".frontpage").on("click", function () {
    clickCount++;
    if (clickCount === 1) {
      console.log("@@@ title clicked");
      $(".title").fadeOut();
      $(".JAMWF").fadeIn(function () {
        $(this).css("opacity", "1");
      });
    } else if (clickCount === 2) {
      console.log("@@@ title clicked twice!");
      $("#meme")[0].pause();
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
    console.log("@@@ starwall start!");
    var $popstar = $(this).siblings(".popstar");
    if ($popstar.is(":visible")) {
      $popstar.fadeOut();
      $popstar.find(".popstar-text").css({ opacity: 0, visibility: "hidden" });
    } else {
      $popstar.fadeIn();
      $popstar.find(".popstar-text").css({ opacity: 1, visibility: "visible" });
    }
  });

  //click candy
});

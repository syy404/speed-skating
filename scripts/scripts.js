$(document).ready(function () {
  $(window).scrollTop(0); // 页面加载时强制滚动到顶部
  $("body").css("overflow", "hidden"); // 初始时禁用滚动
  $("video").each(function () {
    this.pause();
  });

  // 显示第一个等待框，并禁用滚动
  $("#waitme").fadeIn();
  $("body").css("overflow", "hidden");

  function hideWaitme() {
    // 隐藏第一个等待框并恢复滚动
    $("#waitme").fadeOut(function () {
      $("#hintme").fadeIn();
      setTimeout(function () {
        $("#hintme").fadeOut();
      }, 5000); // 例如，15秒后自动隐藏
    });
  }

  $(window).on("load", hideWaitme);

  $("#hintme").click(function () {
    console.log("@@@ hint clicked");
    $(this).fadeOut(function () {
      $("#meme")[0].play();
      console.log("@@@ video start");
    });
  });

  // 当第二个等待框显示时，禁用滚动
  $("#hintme").on("show", function () {
    $(window).scrollTop(0);
    $("body").css("overflow", "hidden");
  });

  $("#hintme").on("hide", function () {
    //$("body").css("overflow", "auto");
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

  $("#pie11").click(function () {
    if ($("#pie1").is(":visible")) {
      $("#pie1").fadeOut("fast");
    } else {
      $("#pie1").fadeIn("fast");
    }
  });
  $("#pie22").click(function () {
    if ($("#pie2").is(":visible")) {
      $("#pie2").fadeOut("fast");
    } else {
      $("#pie2").fadeIn("fast");
    }
  });
  $("#pie33").click(function () {
    if ($("#pie3").is(":visible")) {
      $("#pie3").fadeOut("fast");
    } else {
      $("#pie3").fadeIn("fast");
    }
  });
  $("#pie44").click(function () {
    if ($("#pie4").is(":visible")) {
      $("#pie4").fadeOut("fast");
    } else {
      $("#pie4").fadeIn("fast");
    }
  });
  $("#pie55").click(function () {
    if ($("#pie5").is(":visible")) {
      $("#pie5").fadeOut("fast");
    } else {
      $("#pie5").fadeIn("fast");
    }
  });
});

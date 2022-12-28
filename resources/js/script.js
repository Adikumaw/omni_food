$(document).ready(function () {
  // for sticky navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky-nav animate__animated animate__fadeIn");
      } else {
        $("nav").removeClass("sticky-nav animate__animated animate__fadeIn");
      }
    },
    {
      offset: "60px",
    }
  );

  // scrol on button
  $(".js--scroll-to-plans").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      500
    );
  });

  // anchor scrolls
  $(".js-scroll").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });

  // animations on scroll

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "80%",
    }
  );
});


$(document).ready(function () {
//   =======================================================================================================
//                                         STICKY NAVIGATION
// 
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

//   =======================================================================================================
//                                           SCROLL BUTTONS
// 
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

//   =======================================================================================================
//                                   NAVIGATION MENU OPEN ON CLICK
// 
  $(".main-nav").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    // alternate option .......
    // var x = $(".nav-bar");
    var x = document.getElementById("nav-bar");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });

//   =======================================================================================================
//                                            ANCHOR SCROLLS
// 
  $(".js-scroll").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    var x = document.getElementById("nav-bar");
    if (x.className === "main-nav") {
      x.className = "main-nav";
    } else {
      x.className += " responsive";
    }
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });

//   =======================================================================================================
//                                            ANIMATION ON SCROLL
// 
  // SECTION FEATURES...............
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "80%",
    }
  );
    // SECTION HOW IT WORKS...............
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );
    // SECTION CITIES...............
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
    // SECTION PLANS...............
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

});

// function nav_func() {
//   var x = document.getElementsByClassName("main-nav");
//   if (x.className === "main-nav") {
//     x.className += " responsive";
//     console.log("hello");
//     console.log(x.className);
//   } else {
//     x.className = "main-nav";
//     console.log("world");
//     console.log(x.className);
//   }
// }

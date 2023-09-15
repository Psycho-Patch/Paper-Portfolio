const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var tl = gsap.timeline();

// tl.to("#warp", {
//   y: "100vh",
//   scale: 0.3,
//   duration: 0,
//   smooth: true,
// });

// tl.to("#warp", {
//   y: "-90vh",
//   duration: 1.2,
//   delay: 1,
//   scale: 0.3,
//   smooth: true,
// });

// tl.to("#warp", {
//   y: "30vh",
//   rotate: 360,
//   duration: 2,
//   delay: 1.2,
//   scale: 1,
//   smooth: true,
// });

/* ******************************************** */

function runAnimation() {
  var tl = gsap.timeline();

  tl.to("#warp", {
    y: "100vh",
    scale: 0.3,
    duration: 0,
    smooth: true,
  });

  tl.to("#warp", {
    y: "-90vh",
    duration: 1.2,
    delay: 1,
    scale: 0.3,
    smooth: true,
  });

  tl.to("#warp", {
    y: "0vh",
    rotate: 360,
    duration: 2,
    delay: 1.2,
    scale: 1,
    smooth: true,
  });
}

function checkMediaQuery() {
  if (window.matchMedia("(max-width: 450px)").matches) {
    var tl = gsap.timeline();

    tl.to("#warp", {
      y: "100vh",
      scale: 0.3,
      duration: 0,
      smooth: true,
    });

    tl.to("#warp", {
      y: "-90vh",
      duration: 1.2,
      delay: 1,
      scale: 0.3,
      smooth: true,
    });

    tl.to("#warp", {
      y: "0vh",
      rotate: 360,
      duration: 2,
      delay: 1.2,
      scale: 1,
      smooth: true,
    });
  } else {
    runAnimation();
  }
}
checkMediaQuery();

window.addEventListener("resize", checkMediaQuery);

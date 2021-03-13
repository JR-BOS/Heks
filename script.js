$(document).ready(function () {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  // const home_content = document.querySelector(".home-content");
  // const menu = document.querySelector(".navbarcontent");

  // const headline = document.querySelector(".headline");
  // const headline2 = document.querySelector(".headline2");
  // const homebutton = document.querySelector(".homebutton");

  // const timeLine = gsap.timeline();
  // timeLine
  //   .fromTo(
  //     home_content,
  //     0,
  //     { height: "0%" },
  //     { height: "80%", ease: Power2.easeInOut }
  //   )

  //   .fromTo(menu, 0.7, { opacity: 0 }, { opacity: 1 })
  //   .fromTo(headline, 0.7, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.7")
  //   .fromTo(headline2, 0.7, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.7")
  //   .fromTo(
  //     homebutton,
  //     0.7,
  //     { opacity: 0, x: 0 },
  //     { opacity: 1, x: 0 },
  //     "-=0.7"
  //   );
});

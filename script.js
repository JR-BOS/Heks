$(document).ready(function () {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  const home_content = document.querySelector(".home-content");
  const menu = document.querySelector(".navbarcontent");

  const headline = document.querySelector(".headline");
  const headline2 = document.querySelector(".headline2");
  const homebutton = document.querySelector(".test");

  const timeLine = gsap.timeline();
  timeLine

    .fromTo(menu, 0.7, { opacity: 0 }, { opacity: 1 })
    .fromTo(headline, 0.7, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.7")
    .fromTo(headline2, 0.7, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.7")
    .fromTo(
      homebutton,
      0.7,
      { opacity: 0, x: 0 },
      { opacity: 1, x: 0 },
      "-=0.7"
    );
});

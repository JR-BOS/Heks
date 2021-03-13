$(document).ready(function () {
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(menuToggle);
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  });

  const home_content = document.querySelector(".home-content");
  const menu = document.querySelector(".navbarcontent");

  const headline = document.querySelector(".headline");
  const headline2 = document.querySelector(".headline2");
  const homebutton = document.querySelector(".homebutton");

  const timeLine = gsap.timeline();
  timeLine
    .fromTo(
      home_content,
      1,
      { height: "0%" },
      { height: "80%", ease: Power2.easeInOut }
    )

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

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // NAVBAR CLOSE ON CLICK
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.querySelector(".navbar-collapse");

  collapse.addEventListener("click", (e) => {
    const isCollapsed = document.querySelector(".navbar-collapse.show");
    const tagName = e.target.tagName;

    if (isCollapsed && (tagName === "A" || tagName === "BUTTON")) {
      toggler.click();
    }
  });
});

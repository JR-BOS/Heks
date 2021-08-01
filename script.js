$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".customer-logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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

var now = new Date();
var weekday = new Array(7);
weekday[0] = "Zondag";
weekday[1] = "Maandag";
weekday[2] = "Dinsdag";
weekday[3] = "Woensdag";
weekday[4] = "Donderdag";
weekday[5] = "Vrijdag";
weekday[6] = "Zaterdag";

var checkTime = function () {
  var today = weekday[now.getDay()];
  var timeDiv = document.getElementById("timeDiv");
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minutes = now.getMinutes();

  // add 0 to one digit minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (
    ((dayOfWeek == 0 ||
      dayOfWeek == 1 ||
      dayOfWeek == 2 ||
      dayOfWeek == 3 ||
      dayOfWeek == 4 ||
      dayOfWeek == 5 ||
      dayOfWeek == 6 ||
      dayOfWeek == 7) &&
      hour >= 11) ||
    hour == 00 ||
    hour == 01
  ) {
    timeDiv.innerHTML =
      "Het is " + today + " " + hour + ":" + minutes + " - We zijn geopend!";
    timeDiv.className = "open";
  } else {
    timeDiv.innerHTML =
      "Het is " + today + " " + hour + ":" + minutes + " - We zijn gesloten!";
    timeDiv.className = "closed";
  }
};

setInterval(checkTime, 1000);
checkTime();

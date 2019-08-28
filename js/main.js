var map;
function initMap() {
  const loc = { lat: 40.372122, lng: 49.849652 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky Menu Background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.8;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

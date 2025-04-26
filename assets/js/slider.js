document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll('.games-slider');
  sliders.forEach(slider => {
    slider.addEventListener('wheel', function(e) {
      e.preventDefault();
      slider.scrollBy({
        left: e.deltaY < 0 ? -100 : 100
      });
    });
  });
});

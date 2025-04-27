// Slider dummy function
function nextSlide() {
  console.log('Slide Next');
}

// Toggle search bar visibility
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  searchBar.classList.toggle('active');
}

// Close search bar when pressing Escape
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    document.getElementById('searchBar').classList.remove('active');
  }
});

// Toggle dark/light mode
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  const modeIcon = document.getElementById('modeIcon');
  if (document.body.classList.contains('light-mode')) {
    modeIcon.name = "sunny-outline";
  } else {
    modeIcon.name = "moon-outline";
  }
}

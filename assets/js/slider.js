// Slider dummy function
function nextSlide() {
  console.log('Slide Next');
}

// Toggle search bar visibility
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  searchBar.classList.toggle('active');
  if (searchBar.classList.contains('active')) {
    document.querySelector('.search-bar input').focus();
  }
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

// Real-time search
document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('.search-bar input');
  input.addEventListener('input', function() {
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('.games-grid .game-card, .games-slider .game-card');
    cards.forEach(card => {
      const title = card.querySelector('h3').innerText.toLowerCase();
      if (title.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

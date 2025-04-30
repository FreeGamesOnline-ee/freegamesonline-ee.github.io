document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.game-card');

  cards.forEach(card => {
    const url = card.getAttribute('data-url');
    if (url) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = url;
      });
    }
  });
});
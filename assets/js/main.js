document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.game-card');
 // const closeAd = document.querySelector('.close-ad');
  //const mobileAdd = document.querySelector('.mobile-add');

  // Make cards clickable
  cards.forEach(card => {
    const url = card.getAttribute('data-url');
    if (url) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = url;
      });
    }
  });

  // Close mobile ad on click
  //if (closeAd && mobileAdd) {
 //   closeAd.addEventListener('click', () => {
 //     mobileAdd.remove();
 //   });
 // }
});

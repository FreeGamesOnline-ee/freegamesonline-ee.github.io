document.addEventListener('DOMContentLoaded', function () {
const closeAd = document.querySelector('.close-ad');
  const mobileAdd = document.querySelector('.mobile-add');

if (closeAd && mobileAdd) {
    closeAd.addEventListener('click', () => {
      mobileAdd.remove();
    });
});
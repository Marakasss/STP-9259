const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const menuLinks = burgerMenuEl.querySelectorAll('a[href^="#"]');

// OPEN MENU
openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
});

// CLOSE BTN
closeBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'close';
});

// CLICK OUTSIDE MENU
burgerMenuEl.addEventListener('click', event => {
  if (event.target === burgerMenuEl) {
    burgerMenuEl.dataset.visible = 'close';
  }
});

// SWIPE
let touchStartX = 0;

burgerMenuEl.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

burgerMenuEl.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].screenX;
  const deltaX = touchEndX - touchStartX;

  if (deltaX > 50) {
    burgerMenuEl.dataset.visible = 'close';
  }
});

//CLOSE ON LINK
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
  });
});

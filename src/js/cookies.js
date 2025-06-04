const cookiesModalEl = document.querySelector('[data-is-cookies]');
const acceptCookies = document.querySelector('[data-cookieBtn="accept"]');
const declineCookies = document.querySelector('[data-cookieBtn="decline"]');

try {
  let value = JSON.parse(localStorage.getItem('ACCEPTED'));

  value
    ? (cookiesModalEl.dataset.isCookies = 'close')
    : (cookiesModalEl.dataset.isCookies = 'open');
} catch {
  cookiesModalEl.dataset.isCookies = 'open';
}

cookiesModalEl.addEventListener('click', event => {
  if (event.target === acceptCookies) {
    localStorage.setItem('ACCEPTED', JSON.stringify(true));
    cookiesModalEl.dataset.isCookies = 'close';
  }
  if (event.target === declineCookies) {
    localStorage.setItem('ACCEPTED', JSON.stringify(false));
    cookiesModalEl.dataset.isCookies = 'close';
  }
});

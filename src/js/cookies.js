const cookiesModalEl = document.querySelector('[data-is-cookies]');
const acceptCookies = document.querySelector('[data-cookieBtn="accept"]');
const declineCookies = document.querySelector('[data-cookieBtn="decline"]');

try {
  let value = JSON.parse(localStorage.getItem('cookies'));

  if (value) {
    cookiesModalEl.dataset.isCookies = 'close';
  } else {
    cookiesModalEl.dataset.isCookies = 'open';
  }
} catch {
  cookiesModalEl.dataset.isCookies = 'open';
}

cookiesModalEl.addEventListener('click', event => {
  if (event.target === acceptCookies) {
    localStorage.setItem('cookies', JSON.stringify('accepted'));
    cookiesModalEl.dataset.isCookies = 'close';
  }
  if (event.target === declineCookies) {
    localStorage.setItem('cookies', JSON.stringify('declined'));
    cookiesModalEl.dataset.isCookies = 'close';
  }
});

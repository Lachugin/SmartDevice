export const scroll = () => {
  const smoothLinks = document.querySelector('.header__btn');
  smoothLinks.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLinks.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

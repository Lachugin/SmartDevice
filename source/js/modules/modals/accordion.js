export const accordion = () => {
  const listItems = document.querySelectorAll('.footer__list');
  const buttonClose = document.querySelectorAll('.footer__toggle');

  for (const listItem of listItems) {
    listItem.classList.remove('footer__list--no-js');
  }

  buttonClose.forEach((btn) => {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      for (const listItem of listItems) {
        listItem.classList.toggle('footer__list--open');
      }
    });
  });
};

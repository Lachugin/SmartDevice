export const accordion = () => {
  const listItems1 = document.getElementById('listToggle1');
  const buttonClose1 = document.getElementById('btnToggle1');
  const listItems2 = document.getElementById('listToggle2');
  const buttonClose2 = document.getElementById('btnToggle2');

  listItems1.classList.remove('footer__list--no-js');
  listItems2.classList.remove('footer__list--no-js');
  listItems1.classList.add('footer__list--open');
  listItems2.classList.add('footer__list--open');

  if (listItems1) {
    buttonClose1.addEventListener('click', (e) => {
      e.preventDefault();
      listItems1.classList.toggle('footer__list--open');
    });
    buttonClose2.addEventListener('click', (b) => {
      b.preventDefault();
      listItems2.classList.toggle('footer__list--open');
    });
  }
};

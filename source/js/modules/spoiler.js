export const spoiler = () => {
  const textSpan = document.querySelectorAll('.about__js-open');
  const buttonBoxText = document.querySelector('.about__btn');
  const textBoxNone = document.querySelector('.about__box-no-js');
  textBoxNone.classList.remove('about__box-no-js');

  for (let itemsText of textSpan) {
    buttonBoxText.addEventListener('click', function (e) {
      e.preventDefault();
      if (itemsText) {
        itemsText.classList.toggle('about__js-open');
        buttonBoxText.textContent = buttonBoxText.textContent === 'Подробнее' ? 'Свернуть' : 'Подробнее';
      }
    });
  }
};

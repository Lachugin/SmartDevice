export const spoiler = () => {
  const textSpan = document.querySelector('.about__text-none');
  const textBoxNone = document.querySelector('.about__box-none');
  const buttonBoxText = document.querySelector('.about__btn');
  textBoxNone.classList.remove('about__box-no-js');
  textSpan.classList.remove('about__box-no-js');

  buttonBoxText.addEventListener('click', function (evt) {
    evt.preventDefault();
    textSpan.classList.toggle('about__text-none');
    textBoxNone.classList.toggle('about__box-none');
    buttonBoxText.textContent = buttonBoxText.textContent === 'Подробнее' ? 'Свернуть' : 'Подробнее';
  });
};

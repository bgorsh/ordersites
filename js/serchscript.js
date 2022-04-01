const btn = document.querySelector('.form__btn');

btn.addEventListener('click', function() {
  document.querySelector('.form__input').classList.toggle('active')
})
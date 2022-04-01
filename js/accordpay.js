const accordeon = document.querySelectorAll('.accordeon__item');

for(item of accordeon) {
  item.addEventListener('click', function(){
      if(this.classList.contains('active')) {
          this.classList.remove('active');
      } else {
          for(el of accordeon) {
              el.classList.remove('active');
          }
          this.classList.add('active');
      }
  })
};

document.querySelector('.accordeon__item').click();
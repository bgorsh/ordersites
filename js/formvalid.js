let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.order__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      mail: true
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  }
})
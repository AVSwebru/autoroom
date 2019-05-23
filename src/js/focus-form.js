(function() {
  var formInputs = document.querySelectorAll('.js-focused--input');

  if (formInputs) {
    formInputs.forEach((element) => {
      if (element.value !== '') {
        element.nextElementSibling.classList.add('focused');
      }

      element.addEventListener('focus', () => {
        element.nextElementSibling.classList.add('focused');
      });

      element.addEventListener('blur', () => {
        if (element.value == '') {
          element.nextElementSibling.classList.remove('focused');
        }
      });
    });
  }
})();

const addToCartButtons = document.querySelectorAll('.cart');
const clearButton = document.getElementById('clear');

addToCartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const buttonRect = button.getBoundingClientRect();
    const buttonTop = buttonRect.top + window.pageYOffset;
    const buttonLeft = buttonRect.left + window.pageXOffset;

    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText = 'Product added!';

    message.style.top = buttonTop + 'px';
    message.style.left = buttonLeft + 'px';

    document.body.appendChild(message);

    setTimeout(function () {
      message.remove();
    }, 1500);
  });
});

clearButton.addEventListener('click', function () {
  const existingMessage = document.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const btnRect = clearButton.getBoundingClientRect();
  const btnTop = btnRect.top + window.pageYOffset;
  const btnLeft = btnRect.left + window.pageXOffset;

  const message = document.createElement('div');
  message.classList.add('message');
  message.innerText = 'Cleared!';

  message.style.top = btnTop + 'px';
  message.style.left = btnLeft + 'px';

  document.body.appendChild(message);

  setTimeout(function () {
    message.remove();
  }, 1500);
})

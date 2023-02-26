const addToCartButtons = document.querySelectorAll('.cart');
const clearButton = document.querySelector('.clear');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const buttonRect = button.getBoundingClientRect();
    const buttonTop = buttonRect.top + window.pageYOffset;
    const buttonLeft = buttonRect.left + window.pageXOffset;

    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText = 'Product added to cart!';

    message.style.top = buttonTop + 'px';
    message.style.left = buttonLeft + 'px';

    document.body.appendChild(message);

    setTimeout(function() {
      message.remove();
    }, 3000);
  });
});

clearButton.addEventListener('click', function() {
  const existingMessage = document.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const clearButtonRect = clearButton.getBoundingClientRect();
  const clearButtonTop = clearButtonRect.top + window.pageYOffset;
  const clearButtonLeft = clearButtonRect.left + window.pageXOffset;

  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = '';
  message.innerText = 'Cart cleared!';

  message.style.top = clearButtonTop + 'px';
  message.style.left = clearButtonLeft + 'px';

  document.body.appendChild(message);

  setTimeout(function() {
    message.remove();
  }, 3000);
});

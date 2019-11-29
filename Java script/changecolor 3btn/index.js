const allButtons = document.querySelectorAll('.btn');
const eventHandler = eventContext =>
  eventContext.target.classList.toggle('btn--clicked')
const addEventHandler = element =>
  element.addEventListener('click', eventHandler)
allButtons.forEach(addEventHandler);

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (event) {
  const fieldName = event.target.name;
  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  savedData[fieldName] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(savedData));
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (!savedData.email || !savedData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(savedData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});

document.addEventListener('DOMContentLoaded', function () {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
  }
});

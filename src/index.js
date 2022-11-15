import UserInfo from '../src/js/calculator.js';

const handleSubmit = (event) => {
  event.preventDefault()
}

addEventListener('load', function () {
  document.getElementById('submit').addEventListener('submit', handleSubmit);
});
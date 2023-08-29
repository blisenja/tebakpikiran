const inputPassword = document.getElementById('password');
const submit = document.getElementById('submit');
const message = document.getElementById('message');

submit.addEventListener('click', () => {
    const password = inputPassword.value;

    message.textContent = password;
    message.style.color = 'green';
});
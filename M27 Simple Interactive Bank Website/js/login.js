document.getElementById('submit-btn').addEventListener('click', function () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    if (email === 'shahjalal@hazari.com' && password === 'password') {
        window.location.href  ='bank.html';

    } else {
        alert("Please insert valid email and password");
    }
})
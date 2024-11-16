function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'user' && password === 'password') {
        alert('Sign-in successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
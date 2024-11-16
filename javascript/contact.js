function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We will get back to you shortly.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}
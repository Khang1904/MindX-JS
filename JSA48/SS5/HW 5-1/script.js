document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('infoForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');

    const savedName = localStorage.getItem('name') || '';
    const savedEmail = localStorage.getItem('email') || '';
    nameInput.value = savedName;
    emailInput.value = savedEmail;

    displayName.textContent = `Name: ${savedName}`;
    displayEmail.textContent = `Email: ${savedEmail}`;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

        displayName.textContent = `Name: ${name}`;
        displayEmail.textContent = `Email: ${email}`;

        console.log('Form submitted:', { name, email });
    });
});
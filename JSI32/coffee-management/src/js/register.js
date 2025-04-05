const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");
const inputEmail = document.getElementById("email");

function register(event) {
    event.preventDefault(); // Prevent the form from submitting

    let username = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;
    let confirmPassword = inputConfirmPassword.value;
    let roleID = 2; // Default role ID for customer

    // Check empty fields
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

}
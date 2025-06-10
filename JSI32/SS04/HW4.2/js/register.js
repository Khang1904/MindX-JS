function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Registration successful:", user);
            alert("Registration successful!");
            window.location.href = "index.html"; // Redirect to index page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error during registration:", errorCode, errorMessage);
            alert("Registration failed: " + errorMessage);
        });
}

document.getElementById("submit").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    register();
});
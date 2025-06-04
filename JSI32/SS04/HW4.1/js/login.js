function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Login successful:", user);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to index page
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during login:", errorCode, errorMessage);
        alert("Login failed: " + errorMessage);
        });
}

document.getElementById("submit").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    login();
});
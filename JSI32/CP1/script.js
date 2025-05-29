let email = document.getElementById("email");
let password = document.getElementById("password");
let _status = document.getElementById("status");

document.getElementById("login").addEventListener("click", function () {
    if (!email.value.includes("@")) {
        _status.innerHTML = "Email must contain '@'";
        return;
    }

    if (password.value.length < 6) {
        _status.innerHTML = "Password must be at least 6 characters long";
        return;
    }

    if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value)) {
        _status.innerHTML = "Password must contain at least one uppercase and one lowercase letter";
        return;
    }

    // Firebase Authentication login
    auth.signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            _status.innerHTML = "Login successful!";
            console.log("User:", userCredential.user);
        })
        .catch((error) => {
            _status.innerHTML = "Login failed";
            console.error("Error:", error);
        });
});

document.getElementById("google-login").addEventListener("click", function () {
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            _status.innerHTML = "Google Sign-In successful!";
            console.log("User:", result.user);
        })
        .catch((error) => {
            _status.innerHTML = "Google Sign-In failed";
            console.error("Error:", error);
        });
});
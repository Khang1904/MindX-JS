const auth = firebase.auth();

document.getElementById("signOutBtn").addEventListener("click", function() {
    auth.signOut()
    .then(() => {
        console.log("Signed out successfully.");
        window.location.href = "login.html"; // Redirect to the login page
    }).catch((error) => {
        console.error("Error signing out: ", error);
    });
})
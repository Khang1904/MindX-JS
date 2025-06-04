// Listen for auth state changes and display the user's email
firebase.auth().onAuthStateChanged(function(user) {
    const emailSpan = document.getElementById('current-email');
    if (user && user.email) {
        emailSpan.textContent = ' ' + user.email;
    } else {
        emailSpan.textContent = ' Guest';
    }
});

// Function to log out the user
function logout() {
    firebase.auth().signOut().then(() => {
        console.log("User logged out successfully.");
        alert("You have been logged out.");
        // Optionally, redirect to a different page or update the UI
    }).catch((error) => {
        console.error("Error during logout:", error);
        alert("Logout failed: " + error.message);
    });
}

document.getElementById("logout").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    logout();
});

function deleteAccount() {
    const user = firebase.auth().currentUser;
    if (user) {
        user.delete().then(() => {
            console.log("User account deleted successfully.");
            alert("Your account has been deleted.");
            // Optionally, redirect to a different page or update the UI
        }).catch((error) => {
            console.error("Error deleting account:", error);
            alert("Account deletion failed: " + error.message);
        });
    } else {
        alert("No user is currently logged in.");
    }
}

document.getElementById("delacc").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    deleteAccount();
});
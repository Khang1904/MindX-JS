function saveScore() {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      const test = document.getElementById("test").value;
      const score = document.getElementById("score").value;
      const time = document.getElementById("time").value;

      db.collection("users").doc(user.uid).collection("scores").add({
        name: test,
        score: score,
        time: time,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
        console.log("Score initialized successfully.");
      }).catch((error) => {
        console.error("Error initializing score:", error);
      });
    }
  });
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission
  saveScore();
  alert("Your score has been saved successfully.");
})
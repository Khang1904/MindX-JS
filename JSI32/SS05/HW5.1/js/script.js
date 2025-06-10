db.collection("scores")
  .orderBy("score", "desc")
  .limit(10)
  .onSnapshot((snapshot) => {
    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = ""; // Clear previous scores

    snapshot.forEach((doc) => {
      const data = doc.data();
      const listItem = document.createElement("li");
      listItem.textContent = `${data.name}: ${data.score}`;
      leaderboard.appendChild(listItem);
    });
  });

document.getElementById("submit").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const score = document.getElementById("score").value;

  if (name && score) {
    db.collection("scores").add({
      name: name,
      score: parseInt(score, 10),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
});

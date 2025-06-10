document.getElementById("start").addEventListener("click", () => {
  const difficulty = document.getElementById("difficulty").value;

  const p = new URLSearchParams();
  p.append("difficulty", difficulty);
  const url = "./quiz.html?" + p.toString();
  window.location.href = url;
});

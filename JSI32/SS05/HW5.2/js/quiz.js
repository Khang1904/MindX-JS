const p = new URLSearchParams(window.location.search);
const difficulty = parseInt(p.get("difficulty"));

// Time elapsed counter
const time = document.getElementById("time");
let secondsElapsed = 0;

function updateTimer() {
  if (time) {
    time.innerHTML = `Time elapsed: ${secondsElapsed}s`;
  }
}

updateTimer(); // Initial display
const timerInterval = setInterval(() => {
  secondsElapsed++;
  updateTimer();
}, 1000);

let questions = [];

db.collection("questions")
  .where("difficulty", "==", difficulty)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      questions.push(doc.data());
    });

    // Shuffle questions array
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    // Only keep the first 10 questions
    questions = questions.slice(0, 10);

    // Render questions after loading
    let quizHTML = "";
    questions.forEach((question, index) => {
      quizHTML += `
        <div class="question">
          <h3>${index + 1}. ${question.question}</h3>
          <ul>
            ${question.options
              .map(
                (answer, i) => {
                  // Replace < and > with their HTML escape characters
                  const safeAnswer = answer.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                  return `<li><input type="radio" name="q${index}" value="${i}"> ${safeAnswer}</li>`;
                }
              )
              .join("")}
          </ul>
        </div>
      `;
    });
    document.getElementById("quiz").innerHTML = quizHTML;

    // Add event listener for submit button
    const submitBtn = document.getElementById("submit");
    if (submitBtn) {
      // Helper to unescape HTML entities
      function unescapeHTML(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      }
      submitBtn.onclick = function () {
        let score = 0;
        questions.forEach((question, qIdx) => {
          const selected = document.querySelector(`input[name='q${qIdx}']:checked`);
          if (selected) {
            const selectedIndex = parseInt(selected.value);
            const selectedText = question.options[selectedIndex];
            // Unescape before comparing, and trim/lowercase for robustness
            if (
              unescapeHTML(selectedText).trim().toLowerCase() === (question.answer || question.correctAnswer).trim().toLowerCase()
            ) {
              score++;
            }
          }
          // Disable all inputs for this question
          const inputs = document.querySelectorAll(`input[name='q${qIdx}']`);
          inputs.forEach(input => {
            input.disabled = true;
            // Highlight correct answer
            const idx = parseInt(input.value);
            const optionText = question.options[idx];
            if (
              unescapeHTML(optionText).trim().toLowerCase() === (question.answer || question.correctAnswer).trim().toLowerCase()
            ) {
              // Find the parent <li> and add a class
              if (input.parentElement) {
                input.parentElement.classList.add('correct-answer');
              }
            }
          });
        });
        clearInterval(timerInterval); // Stop the clock
        alert(`You scored ${score} out of ${questions.length}`);
      };
    }
  });

// Add CSS for correct answer highlight
const style = document.createElement('style');
style.innerHTML = `.correct-answer { background: #d4edda; font-weight: bold; }`;
document.head.appendChild(style);

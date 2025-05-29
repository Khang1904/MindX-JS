let score = 0;
document.getElementById("score").innerHTML = score;
let count = 0;
document.getElementById("count").innerHTML = count;

function generateQuestion() {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    let op = Math.round(Math.random());
    let result;

    switch (op) {
        case 0:
            document.getElementById("question").innerHTML = "What is " + num1 + " + " + num2 + "?";
            result = num1 + num2;
            break;
        case 1:
            document.getElementById("question").innerHTML = "What is " + num1 + " - " + num2 + "?";
            result = num1 - num2;
            break;
    }
    return result;
}

function generateAnswers(result) {
    let answers = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
    ];

    for (let n = 0; n < answers.length; n++) {
        if (Math.random() < 0.5) {
            answers[n] = -answers[n];
        }
    }

    answers.push(result);

    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    } 

    const answerContainer = document.getElementById("answer");
    answerContainer.innerHTML = ""; // Clear previous answers
    for (let i = 0; i < answers.length; i++) {
        answerContainer.innerHTML += "<input type='radio' name='answer' value='" + answers[i] + "'>" + answers[i] + "<br>";
    }
}

function checkAnswer(result) {
    document.getElementById("check").onclick = () => {
        let selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            if (parseInt(selected.value) === result) {
                score++;
                document.getElementById("score").innerHTML = score;
            }
        }
        if (count < 10) {
            setTimeout(() => {
                reset();
                count++;
                document.getElementById("count").innerHTML = count;
                question();
            }, 100); // Add a slight delay before transitioning
        } else {
            document.getElementById("question").innerHTML = "Game Over! Your score is " + score;
            document.getElementById("answer").innerHTML = "";
        }
    };
}

function question() {
    let result = generateQuestion();
    generateAnswers(result);
    count++;
    document.getElementById("count").innerHTML = count;
}

question();


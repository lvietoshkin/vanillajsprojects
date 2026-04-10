const quizData = [
    {
        question: 'What does "Wubba Lubba Dub-Dub" actually mean in Birdperson’s language?',
        a: 'Let’s party!',
        b: 'I am in great pain, please help me',
        c: 'Victory is mine',
        d: 'Time to portal out',
        correct: 'b'
    },
    {
        question: 'Who voices both Rick and Morty in the original series?',
        a: 'Dan Harmon',
        b: 'Chris Parnell',
        c: 'Justin Roiland',
        d: 'Tom Kenny',
        correct: 'c'
    },
    {
        question: 'What is Rick Sanchez often described as?',
        a: 'A time traveler',
        b: 'The smartest mammal in the galaxy',
        c: 'A retired teacher',
        d: 'An alien overlord',
        correct: 'b'
    },
    {
        question: 'What is the name of the interdimensional government that opposes Rick?',
        a: 'Galactic Empire',
        b: 'Federation Prime',
        c: 'Galactic Federation',
        d: 'Universal Council',
        correct: 'c'
    },
    {
        question: 'Which episode features improvised interdimensional TV commercials?',
        a: 'Pickle Rick',
        b: 'Rixty Minutes',
        c: 'Total Rickall',
        d: 'The Ricklantis Mixup',
        correct: 'b'
    },
    {
        question: 'What is Morty’s personality generally described as?',
        a: 'Confident and fearless',
        b: 'Simple and neurotic',
        c: 'Cold and calculated',
        d: 'Emotionless genius',
        correct: 'b'
    },
    {
        question: 'What inspired the creation of Rick and Morty?',
        a: 'Star Wars',
        b: 'Doctor Who',
        c: 'Back to the Future parody',
        d: 'The Matrix',
        correct: 'c'
    },
    {
        question: 'What is the Citadel of Ricks?',
        a: 'A spaceship powered by Mortys',
        b: 'A city populated by alternate Ricks and Mortys',
        c: 'Rick’s secret lab',
        d: 'An alien prison',
        correct: 'b'
    },
    {
        question: 'Why are the fake commercials in the show so chaotic and funny?',
        a: 'They are AI-generated',
        b: 'They are written by fans',
        c: 'They are improvised in single takes',
        d: 'They are translated from alien languages',
        correct: 'c'
    },
    {
        question: 'What major concept defines the Rick and Morty universe?',
        a: 'Time travel loops',
        b: 'A single timeline',
        c: 'Parallel universes (multiverse)',
        d: 'Dream worlds',
        correct: 'c'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
const quizContainer = document.querySelector('.quiz-container');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let selected = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            selected = answerEl.id;
        }
    });

    return selected;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    // 🚫 Prevent submit if nothing selected
    if (!answer) {
    quizContainer.classList.add('shake');

    // remove shake after animation ends so it can trigger again
    setTimeout(() => {
        quizContainer.classList.remove('shake');
    }, 300);

    return;
}

    // ✅ Check if correct
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // ✅ Show final score
        quizContainer.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `;
    }
});
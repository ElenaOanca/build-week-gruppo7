const page1= document.getElementById('page1')
const page2= document.getElementById('page2')
const page3= document.getElementById('page3')
const page4= document.getElementById('page4')





/*************************************WELCOME *************************************************************************/


















const proceedButton = document.getElementById("proceedButton");

proceedButton.addEventListener("click", function () {
  const checkBox = document.querySelector("#myCheckbox");

  if (checkBox.checked) {
    page1.classList.add('hidden')
    page2.classList.remove('hidden')
  } else {
    // Se la casella di controllo non è selezionata,  alert
    alert("Devi flaggare il checkbox per procedere.");
  }
});
















/********************************************QUIZ *********************************************************************************************/






















//lista domande quiz
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
    "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
    "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
    "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
    "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
    "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];




// Indice della domanda corrente (casuale)
let currentQuestionIndex = Math.floor(Math.random() * questions.length);
//array per conteggiare le domande a cui si è risposto 
const countAnswer = [];
document.addEventListener("DOMContentLoaded", function () {
  const pagina = document.getElementById("domanda");
  const qButton = document.getElementById("nextQuestion");

  const correctAnswer = questions.map((question) => question.correct_answer);
  let contatoreGiuste = 0;
  let contatoreSbagliate = 0;

  mostraDomandaCorrente();

const correctAnswer = [];
//const contatoreGiuste = [];
//const contatoreSbagliate = [];
for (let index = 0; index < questions.length; index++) {
  const element = questions[index].correct_answer;
  correctAnswer.push(element);
}


  //funzione creazione domande
  function mostraDomandaCorrente() {


    pagina.innerHTML = "";
    qButton.innerHTML = "";
    


    const divDomanda = document.createElement("div");
    divDomanda.innerText = questions[currentQuestionIndex].question;
    pagina.appendChild(divDomanda);
    //contorllo tipo di domanda (multiple/boolean)
    if (questions[currentQuestionIndex].type === "multiple") {
      mostraBottoniRisposte(currentQuestionIndex);
    } else {
      mostraBottoniVeroFalso(currentQuestionIndex);
    }

    if (currentQuestionIndex === 0) {
      const divQuestion = document.getElementById("nextQuestion");
      const avantiButton = document.createElement("button");
      avantiButton.innerText = "PROSSIMO";
      const spanButton = document.createElement("span");
      spanButton.classList.add("fas", "fa-arrow-right");
      avantiButton.appendChild(spanButton);
      divQuestion.appendChild(avantiButton);
      avantiButton.addEventListener("click", function () {

        if (countAnswer.length === 10){
          window.location.assign("risultato.html");
        }else{

          currentQuestionIndex = Math.floor(Math.random() * questions.length);
          let countObj = {};
          countAnswer.push(countObj);
          //console.log(countAnswer);
          mostraDomandaCorrente();
        }
        });
      pagina.appendChild(avantiButton);
    } else if (currentQuestionIndex){ //< questions.length - 1) {
      const divQuestion = document.getElementById("nextQuestion");
      const avantiButton = document.createElement("button");
      avantiButton.innerText = "PROSSIMO";
      const spanButton = document.createElement("span");
      spanButton.classList.add("fas", "fa-arrow-right");
      avantiButton.appendChild(spanButton);
      divQuestion.appendChild(avantiButton)
      if (countAnswer.length === 10){
        avantiButton.addEventListener("click", function() {
          showPage(index + 2); // Passa all'indice successivo (inizia da 2)
        });
      }else{
      avantiButton.addEventListener("click", function () {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
        countAnswer.push({});
        mostraDomandaCorrente();
      });}
      //pagina.appendChild(avantiButton);
    }
  }
   
  function mostraBottoniRisposte(questNumber) {
    const divRisposte = document.createElement("div");
    const risposte = [questions[questNumber].correct_answer, ...questions[questNumber].incorrect_answers];
    risposte.sort(() => Math.random() - 0.5);

    for (let risposta of risposte) {
      const button = document.createElement("button");
      button.innerText = risposta;
      button.classList.add("risposte");
      divRisposte.appendChild(button);
      button.addEventListener("click", function () {
        gestisciRisposta(risposta, questions[questNumber].correct_answer);
      });
    }

    pagina.appendChild(divRisposte);
  }
  //creazione bottoni risposta vero/falso
  function mostraBottoniVeroFalso(questNumber) {
    const divRisposte = document.createElement("div");
    const button1 = document.createElement("button");
    button1.classList.add("risposte");
    const button2 = document.createElement("button");
    button2.classList.add("risposte");
    
    button1.innerText = "True";
    button2.innerText = "False";

    button1.addEventListener("click", function(){
      if (risposta === questions[questNumber].correct_answer){
        let contatore = {};
        contatoreGiuste.push(contatore);
      }else {
        let contatore = {};
        contatoreSbagliate.push(contatore);
      }
    });
    

    divRisposte.appendChild(button1);
    divRisposte.appendChild(button2);

    pagina.appendChild(divRisposte);
  }
});




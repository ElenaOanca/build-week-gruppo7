<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
     const sections = document.querySelectorAll("section"); // Seleziona tutte le sezioni
     // Funzione per nascondere tutte le sezioni tranne quella con l'indice specificato
     function showPage(pageNumber) {
       sections.forEach(function(section, index) {
         if (index + 1 === pageNumber) {
           section.classList.remove("hidden");
         } else {
           section.classList.add("hidden");
         }
          
     });
     }
   
     // Aggiungi un gestore di eventi a tutti i pulsanti "Next"
     const nextButtons = document.querySelectorAll(".buttonLogica");
     nextButtons.forEach(function(button, index) {
       button.addEventListener("click", function() {
         showPage(index + 2); // Passa all'indice successivo (inizia da 2)
       });
     });
   });
=======



// STELLE //////////////////

>>>>>>> 9152320b62c09c724f7df880f65ea16a46656a9f

    // Recupera le stelle e l'elemento del valore di valutazione
  const stars = document.querySelectorAll(".star");
  const starsValue = document.getElementById("stars-value");

  // Inizializza il valore di valutazione a 0
  let rating = 0;

  // Aggiungi gestori di eventi alle stelle
  stars.forEach((star) => {
    star.addEventListener("mouseover", hoverStar);
    star.addEventListener("mouseout", resetStars);
    star.addEventListener("click", clickStar);
  });

  // Funzione per gestire il passaggio del mouse su una stella
  function hoverStar(event) {
    const hoveredStar = event.target;
    const hoveredRating = parseInt(hoveredStar.getAttribute("data-stars"));
    highlightStars(hoveredRating);
  }

  // Funzione per ripristinare il colore delle stelle al passaggio del mouse
  function resetStars() {
    highlightStars(rating);
  }

  // Funzione per evidenziare le stelle fino a una stella specifica
  function highlightStars(numStars) {
    stars.forEach((star, index) => {
      if (index < numStars) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }

  // Funzione per gestire il clic su una stella
  function clickStar(event) {
    rating = parseInt(event.target.getAttribute("data-stars"));
    starsValue.textContent = `Valutazione: ${rating}`;
  }

  // Inizializza le stelle vuote all'avvio
  resetStars();


// controllo se l'input e validato 
// function controlloCheckbox(){
  
//   if (procediButton) {
//     procediButton.addEventListener("click", function() {
//       const checkBox = document.querySelector("#myCheckbox");

//       // Verifica se la casella di controllo è selezionata (flaggata)
//       if (checkBox.checked) {
//         // Se la casella di controllo è selezionata, cambia pagina alla pagina succes
//         cambiaContenuto("quiz.html");
//       } else {
//         // Se la casella di controllo non selezionata, mostra alert
//         alert("Devi validare l'input!");
//       }
//     });
//   } 
// }
// controlloCheckbox()

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//CONTROLLARE

// // Funzione per verificare il checkbox e cambiare pagina
// function verificaCheckbox() {
//   var checkbox = document.getElementById("myCheckbox");

//   if (checkbox.checked) {
//       //qui bisogna mettere la funzione di Matias
//       cambiaPagina();
//   } else {
//       // Checkbox non flaggato, mostra un alert
//       alert("Devi flaggare il checkbox per procedere.");
//   }
// }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//PAGINA DELLE DOMANDE
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



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


let currentQuestionIndex = Math.floor(Math.random() * questions.length); // Indice della domanda corrente
const countAnswer = [];
document.addEventListener("DOMContentLoaded", function () {
  const pagina = document.getElementById("domanda");
  //const risposte = document.getElementById("risposte");
  mostraDomandaCorrente();

const correctAnswer = [];
const contatoreGiuste = [];
const contatoreSbagliate = [];
for (let index = 0; index < questions.length; index++) {
  const element = questions[index].correct_answer;
  correctAnswer.push(element);
}

console.log(contatoreGiuste, contatoreSbagliate);

  //funzione creazione domande
  function mostraDomandaCorrente() {


    pagina.innerHTML = "";

   


    const divDomanda = document.createElement("div");
    divDomanda.innerText = questions[currentQuestionIndex].question;
    pagina.appendChild(divDomanda);

    if (questions[currentQuestionIndex].type === "multiple") {
      mostraBottoniRisposte(currentQuestionIndex);
    } else {
      mostraBottoniVeroFalso(currentQuestionIndex);
    }

    if (currentQuestionIndex === 0) {
      const avantiButton = document.createElement("button");
      avantiButton.innerText = "Avanti";
      avantiButton.classList.add("risposte");
      avantiButton.addEventListener("click", function () {

        if (countAnswer.length === 10){
          window.location.assign("risultato.html");
        }else{

          currentQuestionIndex = Math.floor(Math.random() * questions.length);
          let countObj = {};
          countAnswer.push(countObj);
          console.log(countAnswer);
          mostraDomandaCorrente();
        }
        });
      pagina.appendChild(avantiButton);
    } else if (currentQuestionIndex){ //< questions.length - 1) {
      const avantiButton = document.createElement("button");
      avantiButton.innerText = "Avanti";
      avantiButton.classList.add("risposte");
      if (countAnswer.length === 10){
        window.location.assign("risultato.html");
      }else{
      avantiButton.addEventListener("click", function () {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
        let countObj = {};
        countAnswer.push(countObj);
        console.log(countAnswer);
        mostraDomandaCorrente();
      });}
      pagina.appendChild(avantiButton);
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
      button.addEventListener("click", function(){
        if (risposta === questions[questNumber].correct_answer){
          let contatore = {};
          contatoreGiuste.push(contatore);
        }else {
          let contatore = {};
          contatoreSbagliate.push(contatore);
        }
      });
      divRisposte.appendChild(button);
    }

    pagina.appendChild(divRisposte);
  }

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




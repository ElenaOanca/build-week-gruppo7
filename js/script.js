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
   
     // Aggiungi un gestore di eventi a tutti i pulsanti "Next"(rimanda alla pagina successiva)
     const nextButtons = document.querySelectorAll(".buttonLogica");
     nextButtons.forEach(function(button, index) {
       button.addEventListener("click", function() {
         showPage(index + 2); // Passa all'indice successivo (inizia da 2)
       });
     });
   });

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
let first = true;
function erTimer(){
 
  
var width = 400,
  height = 400,
  timePassed = 0,
  timeLimit = 60;

var fields = [{
  value: timeLimit,
  size: timeLimit,
  update: function() {
    return timePassed = timePassed + 1;
  }
}];

var nilArc = d3.svg.arc()
  .innerRadius(width / 3 - 133)
  .outerRadius(width / 3 - 133)
  .startAngle(0)
  .endAngle(2 * Math.PI);

var arc = d3.svg.arc()
  .innerRadius(width / 3 - 55)
  .outerRadius(width / 3 - 25)
  .startAngle(0)
  .endAngle(function(d) {
    return ((d.value / d.size) * 2 * Math.PI);
  });

var svg = d3.select(".timer").append("svg")
  .attr("width", width)
  .attr("height", height);

var field = svg.selectAll(".field")
  .data(fields)
  .enter().append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .attr("class", "field");

var back = field.append("path")
  .attr("class", "path path--background")
  .attr("d", arc);

var path = field.append("path")
  .attr("class", "path path--foreground");

var label = field.append("text")
  .attr("class", "label")
  .attr("dy", ".35em");

(function update() {
  first = false;
  field
    .each(function(d) {
      d.previous = d.value, d.value = d.update(timePassed);
    });

  path.transition()
    .ease("elastic")
    .duration(500)
    .attrTween("d", arcTween);

  if ((timeLimit - timePassed) <= 10)
    pulseText();
  else
    label
    .text(function(d) {
      return d.size - d.value;
    });

  if (timePassed <= timeLimit)
    setTimeout(update, 1000 - (timePassed % 1000));
  else
    destroyTimer();

})();

function pulseText() {
  back.classed("pulse", true);
  label.classed("pulse", true);

  if ((timeLimit - timePassed) >= 0) {
    label.style("font-size", "90px")
      .attr("transform", "translate(0," + +4 + ")")
      .text(function(d) {
        return d.size - d.value;
      });
  }

  label.transition()
    .ease("elastic")
    .duration(900)
    .style("font-size", "60px")
    .attr("transform", "translate(0," + -10 + ")");
}

function destroyTimer() {
  label.transition()
    .ease("back")
    .duration(700)
    .style("opacity", "0")
    .style("font-size", "5")
    .attr("transform", "translate(0," + -40 + ")")
    .each("end", function() {
      field.selectAll("text").remove()
    });

  path.transition()
    .ease("back")
    .duration(700)
    .attr("d", nilArc);

  back.transition()
    .ease("back")
    .duration(700)
    .attr("d", nilArc)
    .each("end", function() {
      field.selectAll("path").remove()
    });
}

function arcTween(b) {
  var i = d3.interpolate({
    value: b.previous
  }, b);
  return function(t) {
    return arc(i(t));
  };
}};
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//PAGINA DELLE DOMANDE
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


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
// const panNumber = document.getElementById("numeroLoco");
// const number = document.createElement("span");
// panNumber.appendChild(number);
// number === countAnswer.length;

//creazione della pagina del quiz
document.addEventListener("DOMContentLoaded", function () {
  const pagina = document.getElementById("domanda");
  const qButton = document.getElementById("nextQuestion");
  
  //const risposte = document.getElementById("risposte");
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
    // if (!first){
    //   destroyTimer();
    // }
    erTimer();
    
    //svuota elementi pagina, così da caricarne una nuova
    pagina.innerHTML = "";
    qButton.innerHTML = "";
    

    //creazione div per posizionare la domanda
    const divDomanda = document.createElement("div");
    divDomanda.innerText = questions[currentQuestionIndex].question;
    pagina.appendChild(divDomanda);
    //contorllo tipo di domanda (multiple/boolean)
    if (questions[currentQuestionIndex].type === "multiple") {
      mostraBottoniRisposte(currentQuestionIndex);
    } else {
      mostraBottoniVeroFalso(currentQuestionIndex);
    }
    //controllo domanda e creazione bottoni corrispondenti
    if (currentQuestionIndex === 0) {
      const divQuestion = document.getElementById("nextQuestion");
      const avantiButton = document.createElement("button");
      avantiButton.innerText = "PROSSIMO";
      avantiButton.classList.add("prossima-domanda")
      const spanButton = document.createElement("span");
      spanButton.classList.add("fas", "fa-arrow-right");
      avantiButton.appendChild(spanButton);
      divQuestion.appendChild(avantiButton);
      avantiButton.addEventListener("click", function () {
        //arrivate a 10 domande, salta alla pagina successiva
        if (countAnswer.length === 10){
          window.location.assign("risultato.html");
        }else{
          //riprende una nuova domanda, in modo ramdomico
          currentQuestionIndex = Math.floor(Math.random() * questions.length);
          let countObj = {};
          countAnswer.push(countObj);
          mostraDomandaCorrente();
        }
        });
      pagina.appendChild(avantiButton);
      //controllo domanda e creazione bottoni corrispondenti
    } else if (currentQuestionIndex){
      const divQuestion = document.getElementById("nextQuestion");
      const avantiButton = document.createElement("button");
      avantiButton.classList.add("prossima-domanda")
      avantiButton.innerText = "PROSSIMO";
      const spanButton = document.createElement("span");
      spanButton.classList.add("fas", "fa-arrow-right");
      avantiButton.appendChild(spanButton);
      divQuestion.appendChild(avantiButton)

      if (countAnswer.length === 10){

      }
        else{
      avantiButton.addEventListener("click", function () {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
        let countObj = {};
        countAnswer.push(countObj);
        
        mostraDomandaCorrente();
      });}
      
    }
  }
   //generazione bottoni per le risposte
  function mostraBottoniRisposte(questNumber) {
    
    
    const divRisposte = document.createElement("div");
    const risposte = [questions[questNumber].correct_answer, ...questions[questNumber].incorrect_answers];
    risposte.sort(() => Math.random() - 0.5);

    for (let risposta of risposte) {
      const button = document.createElement("button");
      button.innerText = risposta;
      button.classList.add("risposte");
      divRisposte.appendChild(button);
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

    
    divRisposte.appendChild(button1);
    divRisposte.appendChild(button2);

    pagina.appendChild(divRisposte);
  }
});


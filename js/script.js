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
  const qButton = document.getElementById("nextQuestion");
  
  const correctAnswer = questions.map((question) => question.correct_answer);
  let contatoreGiuste = 0;
  let contatoreSbagliate = 0;
  let contatoTotale;
  
  
  mostraDomandaCorrente();

  function mostraDomandaCorrente() {
    pagina.innerHTML = "";
    qButton.innerHTML = "";

    const divDomanda = document.createElement("div");
    divDomanda.innerText = questions[currentQuestionIndex].question;
    pagina.appendChild(divDomanda);

    if (questions[currentQuestionIndex].type === "multiple") {
      mostraBottoniRisposte(currentQuestionIndex);
    } else {
      mostraBottoniVeroFalso(currentQuestionIndex);
    }

    const divQuestion = document.getElementById("nextQuestion");
    const avantiButton = document.createElement("button");
    avantiButton.innerText = "PROSSIMO";
    const spanButton = document.createElement("span");
    spanButton.classList.add("fas", "fa-arrow-right");
    avantiButton.appendChild(spanButton);
    divQuestion.appendChild(avantiButton);
    

    avantiButton.addEventListener("click", function () {
      if (contatoTotale === 10) {
        const percentualeGiuste = (contatoreGiuste / 10) * 100;
        const percentualeSbagliate = (contatoreSbagliate / 10) * 100;
        
        page2.classList.add('hidden')
        page3.classList.remove('hidden')
        return percentualeGiuste, percentualeSbagliate;
      } else {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
        countAnswer.push({});
        mostraDomandaCorrente();
      }
    });
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

  function mostraBottoniVeroFalso(questNumber) {
    const divRisposte = document.createElement("div");
    const button1 = creaBottone("True");
    const button2 = creaBottone("False");

    divRisposte.appendChild(button1);
    divRisposte.appendChild(button2);

    pagina.appendChild(divRisposte);
  }

  function creaBottone(testo) {
    const button = document.createElement("button");
    button.innerText = testo;
    button.classList.add("risposte");
    button.addEventListener("click", function () {
      gestisciRisposta(testo, questions[currentQuestionIndex].correct_answer);
    });
    return button;
  }

  function gestisciRisposta(risposta, rispostaCorretta) {
    if (risposta === rispostaCorretta) {
      contatoreGiuste++;
      //console.log("Risposte corrette: " + contatoreGiuste);
    } else {
      contatoreSbagliate++;
      //console.log("Risposte sbagliate: " + contatoreSbagliate);
    }
    contatoTotale = contatoreGiuste + contatoreSbagliate;

  }
});













/****************************************************PAGINA RISULTATO ************************************************************/
















let rateUs = document.querySelector('.rate-us')
rateUs.addEventListener("click", function () {
  page3.classList.add('hidden')
  page4.classList.remove('hidden')
});














/*****************************************************PAGINAFEEDBACK *************************************************************************/






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
  // starsValue.textContent = `Valutazione: ${rating}`;
}

// Inizializza le stelle vuote all'avvio
resetStars();
const submitMoreInfo = document.querySelector(".more-info"); //creata variabile per bottone
submitMoreInfo.addEventListener("click", function (e) {
  e.preventDefault();
  checkIfStarsSelected();
}); // impostato il preventDefault al bottone

// creata funzione per il pop-up se non si selezionano stelle e di redirect al sito

function checkIfStarsSelected() {
  if (rating === 0) {
    Swal.fire({
      title: 'Michele dice:',
      text: 'Inserisci una valutazione!!',
      imageUrl: 'https://i.ibb.co/LSMmBPC/michele.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Michele Arcangelo Tedesco',
    });
  } else {
    window.location.href = 'https://epicode.com/it/';
  }
} 











/***************************************************************************  TIMER  *************************************************************/
 /// FUNZIONE TIMER
 function startsTimer(){
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
}
 }
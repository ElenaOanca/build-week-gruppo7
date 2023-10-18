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
   
// FUNZIONE TIMER /////////////////////////

let timer = document.querySelector(".timer")
    timer.innerHTML= 60

    const interval = setInterval(() => {
      console.log(timer.innerHTML);
      timer.innerHTML--;

      if (timer.innerHTML <= 0 ) {
        clearInterval(interval);

      }
    }, 1000);


// STELLE //////////////////


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

/*
// controllo se l'input e validato 
function controlloCheckbox(){
  
  if (procediButton) {
    procediButton.addEventListener("click", function() {
      const checkBox = document.querySelector("#myCheckbox");

      // Verifica se la casella di controllo è selezionata (flaggata)
      if (checkBox.checked) {
        // Se la casella di controllo è selezionata, cambia pagina alla pagina succes
        cambiaContenuto("quiz.html");
      } else {
        // Se la casella di controllo non selezionata, mostra alert
        alert("Devi validare l'input!");
      }
    });
  } 
}
*/

function riempiemento (x, y, xColor, yColor){
  const cerchio = document.querySelector("cerchio");

  cerchio.style.border = `${percent1_percentage}% solid ${color1}`;
  cerchio.style.borderColor += `, ${percent2_percentage}% solid ${color2}`;
 
}

riempiemento(75,25,"#00ffff","#c2128d")
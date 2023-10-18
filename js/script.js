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











  ////////////////// NAVIGAZIONE SUL SITO

  /* if (procediButton) {
    procediButton.addEventListener("click", function() {
      // Verifica su quale pagina ci troviamo
      if (window.location.pathname === "/welcome.html") {
        // Se ci troviamo sulla pagina welcome.html, cambia il contenuto della pagina alla pagina quiz.html
        cambiaContenuto("quiz.html");
      } else if (window.location.pathname === "/quiz.html") {
        // Se ci troviamo sulla pagina quiz.html, esegui la funzione "test" e reindirizza alla pagina risultato.html
        test();
        cambiaContenuto("risultato.html");
      } else if (window.location.pathname === "/risultato.html") {
        // Se ci troviamo sulla pagina risultato.html, torna alla pagina home
        cambiaContenuto("welcome.html");
      }
    });
  }

  // Funzione per cambiare il contenuto della pagina
  function cambiaContenuto(nuovaPagina) {
    window.location.href = nuovaPagina;
  }
*/
  // Funzione per eseguire il test 
  function test() {
    // Esegui il test qui
  }
;

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
controlloCheckbox()
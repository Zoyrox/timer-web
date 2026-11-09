var tempo = 0;
var timer;

// scrive il tempo a schermo come minuti:secondi
function mostra() {
  var min = Math.floor(tempo / 60);
  var sec = tempo % 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.getElementById("display").innerHTML = min + ":" + sec;
}

// legge minuti e secondi e fa partire il conto
function avvia() {
  var minuti = Number(document.getElementById("minuti").value);
  var secondi = Number(document.getElementById("secondi").value);
  tempo = minuti * 60 + secondi;
  if (tempo <= 0) {
    return;
  }
  clearInterval(timer);
  mostra();
  timer = setInterval(scendi, 1000);
}

// ogni secondo toglie 1 e si ferma a zero
function scendi() {
  tempo = tempo - 1;
  mostra();
  if (tempo <= 0) {
    clearInterval(timer);
  }
}

function reset() {
  clearInterval(timer);
  tempo = 0;
  mostra();
}
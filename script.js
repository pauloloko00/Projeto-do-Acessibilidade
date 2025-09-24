let fonte = 100;
let contrasteAtivo = false;

function aumentarFonte() {
  fonte += 10;
  document.body.style.fontSize = fonte + "%";
}

function diminuirFonte() {
  if (fonte > 50) {
    fonte -= 10;
    document.body.style.fontSize = fonte + "%";
  }
}

function alternarContraste() {
  contrasteAtivo = !contrasteAtivo;
  document.body.classList.toggle("contraste", contrasteAtivo);
}

function resetar() {
  fonte = 100;
  document.body.style.fontSize = "100%";
  contrasteAtivo = false;
  document.body.classList.remove("contraste");
}

const jogar = document.querySelector(".jogar");

let selecinado;
let jogador = "X";

let posicao = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function iniciar() {
    selecinado = [];

  jogar.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

  document.querySelectorAll(".tabuleiro button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", mover);
  });
}

iniciar();

function mover(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = jogador;
  e.target.removeEventListener("click", mover);
  selecinado[index] = jogador;

  setTimeout(() => {
    verificar();
  }, [100]);

  jogador = jogador === "X" ? "O" : "X";
  jogar.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function verificar() {
  let jogadorEmMovimen = jogador === "X" ? "O" : "X";

  const items = selecinado
    .map((item, i) => [item, i])
    .filter((item) => item[0] === jogadorEmMovimen)
    .map((item) => item[1]);

  for (i of posicao) {
    if (i.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + jogadorEmMovimen + "' GANHOU!");
      iniciar();
      return;
    }
  }

  if (selecinado.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    iniciar();
    return;
  }
}
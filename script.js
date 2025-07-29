const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function classificarHeroi(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp >= 1000 && xp <= 2000) return "Bronze";
  else if (xp >= 2001 && xp <= 5000) return "Prata";
  else if (xp >= 5001 && xp <= 7000) return "Ouro";
  else if (xp >= 7001 && xp <= 8000) return "Platina";
  else if (xp >= 8001 && xp <= 9000) return "Ascendente";
  else if (xp >= 9001 && xp <= 10000) return "Imortal";
  else return "Radiante";
}

let herois = [];
let quantidade = 0;
let contador = 0;

rl.question("Quantos heróis você quer cadastrar? ", (qtd) => {
  quantidade = parseInt(qtd);

  const cadastrarHeroi = () => {
    if (contador < quantidade) {
      rl.question(`Digite o nome do herói ${contador + 1}: `, (nome) => {
        rl.question(`Digite o XP do herói ${nome}: `, (xpStr) => {
          const xp = parseInt(xpStr);
          herois.push({ nome, xp });
          contador++;
          cadastrarHeroi();
        });
      });
    } else {
      herois.forEach((heroi) => {
        const nivel = classificarHeroi(heroi.xp);
        console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
      });
      rl.close();
    }
  };

  cadastrarHeroi();
});
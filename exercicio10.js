let fila = ["João", "Gabriel"];

function exibirMenu() {
  console.log("Fila de Espera:");
  for (let i = 0; i < fila.length; i++) {
    console.log(`${i + 1}º ${fila[i]}`);
  }
  console.log("\nOpções:");
  console.log("1 - Novo Cliente");
  console.log("2 - Atender Cliente");
  console.log("3 - Sair");
}

function novoCliente() {
  let nome = prompt("Digite o nome do cliente:");
  fila.push(nome);
  console.log(`Cliente ${nome} adicionado à fila.`);
}


function atenderCliente() {
  if (fila.length > 0) {
    let cliente = fila.shift();
    console.log(`Atendendo cliente ${cliente}.`);
  } else {
    console.log("Fila vazia.");
  }
}

function main() {
  while (true) {
    exibirMenu();
    let opcao = prompt("Digite a opção:");
    switch (opcao) {
      case "1":
        novoCliente();
        break;
      case "2":
        atenderCliente();
        break;
      case "3":
        console.log("Programa encerrado.");
        return;
      default:
        console.log("Opção inválida.");
    }
  }
}

main();
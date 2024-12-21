let time = [];

function adicionarJogador(nome, idade, posicao, pontuacao) {
    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };
    time.push(jogador);
}

function buscarPorPosicao(posicao) {
    let jogadores = time.filter(jogador => jogador.posicao === posicao);
    if (jogadores.length > 0) {
        jogadores.forEach(jogador => console.log(jogador));
    } else {
        console.log("Nenhum jogador encontrado para a posição:", posicao);
    }
}

function listarTime() {
    if (time.length > 0) {
        time.forEach(jogador => console.log(jogador));
    } else {
        console.log("Nenhum jogador cadastrado no time.");
    }
}

function calcularPontuacaoMedia() {
    if (time.length > 0) {
        let totalPontuacao = time.reduce((total, jogador) => total + jogador.pontuacao, 0);
        let media = totalPontuacao / time.length;
        console.log("Pontuação média do time:", media);
    } else {
        console.log("Nenhum jogador cadastrado no time.");
    }
}

function exibirMenu() {
    console.log("1 - Adicionar jogador");
    console.log("2 - Buscar por posição");
    console.log("3 - Listar time");
    console.log("4 - Calcular pontuação média");
    console.log("5 - Sair");
    alert("Veja as opções no console e escolha uma ação.");
}

function coletarAcao() {
    let acao = prompt("Digite a ação desejada: ");
    return acao;
}

function main() {
    let acao = 0;
    while (acao != 5) {
        exibirMenu();
        acao = coletarAcao();
        switch (acao) {
            case "1":
                let nome = prompt("Digite o nome do jogador: ");
                let idade = Number(prompt("Digite a idade do Jogador: "));
                let posicao = prompt("Digite a posição do jogador: ");
                let pontuacao = Number(prompt("Digite a pontuação do jogador: "));
                adicionarJogador(nome, idade, posicao, pontuacao);
                break;
            case "2":
                let posicaoBusca = prompt("Digite a posição para buscar jogadores: ");
                buscarPorPosicao(posicaoBusca);
                break;
            case "3":
                listarTime();
                break;
            case "4":
                calcularPontuacaoMedia();
                break;
            case "5":
                console.log("Saindo...");
                break;
            default:
                console.log("Ação inválida. Tente novamente.");
        }
    }
}

main();
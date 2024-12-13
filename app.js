let numeroMaximo = 100
alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1

//enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolhe um número de 1 a ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


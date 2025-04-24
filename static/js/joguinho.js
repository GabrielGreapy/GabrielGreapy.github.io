function chute_Terminal(){
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    let tentativas = 0;
    let acertou = false;


    while (!acertou) {

        let tentativa = parseInt(prompt("Tente adivinhar o número secreto (entre 1 e 100): "));

        tentativas++;
        

        if (tentativa === numeroSecreto) {
            console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`);
            acertou = true;
        } else if (tentativa < numeroSecreto) {
            console.log("Tente um número maior.");
        } else {
            console.log("Tente um número menor.");

    console.log("Tente um número menor.");
        }
    }
}

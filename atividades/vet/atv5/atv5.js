const meuArray = []

exibirValores()

function exibirValores(){
    const meuDiv = document.getElementById("meuArray")
    meuDiv.innerHTML = ""
    for(let i = 0; i < meuArray.length; i++){
        meuDiv.appendChild(criarDiv(meuArray[i]))
    }
}

function criarDiv(valor){
    const novaDiv = document.createElement("div")
    novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"
    const texto = document.createElement("p")
    texto.className = "text center"
    texto.innerText = valor
    novaDiv.appendChild(texto)
    return novaDiv;
}

function executarPush(){
    const elemento = document.getElementById("elemento").value
    meuArray.push(elemento)
    exibirValores()
}
function pesquisar(){
    const elemento2 = document.getElementById("elemento2").value
    const achado = meuArray.find((i) => i === elemento2)
    const resultado = document.getElementById("resultado");
    if (achado) {
        resultado.textContent = "Encontrado";
    } else {
        resultado.textContent = "Não encontrado";
    }
}
function pesquisarBinaria(){
    const resultado2 = document.getElementById("resultado2");
    const elemento2 = document.getElementById("elemento2").value
    const ordenado = [...meuArray].sort();
    let inicio = 0
    let fim = 1
    while(inicio <= fim){
        let meio = Math.floor((inicio + fim) / 2)
        if (arrayOrdenado[meio] === elemento2) {
            resultado2.textContent = "Encontrado (binária)";
            return;
        } else if (arrayOrdenado[meio] < elemento2) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
}


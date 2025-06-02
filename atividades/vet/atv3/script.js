const meuArray = [4,3,2,1, 5]

exibirValores()

function exibirValores(){
    const divMeuArray = document.getElementById("meuArray")
    divMeuArray.innerHTML = ""
    for(let i = 0; i < meuArray.length; i++){
        divMeuArray.appendChild(criarDiv(meuArray[i]))
    }
}
function criarDiv(valor){
    const novaDiv = document.createElement("div")
    novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"
    const texto = document.createElement("p")
    texto.className = "text-center"
    texto.innerText = valor
    novaDiv.appendChild(texto)
    return novaDiv

}
function executarSort(){
    meuArray.sort(( a, b) => a - b)
    exibirValores()
}
function executarFilter(){
    filtrado = meuArray.filter((i) => i > 2)
    meuArray.length = 0
    filtrado.forEach((f) => {
        meuArray.push(f)
    });
    exibirValores()
}

function executarMap(){
    const dobrados = meuArray.map((i) => i*2)
    meuArray.length = 0
    dobrados.forEach((i) => { meuArray.push(i)})
    exibirValores()
}
function executarFind(){
    const achado = meuArray.find((i) => i === 10)
    if (achado){
        meuArray.length = 0
        meuArray.push(achado)
    }
    else{
        meuArray.length = 0
    }
    exibirValores()
}
function executarReduce(){
    const soma = meuArray.reduce((total, valor) => Number(total) + Number(valor), 0)
    meuArray.length = 0
    meuArray.push(soma)
    exibirValores()
}

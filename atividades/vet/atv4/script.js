const meuArray = [0,1,2,3,4,5]

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

function executarDobrar(){
    for(let chave in meuArray){
        meuArray[chave] = meuArray[chave] * 2
    }
    exibirValores()
}

function executarFilter(){
    const filtrado = []
    for(let i in meuArray){
        if(meuArray[i] < 2){
            filtrado.push(meuArray[i])
        }
    }
    meuArray.length = 0
    for(let i in filtrado){
        meuArray.push(filtrado[i])
    }
    exibirValores()
}
function executarFilterUnico(){
    const filtrado = []
    for(let i in meuArray){
        if(meuArray[i] < 2){ 
            filtrado.push(meuArray[i])
            break
        }
    }
    meuArray.length = 0
    for(let i in filtrado){
        meuArray.push(filtrado[i])
    }
    exibirValores()
}
function executarSomarTudo(){
    const soma = meuArray.reduce((total, valor) => Number(total) + Number(valor), 0)
    meuArray.length = 0
    meuArray.push(soma)
    exibirValores()
}
function adicionar1Cada(){
    const adicionado = []
    for( let i in meuArray){
        adicionado.push(meuArray[i] + 1)
    }
    meuArray.length = 0
    for(let i in adicionado){
        meuArray.push(adicionado[i])
    }
    exibirValores()
}
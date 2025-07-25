class Queue {
    constructor() {
        this.item = [];
    }

    enqueue(element) {
        this.item.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Não há nada nessa fila";
        }
        return this.item.shift();
    }

    front() {
        return this.isEmpty() ? "Não há nada nessa fila." : this.item[0];
    }

    isEmpty() {
        return this.item.length === 0;
    }
}

const itens = new Queue();

function criarDiv(valor) {
    const div = document.createElement("div");
    div.className = "bg-white text-black px-2 mx-1 rounded";
    div.textContent = valor;
    return div;
}

function exibirArray() {
    const divMeuArray = document.getElementById("meuArray");
    divMeuArray.innerHTML = "";
    for (let i = 0; i < itens.item.length; i++) {
        divMeuArray.appendChild(criarDiv(itens.item[i]));
    }
}

function executarEnqueue() {
    let element = document.getElementById("element").value;
    itens.enqueue(element);
    exibirArray();
}

function executarDequeue() {
    itens.dequeue();
    exibirArray();
}

function executarFront() {
    alert(itens.front());
}

window.executarEnqueue = executarEnqueue;
window.executarDequeue = executarDequeue;
window.executarFront = executarFront;

exibirArray();

// script.js

let pilha = [];

function atualizarVisualizacao() {
  const container = document.getElementById("meuArray");
  container.innerHTML = "";

  pilha.forEach((elemento) => {
    const el = document.createElement("div");
    el.className = "bg-white text-black font-bold rounded px-4 py-2 mx-1";
    el.textContent = elemento;
    container.appendChild(el);
  });
}

function executarPush() {
  const valor = document.getElementById("element").value;
  if (valor) {
    pilha.push(valor);
    atualizarVisualizacao();
    document.getElementById("element").value = "";
  }
}

function executarPop() {
  if (pilha.length > 0) {
    const removido = pilha.pop();
    alert("Elemento removido do topo: " + removido);
    atualizarVisualizacao();
  } else {
    alert("A pilha está vazia.");
  }
}

function executarPeek() {
  if (pilha.length > 0) {
    alert("Topo da pilha: " + pilha[pilha.length - 1]);
  } else {
    alert("A pilha está vazia.");
  }
}


window.executarPush = executarPush;
window.executarPop = executarPop;
window.executarPeek = executarPeek;

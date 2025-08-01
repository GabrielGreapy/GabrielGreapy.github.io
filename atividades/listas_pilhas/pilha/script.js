const editor = document.getElementById("editor");
const historyList = document.getElementById("historyList");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const clearBtn = document.getElementById("clearBtn");

// Pilhas principais
let undoStack = [];
let redoStack = [];

function atualizarHistorico() {
  historyList.innerHTML = "";

  if (undoStack.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhuma ação registrada ainda.";
    li.classList.add("text-gray-400", "italic");
    historyList.appendChild(li);
    return;
  }

  // Exibe do topo para base da pilha
  [...undoStack].reverse().forEach((valor, index) => {
    const li = document.createElement("li");
    li.textContent = `#${undoStack.length - index}: ${valor}`;
    historyList.appendChild(li);
  });
}

// Armazena o estado anterior sempre que o usuário digita
editor.addEventListener("input", (e) => {
  undoStack.push(e.target.value);
  redoStack = [];
  atualizarHistorico();
});

// Desfazer (volta um estado para trás)
undoBtn.addEventListener("click", () => {
  if (undoStack.length <= 1) return;

  const valorAtual = undoStack.pop();
  redoStack.push(valorAtual);

  const anterior = undoStack[undoStack.length - 1];
  editor.value = anterior;
  atualizarHistorico();
});

const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  if (undoStack.length <= 1) return;

  editor.disabled = true;
  let index = 0;

  // Clonamos a pilha pra evitar modificar o original
  const steps = [...undoStack];

  const interval = setInterval(() => {
    editor.value = steps[index];
    atualizarHistorico();

    index++;
    if (index >= steps.length) {
      clearInterval(interval);
      editor.disabled = false;
    }
  }, 500); // tempo entre os passos (ms)
});


redoBtn.addEventListener("click", () => {
  if (redoStack.length === 0) return;

  const valor = redoStack.pop();
  undoStack.push(valor);
  editor.value = valor;
  atualizarHistorico();
});


clearBtn.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja limpar o histórico?")) {
    undoStack = [editor.value];
    redoStack = [];
    atualizarHistorico();
  }
});


undoStack.push(editor.value);
atualizarHistorico();

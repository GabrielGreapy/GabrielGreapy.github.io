class Node {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
}

class ListaLigada {
  constructor() {
    this.inicio = null;
    this._tamanho = 0;
  }

  adicionar(dado) {
    const novoNode = new Node(dado);
    if (!this.inicio) {
      this.inicio = novoNode;
    } else {
      let temp = this.inicio;
      while (temp.proximo) {
        temp = temp.proximo;
      }
      temp.proximo = novoNode;
    }
    this._tamanho++;
  }

  removerPorNome(nome) {
    let temp = this.inicio;
    let anterior = null;

    while (temp) {
      if (temp.dado.nome === nome) {
        if (!anterior) {
          this.inicio = temp.proximo;
        } else {
          anterior.proximo = temp.proximo;
        }
        this._tamanho--;
        return true;
      }
      anterior = temp;
      temp = temp.proximo;
    }
    return false;
  }

  paraArray() {
    const resultado = [];
    let temp = this.inicio;
    while (temp) {
      resultado.push(temp.dado);
      temp = temp.proximo;
    }
    return resultado;
  }

  contem(nome) {
    let temp = this.inicio;
    while (temp) {
      if (temp.dado.nome === nome) return true;
      temp = temp.proximo;
    }
    return false;
  }

  limpar() {
    this.inicio = null;
    this._tamanho = 0;
  }

  tamanho() {
    return this._tamanho;
  }
}

// ===================================
// Carrinho
// ===================================
const carrinho = new ListaLigada();

const botaoAbrirCarrinho = document.getElementById("toggleCart");
const botaoFecharCarrinho = document.getElementById("closeCart");
const barraCarrinho = document.getElementById("cartSidebar");
const listaCarrinho = document.getElementById("cartItems");
const botaoComprar = document.getElementById("buyButton");
const secaoJogos = document.querySelector(".games");

botaoAbrirCarrinho.addEventListener("click", () => {
  barraCarrinho.classList.add("open");
});

botaoFecharCarrinho.addEventListener("click", () => {
  barraCarrinho.classList.remove("open");
});

function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";
  const jogos = carrinho.paraArray();
  jogos.forEach(jogo => {
    const li = document.createElement("li");
    li.setAttribute("data-nome", jogo.nome);
    li.innerHTML = `
      <strong>${jogo.nome}</strong><br>
      <img src="${jogo.imagem}" alt="${jogo.nome}" width="100"><br>
      <button onclick="removerDoCarrinho('${jogo.nome}')">🗑 Remover</button>
    `;
    listaCarrinho.prepend(li);
  });
}

function adicionarAoCarrinho(nome, imagem) {
  if (carrinho.contem(nome)) {
    alert("Este jogo já está no carrinho!");
    return;
  }

  carrinho.adicionar({ nome, imagem });
  atualizarCarrinho();
}

function removerDoCarrinho(nome) {
  carrinho.removerPorNome(nome);
  atualizarCarrinho();
}

botaoComprar.addEventListener("click", () => {
  if (carrinho.tamanho() === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("Compra finalizada com sucesso!");
  carrinho.limpar();
  atualizarCarrinho();
});

document.getElementById("formularioNovoJogo").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeJogo").value.trim();
  const imagem = document.getElementById("imagemJogo").value.trim() || "https://via.placeholder.com/150";

  if (!nome) {
    alert("Digite o nome do jogo!");
    return;
  }

  const novoCard = document.createElement("div");
  novoCard.classList.add("game-card");
  novoCard.innerHTML = `
    <h3>${nome}</h3>
    <div class="image-placeholder"><img src="${imagem}" alt="${nome}"></div>
    <button onclick="adicionarAoCarrinho('${nome}', '${imagem}')">Adicionar</button>
  `;

  secaoJogos.appendChild(novoCard);

  document.getElementById("nomeJogo").value = "";
  document.getElementById("imagemJogo").value = "";
});
const playBtn = document.getElementById("playBtn");

// Função para reproduzir as alterações salvas no histórico
playBtn.addEventListener("click", () => {
  if (undoStack.length === 0) return;

  editor.disabled = true;
  let index = 0;

  const interval = setInterval(() => {
    if (index >= undoStack.length) {
      clearInterval(interval);
      editor.disabled = false;
      return;
    }

    editor.value = undoStack[index];
    index++;
  }, 500); 
});

let carrinho = [];

const toggleCartBtn = document.getElementById("toggleCart");
const closeCartBtn = document.getElementById("closeCart");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const buyButton = document.getElementById("buyButton");

toggleCartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("open");
});

closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
});

function addToCart(gameName, imageSrc) {
    const alreadyInCart = carrinho.some(item => item.name === gameName);
    if (alreadyInCart) {
        alert("Este jogo já está no carrinho...");
        return;
    }

    const item = { name: gameName, image: imageSrc };
    carrinho.push(item);

    const li = document.createElement("li");
    li.setAttribute("data-name", gameName);
    li.innerHTML = `
        <strong>${gameName}</strong><br>
        <img src="${imageSrc}" alt="${gameName}">
        <br>
        <button onclick="removeFromCart('${gameName}')">🗑 Remover</button>
    `;
    cartItems.prepend(li);
}

function removeFromCart(gameName) {
    carrinho = carrinho.filter(item => item.name !== gameName);
    const itemElement = cartItems.querySelector(`li[data-name="${gameName}"]`);
    if (itemElement) {
        cartItems.removeChild(itemElement);
    }
}

buyButton.addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra finalizada!");
    carrinho = [];
    cartItems.innerHTML = "";
});

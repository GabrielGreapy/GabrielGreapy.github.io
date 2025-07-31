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

    carrinho.push({ name: gameName, image: imageSrc });

    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${gameName}</strong><br>
        <img src="${imageSrc}" alt="${gameName}">
    `;
    cartItems.prepend(li); // adiciona no topo
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

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cart = document.getElementById('cart');
    let cartItems = [];

    // Fetch products from the API
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h3>${product.nome}</h3>
                    <p>${product.descricao}</p>
                    <p>Preço: R$ ${product.preco.toFixed(2)}</p>
                    <button onclick="addToCart('${product.nome}')">Adicionar ao Carrinho</button>
                `;
                productList.appendChild(productDiv);
            });
        });

    // Add product to cart
    window.addToCart = (productName) => {
        cartItems.push(productName);
        updateCart();
    };

    // Update cart display
    function updateCart() {
        cart.innerHTML = '';
        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item;
            cart.appendChild(itemDiv);
        });
    }
});

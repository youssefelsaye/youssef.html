let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("تم إضافة المنتج إلى السلة!");
}

function searchProduct() {
    const searchQuery = document.getElementById('search-bar').value;
    alert("بحث عن: " + searchQuery);
}
const Products = [
    { id: 1, title: 'Shirt', img: 'img/Shirt.jpg', price: 150 },
    { id: 2, title: 'Socks', img: 'img/Socks.jpg', price: 50 },
    { id: 3, title: 'Jacket', img: 'img/Jacket.jpg', price: 350 },
    { id: 4, title: 'Shoes', img: 'img/Shoes.jpg', price: 250 },
];

const renderProduct = (product) => {
    return `<div class="goods__item">
    <h3 class="goods__name" >${product.title}</h3> 
    <img class="goods__img" src="${product.img}"> 
    <p class="goods__price">Цена: ${product.price} $</p>

    <button class="goods__button">Купить</button> 
    </div> `;
};
const renderProductsList = list => {
    document.querySelector('.goods__list').innerHTML = list.map(product => renderProduct(product)).join('');
}
renderProductsList(Products);

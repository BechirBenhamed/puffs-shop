const productsContainer = document.getElementById('products');

const products = [
  { name: 'Tropical', image: 'cocktail-tropical.jpg', price: '109dt', link: 'pro1.html'},
  { name: 'Fruits rouges', image: 'fruits-rouges-intense.jpg', price: '89dt' },
  { name: 'Strawberry', image: 'ice-cream-fraise-wpuff-liquideo.jpg', price: '104dt' },
  { name: 'Famboyante', image: 'myrtille-framboyante.jpg', price: '79dt' },
  { name: 'Pasteque fraise', image: 'pasteque-fraise.jpg', price: '107dt' },
  { name: 'Pasteque melon', image: 'pasteque-melon.jpg', price: '89dt' },
  { name: 'Peche glacee', image: 'puff-peche-glacee.jpg', price: '114dt' },
  { name: 'Cerise glacee', image: 'vape-pen-cerise-glacee.jpg', price: '69dt' }
];

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product');

  const link = document.createElement('a'); // Anchor tag for the product link
  link.href = product.link;

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;

  const name = document.createElement('h3');
  name.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = `Price: ${product.price}`;

  link.appendChild(image);
  link.appendChild(name);
  link.appendChild(price);

  card.appendChild(link); // Append the link to the product card

  productsContainer.appendChild(card);
}

products.forEach(createProductCard);
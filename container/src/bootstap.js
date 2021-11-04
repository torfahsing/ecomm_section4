import {mount} from 'products/ProductsIndex';
import {mount as mountCart} from'cart/CartShow';

console.log('container_prod');

const products = document.querySelector('#prod-products');
if (products) mount(products);
const cart = document.querySelector('#prod-cart');

if (cart) mountCart(cart);
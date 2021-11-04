import faker from 'faker';




const mount = (el) => {
    const cartText = `<div>You have ${faker.datatype.number(99)} items in your cart </div>`;

    el.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    if (el) {
        mount(el);
    }
}

export { mount };
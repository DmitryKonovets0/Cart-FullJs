window.addEventListener('DOMContentLoaded', function(){
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createCart(){
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

            heading.textContent = 'Ваша корзина';
            closeBtn.textContent = 'Закрыть';

            cart.classList.add('cart');
            field.classList.add('cart-field');
            closeBtn.classList.add('close');

            document.body.appendChild(cart);
            cart.appendChild(heading);
            cart.appendChild(field);
            cart.appendChild(closeBtn);
    }createCart();
        let cart = document.querySelector('.cart'),
            field = document.querySelector('.cart-field'),
            closeBtn = document.querySelector('.close');
    function openCart(){
        cart.style.display = 'block';
    }
    function closeCart(){
        cart.style.display = 'none';
    }
    openBtn.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);

    for(let i = 0; i < buttons.length; i++)
        buttons[i].addEventListener('click', function(){
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button');
            products[i].remove();
            field.appendChild(item);
            btn.remove();
        });
});


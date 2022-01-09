    let burger = document.getElementById('burger');
    let burgerLinks = document.getElementById('burgerLinks');

    function functionBurger() {
        burgerLinks.classList.toggle('navOpen')
    };

    burger.addEventListener('click', functionBurger)

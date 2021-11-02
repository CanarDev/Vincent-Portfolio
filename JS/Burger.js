function burgerFunction () {
    window.scrollTo({
        top: 0,
        left: 0,
    })
    var burger = document.getElementById('MyBurger');
    burger.classList.toggle("burgerOppenning");
}
function burgerFunction () {
    window.scrollTo({
        top: 0,
        left: 0,
    })
    var burger = document.getElementById('MyBurger');
    var body = document.getElementById('body');
    burger.classList.toggle("burgerOppenning");
    body.classList.toggle("stop-scrolling");//fonctionne en responsive sur ordi mais peut etre brutforce sur telephne..????
}


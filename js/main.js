(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js')

    $btnMenu = document.querySelector('.main-header__btn');
    $btnMenu.removeAttribute('style');
})()
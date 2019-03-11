(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js')

    var menu = new Menu({
        container: '.main-header__nav',
        toggleBtn: '.main-header__btn',
        widthEnable: 1024
    })
})()
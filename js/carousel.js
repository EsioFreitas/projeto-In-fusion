function Carousel(config) {
    this.container = document.querySelector(config.container);
    this.itens = this.container.querySelectorAll(config.itens);
    this.btnPrev = this.container.querySelector(config.btnPrev);
    this.btnNext = this.container.querySelector(config.btnNext);

    var _this = this;
    var _currentSlide = 0;

    init();

    function init() {
        var _show = _this.container.querySelectorAll('.show');

        Array.prototype.forEach.call(_show, function (sh) {
            sh.classList.remove('show');
        })
        _this.itens[0].classList.add('show');
        _this.btnPrev.removeAttribute('style');
        _this.btnNext.removeAttribute('style');

        addListenners();
    }

    function addListenners() {
        _this.btnPrev.addEventListener('click', showPrevSlide);
        _this.btnNext.addEventListener('click', showNextSlide);
    }

    function showPrevSlide() {
        _currentSlide--;
        showSlide();
    }

    function showNextSlide() {
        _currentSlide++;
        showSlide();
    }

    function showSlide() {
        var qtd = _this.itens.length;
        var slide = _currentSlide % qtd;
        slide = Math.abs(slide);

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }

}
window.addEventListener('scroll', function (){
    const parallax = document.querySelector('.text-container');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition* .5 + 'px)'
});
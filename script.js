function toggleNav() {
    // Puoi semplificare questa funzione inserendo una classe a tutto il body.
    // In questo modo puoi controllare tramite CSS tutti gli elementi della pagina tramite il selettore body.menu-active

    var body = document.querySelector('body');
    body.classList.toggle("menu-active");


}

ScrollReveal().reveal('.elemento grande4');
ScrollReveal().reveal('.elemento grande3');
ScrollReveal().reveal('.elemento grande5');
ScrollReveal().reveal('.elemento grande2');

const textrev = gsap.timeline();

textrev.from(".line span", 1.8, {
    y: 200,
    ease: "power4.out",
    delay: 1,
    skewY: 10,
    stagger: {
        amount: 0.4,
    },
});
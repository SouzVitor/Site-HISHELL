// Nav bar JS

document.addEventListener('DOMContentLoaded', function() {
    // Inicia o carrossel
    const carousel = new bootstrap.Carousel('#carouselExampleCaptions');

    // Aplica o ScrollReveal ao container do carrossel em vez das imagens
    ScrollReveal().reveal('.carousel-inner', {
        duration: 2000,   // Duração da animação
        origin: 'bottom', // Direção de onde o elemento aparece
        distance: '50px', // Distância do movimento
        easing: 'ease-in-out', // Tipo de animação
        reset: false,     // Não repete a animação ao sair da tela
        opacity: 1,       // Garante opacidade total
        beforeReveal: function (el) {
            el.style.opacity = 1;  // Garante que o elemento esteja visível
        }
    });
});

function toggleMenu () {
    var menuToggle = document.querySelector ('.toggle');
    var menu = document.querySelector ('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')    
}
document.querySelector('.menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      toggleMenu();
    }
  });

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true
})

sr.reveal ('.home-text',{})
sr.reveal ('.home-img',{delay:200})         

sr.reveal ('.social',{delay:200})  

sr.reveal ('.about-img',{})
sr.reveal ('.heading',{})
sr.reveal ('.about-text',{delay:200})

sr.reveal ('.services-content',{})

sr.reveal ('.work-text',{})
sr.reveal ('.work-img',{delay:200})

sr.reveal ('.contact-button',{})

sr.reveal ('.app h1',{})
sr.reveal ('.app',{delay:200})

sr.reveal ('form input',{})
sr.reveal ('form textarea',{})
sr.reveal ('.app',{delay:200})


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});


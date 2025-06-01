document.addEventListener('DOMContentLoaded', () => {
  // Validação do formulário
  const formContato = document.getElementById('formContato');
  if (formContato) {
    formContato.addEventListener('submit', function(event) {
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }

      if (name === '') {
        alert('Por favor, digite seu nome.');
        event.preventDefault();
        return;
      }

      if (email === '') {
        alert('Por favor, digite seu email.');
        event.preventDefault();
        return;
      }

      if (!validarEmail(email)) {
        alert('Por favor, digite um email válido.');
        event.preventDefault();
        return;
      }

      if (message === '') {
        alert('Por favor, digite sua mensagem.');
        event.preventDefault();
        return;
      }
    });
  }

  /*Carrossel*/
const imagens = document.getElementById('imagens');
const imagensOriginais = Array.from(imagens.children);

// Clona primeira e última imagem para loop infinito
const primeiraClone = imagensOriginais[0].cloneNode(true);
const ultimaClone = imagensOriginais[imagensOriginais.length - 1].cloneNode(true);

imagens.appendChild(primeiraClone);
imagens.insertBefore(ultimaClone, imagens.firstChild);

let indiceImagem = 1; // Começa na imagem "real" 1
const totalImagens = imagens.children.length;

imagens.style.transform = `translateX(-${indiceImagem * 100}%)`;

let podeMover = true;
let intervalo;

function mover(direcao) {
  if (!podeMover) return;
  podeMover = false;

  indiceImagem += direcao;
  imagens.style.transition = 'transform 0.5s ease-in-out';
  imagens.style.transform = `translateX(-${indiceImagem * 100}%)`;

  setTimeout(() => {
    // Se estiver no clone da última imagem, volta pra real 1
    if (indiceImagem === totalImagens - 1) {
      imagens.style.transition = 'none';
      indiceImagem = 1;
      imagens.style.transform = `translateX(-${indiceImagem * 100}%)`;
    }
    // Se estiver no clone da primeira imagem, volta pra real última
    if (indiceImagem === 0) {
      imagens.style.transition = 'none';
      indiceImagem = totalImagens - 2;
      imagens.style.transform = `translateX(-${indiceImagem * 100}%)`;
    }
    podeMover = true;
  }, 500);

  // Reinicia o intervalo automático sempre que mexer manualmente
  clearInterval(intervalo);
  intervalo = setInterval(() => mover(1), 4000);
}

// Começa o slide automático
intervalo = setInterval(() => mover(1), 4000);

// Expõe mover no window para seus botões funcionarem
window.mover = mover;
});


/*idioma*/
window.gtranslateSettings = {
  default_language: "pt",
  languages: ["pt", "en"],
  wrapper_selector: ".gtranslate_wrapper",
  flag_size: 16,
  horizontal_position: "right",
  vertical_position: "top",
  alt_flags: {
    pt: "brazil"
  }
};

const script = document.createElement("script");
script.src = "https://cdn.gtranslate.net/widgets/latest/popup.js";
script.defer = true;
document.body.appendChild(script);

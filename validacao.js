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

  // Carrossel
  const imagens = document.getElementById('imagens');
  if (imagens) {
    window.totalImagens = imagens.children.length;
    window.indiceImagem = 0;

    window.mover = function(direcao) {
      window.indiceImagem = (window.indiceImagem + direcao + window.totalImagens) % window.totalImagens;
      imagens.style.transform = `translateX(-${window.indiceImagem * 100}%)`;
    }

    // Rotação automática a cada 4 segundos
    setInterval(() => {
      mover(1);
    }, 4000);
  }
});

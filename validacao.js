
  document.getElementById('formContato').addEventListener('submit', function(event) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    // Função simples para validar email
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


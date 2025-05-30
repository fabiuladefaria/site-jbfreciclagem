document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");

    form.addEventListener("submit", function (event) {
        const nome = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const mensagem = form.querySelector("textarea[name='message']").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            event.preventDefault();
            return;
        }
    });
});
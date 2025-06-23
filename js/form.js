function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || idade === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    if (isNaN(idade) || idade <= 0) {
        alert('Por favor, insira uma idade válida.');
        return false;
    }

    return true;
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);

    const nome = params.get('nome');
    const email = params.get('email');
    const idade = params.get('idade');
    const mensagem = params.get('mensagem');

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
    `;
};

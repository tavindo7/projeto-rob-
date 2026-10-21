
const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    mensagem.hidden = !mensagem.hidden;

    if (mensagem.hidden) {
        botao.textContent = "Conheça meu objetivo";
    } else {
        botao.textContent = "Ocultar mensagem";
    }
});

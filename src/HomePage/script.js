function direcionarPaginaLogin () {
    window.location.href="../page de login/index.html"
}

function direcionarPaginaCadastro () {
    window.location.href="../Tela de Cadastro/index.html"
}

document.addEventListener ("DOMContentLoaded", function () {
    var btnEntrar = document.querySelector (".button-entrar");
    var btnCadastrar = document.querySelector (".button-cadastrar");
    btnEntrar.addEventListener ("click", direcionarPaginaLogin);
    btnCadastrar.addEventListener ("click", direcionarPaginaCadastro);
});
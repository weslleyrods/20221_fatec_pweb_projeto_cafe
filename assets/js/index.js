const ls = localStorage;
let sair = document.getElementById("btnSair"); // block
let cadastrar = document.getElementById("btnCadastrar"); // flex
let entrar = document.getElementById("btnEntrar"); // flex
let nomeUsuario = document.getElementById("nomeUsuario"); // inline

window.addEventListener("load", () => {
  try {
    const usuarioLogado = JSON.parse(ls.getItem("usuario_logado"));
    nomeUsuario.textContent = usuarioLogado.nome;
    sair.style.display = `block`;
    cadastrar.style.display = `none`;
    entrar.style.display = `none`;
  } catch (e) {
    sair.style.display = "none";
    cadastrar.style.display = "flex";
    entrar.style.display = "flex";
    nomeUsuario.textContent = "";
  }
});

sair.addEventListener("click", async () => {
  try {
    localStorage.removeItem("usuario_logado");
    window.open("/index.html", "_self");
  } catch (e) {
    alert("Erro ao fazer logoff, tente novamente.");
    console.log(e);
  }
});

// colocar o script em todas as telas

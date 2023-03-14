//pegar 4 inputs e botão ENVIAR

let autor = document.querySelector("#autor");
let titulo = document.querySelector("#titulo");
let disponivel = document.querySelector("#disponivel");
let acesso = document.querySelector("#acesso");
let button_send = document.querySelector(".enviar_informacoes");

let resultado = document.querySelector("section.resultado");

//criar função que organiza referencia de site
function de_site() {
    //resultado
    resultado.innerHTML = `${autor}, ${autor}. ${titulo}. Disponívem em: ${disponivel}. Acesso em: ${acesso}`;
}
button_send.addEventListener('click', de_site);
//pegar 4 inputs e botão ENVIAR

let autor = document.querySelector("#autor");
let title = document.querySelector("#titulo");
let disponivel = document.querySelector("#disponivel");
let acesso = document.querySelector("#acesso");
let button_send = document.querySelector(".enviar_informacoes");

let resultado = document.querySelector("section.resultado");

//criar função que organiza referencia de site

function de_site() {
    const fname = "";
    const lname = "";
    const names = autor.value;
    //console.log(autor.value.slice(-2));
    lname = names(names.lenght-1);
    

    resultado.innerHTML = `${lname}, ${fname}. ${title.value}. Disponível em: ${disponivel.value}. Acesso em: ${acesso.value}`;
}
button_send.addEventListener('click', de_site);
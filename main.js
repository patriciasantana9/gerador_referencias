//pegar 4 inputs e botão ENVIAR

let autor = document.querySelector("#autor");
let title = document.querySelector("#titulo");
let disponivel = document.querySelector("#disponivel");
let acesso = document.querySelector("#acesso");
let button_send = document.querySelector(".enviar_informacoes");

let resultado = document.querySelector("section.resultado");

//criar função que organiza referencia de site

function de_site() {

    let full_name = autor.value;
    let names = full_name.split(" ");
    let lname = names[names.length-1];
    let fname;
    //exibir todas as substrings excento a última
    

    resultado.innerHTML = `${lname}`;
   // resultado.innerHTML = `${lname}, ${fname}. ${title.value}. Disponível em: ${disponivel.value}. Acesso em: ${acesso.value}`;
}
button_send.addEventListener('click', de_site);
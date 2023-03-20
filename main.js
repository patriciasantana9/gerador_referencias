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
    //"Patrícia", "Souza", "de", "Santana" 

    let fname;
    //let fname = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i] !== -1) {
            //deve retornar mais de uma substring dentro da mesma variável; como?
            fname = names[i];
        }
    }
    
    let lname = names[names.length-1];

    //exibir todas as substrings (demais indices) excento a última

    resultado.innerHTML = `${lname}, ${fname}. ${title.value}. Disponível em: ${disponivel.value}. Acesso em: ${acesso.value}`;
}
button_send.addEventListener('click', de_site);
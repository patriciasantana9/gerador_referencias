let autor = document.querySelector("#autor");
let title = document.querySelector("#titulo");
let disponivel = document.querySelector("#disponivel");
let acesso = document.querySelector("#acesso");

let button_send = document.querySelector(".enviar_informacoes");

let resultado = document.querySelector("section.resultado");

//fazer modularização

let full_name = autor.value;
//substrings
let names = full_name.split(" ");
let fname = " ";
for (let i = 0; i < names.length-1; i++) {
    fname += names[i] + " ";    //eliminar espaço depois da penúltima substring
}
let lname = names[names.length-1];
//formatar data: DD mes AAAA
let acesso_em = acesso.value;

//referencia de site
function de_site() {
    resultado.innerHTML = `<p>${lname.toUpperCase()}, ${fname}. <strong>${title.value}</strong>. Disponível em: ${disponivel.value}. Acesso em: ${acesso_em} </p>`;

    //https://willianjusten.com.br/formatando-datas-com-js-puro
    //https://www.blogson.com.br/como-formatar-data-em-javascript-do-jeito-facil/
}
button_send.addEventListener('click', de_site);

//quando faltar o nome do autor 

function de_video(){
    /*
    SOBRENOME, Nome do autor do vídeo (ou nome do canal). Título do vídeo. YouTube, data da publicação. Disponível em: link do vídeo. Acesso em: data que o vídeo foi acessado.
    */

}
function de_livro(){
    /*
    SOBRENOME, Nome. Título: subtítulo (se houver). Edição (se houver). Local de publicação: Editora, ano de publicação da obra.
    */

}
function de_artigo(){
    /*
    com autor: SOBRENOME, Nome. Título da matéria. Nome do site, ano. Disponível em: <URL>. Acesso em: dia, mês e ano.
    sem autor: TÍTULO da matéria. Nome do site, ano. Disponível em: <URL>. Acesso em: dia, mês e ano. 
    */
}
function de_trabalhos(){
    /*
    SOBRENOME, Nome. Título: subtítulo (se houver). Ano de apresentação. Número de folhas ou volumes. Categoria (área de concentração) – Instituição, Local, ano da defesa. 
    */
}
let title = document.querySelector("#titulo");
let available = document.querySelector("#disponivel");
let acesso = document.querySelector("#acesso");
let autor = document.querySelector("#autor");

let button_send = document.querySelector(".enviar_informacoes");

let resultado = document.querySelector("section.resultado");

//fazer modularização

let fname = " ";
let lname = " ";

//nome
function name(){
    let full_name = autor.value;
    //substrings
    let names = full_name.split(" ");

    for (let i = 0; i < names.length-1; i++) {
        fname += names[i] + " ";    //eliminar espaço depois da penúltima substring
    }
    lname = names[names.length-1];
    //quando faltar o nome do autor 
}
//título
let title_f = title.value;
//subtítulo
//

//disponível em
let available_f = available.value;

//data de acesso
//formatar data: DD mes AAAA
let acesso_em = acesso.value;

//nome do canal
//

//data da publicação
//

//edição do livro
//

//local de publicação
//

//editora
//

//num. de folhas/volumes
//

//categoria da pesquisa
//

//instituição
//


//referencia de site
function de_site() {
    resultado.innerHTML = `<p>${lname.toUpperCase()}, ${fname}. <strong>${title_f}</strong>. Disponível em: ${available_f}. Acesso em: ${acesso_em} </p>`;

    //https://willianjusten.com.br/formatando-datas-com-js-puro
    //https://www.blogson.com.br/como-formatar-data-em-javascript-do-jeito-facil/
}
button_send.addEventListener('click', de_site);


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
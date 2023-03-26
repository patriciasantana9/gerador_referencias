let title = document.querySelector("#titulo");
let subtitle = document.querySelector("#subtitulo");
let available = document.querySelector("#disponivel");
let acesso = document.querySelector("#acesso");
let author = document.querySelector("#autor");

let button_send = document.querySelector(".enviar_informacoes");

let resultado = document.querySelector("section.resultado");

//fazer modularização

//nome
let fname = " ";
let lname = " ";
let full_name = author.value;
let names = full_name.split(" ");
for (let i = 0; i < names.length-1; i++) {
    fname += names[i] + " ";    //eliminar espaço depois da penúltima substring
}
lname = names[names.length-1].toUpperCase();

//título
let title_f = title.value;

//subtítulo
let subtitle_f = subtitle.value;

//disponível em
let available_f = available.value;

//data de acesso
//formatar data: DD mes AAAA
let acesso_em = acesso.value;

//nome do canal
let channel_f;

//data da publicação
let publication_date_f;

//edição do livro
let edition_f;

//local de publicação
let publication_local_f;

//editora
let editor_f;

//ano de publicação
let publication_year_f;

//num. de folhas/volumes
let volum_f;

//categoria da pesquisa
let category_f;

//instituição
let institution_f;

//referencia de site
function de_site() {
    resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title_f}</strong>: ${subtitle_f}. Disponível em: ${available_f}. Acesso em: ${acesso_em} </p>`;
/*    if (subtitle_f !== ""){
    } else {
        resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title_f}</strong>. Disponível em: ${available_f}. Acesso em: ${acesso_em} </p>`;
    }
*/
    //https://willianjusten.com.br/formatando-datas-com-js-puro
    //https://www.blogson.com.br/como-formatar-data-em-javascript-do-jeito-facil/
}
button_send.addEventListener('click', de_site);

function de_video(){
    resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title_f}</strong>. YouTube, ${publication_date_f}. Disponível em: ${available_f}. Acesso em: ${acesso_em} </p>`;

    resultado.innerHTML = `<p>${channel_f}. <strong>${title_f}</strong>. YouTube, ${publication_date_f}. Disponível em: ${available_f}. Acesso em: ${acesso_em} </p>`;
}
function de_livro(){
    /*
    SOBRENOME, Nome. Título: subtítulo (se houver). Edição (se houver). Local de publicação: Editora, ano de publicação da obra.
    */
    //if (subtitle !== "") {}
    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}. ${edition_f}. ${publication_local_f}: ${editor_f}, ${publication_year_f}.</p>`

    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}: ${subtitle_f}. ${edition_f}. ${publication_local_f}: ${editor_f}, ${publication_year_f}.</p>`
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
    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}: ${subtitle_f}. ${publication_year_f}. ${volum_f}. ${category_f} - ${institution_f}, ${publication_local_f}, ${publication_year_f}.</p>`
    
    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}. ${publication_year_f}. ${volum_f}. ${category_f} - ${institution_f}, ${publication_local_f}, ${publication_year_f}.</p>`
}
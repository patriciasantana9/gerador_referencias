let button_send = document.querySelector(".enviar_informacoes");
function teste () {
    console.log('MAIN.JS FUNCIONA');
}
button_send.addEventListener('click', teste);

/*let author = document.querySelector("#autor");
let title = document.querySelector("#titulo");
let subtitle = document.querySelector("#subtitulo");
let available = document.querySelector("#disponivel");
let acess = document.querySelector("#acesso");

let button_send = document.querySelector(".enviar_informacoes");

let resultado = document.querySelector("section.resultado");

//fazer modularização

//referencia de site
function de_site() {
    let fname = "";
    let lname = "";
    let full_name = author.value;
    let names = full_name.split(" ");
    for (let i = 0; i < names.length-1; i++) {
        fname += names[i] + " ";    //eliminar espaço depois da penúltima substring
    }
    lname = names[names.length-1].toUpperCase();
    
    //formatar data: DD mes AAAA
    let acesso_em = acess.value;

    if (subtitle.value.length === 0){
        resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>. Disponível em: ${available.value}. Acesso em: ${acesso_em} </p>`;
    } else {
        resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. Disponível em: ${available.value}. Acesso em: ${acesso_em} </p>`;
    }
}
button_send.addEventListener('click', de_site);

function de_video(){
    resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>. YouTube, ${publication_date_f}. Disponível em: ${available.value}. Acesso em: ${acesso_em} </p>`;

    resultado.innerHTML = `<p>${channel_f}. <strong>${title.value}</strong>. YouTube, ${publication_date_f}. Disponível em: ${available.value}. Acesso em: ${acesso_em} </p>`;
}
/*
function de_livro(){
    
    SOBRENOME, Nome. Título: subtítulo (se houver). Edição (se houver). Local de publicação: Editora, ano de publicação da obra.
    
    //if (subtitle !== "") {}
    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}. ${edition_f}. ${publication_local_f}: ${editor_f}, ${publication_year_f}.</p>`

    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}: ${subtitle_f}. ${edition_f}. ${publication_local_f}: ${editor_f}, ${publication_year_f}.</p>`
}

function de_artigo(){
    com autor: SOBRENOME, Nome. Título da matéria. Nome do site, ano. Disponível em: <URL>. Acesso em: dia, mês e ano.
    
    sem autor: TÍTULO da matéria. Nome do site, ano. Disponível em: <URL>. Acesso em: dia, mês e ano. 
}

function de_trabalhos(){
    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}: ${subtitle_f}. ${publication_year_f}. ${volum_f}. ${category_f} - ${institution_f}, ${publication_local_f}, ${publication_year_f}.</p>`
    
    resultado.innerHTML = `<p> ${lname}, ${fname}. ${title_f}. ${publication_year_f}. ${volum_f}. ${category_f} - ${institution_f}, ${publication_local_f}, ${publication_year_f}.</p>`
}
*/
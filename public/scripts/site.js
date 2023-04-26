//de todos
let author = document.querySelector("#author");
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let available = document.querySelector("#available");
let access = document.querySelector("#access");

//para evento
let send_site = document.querySelector("button.send_site");

//para impressão do resultado
let resultado = document.querySelector("section.resultado");

console.log('main.js ok')

//fazer modularização

//formatar data: DD mes AAAA
let access_in = access.value;

function names () {
    let fname = "";
    let lname = "";
    let full_name = author.value;
    let names = full_name.split(" ");
    for (let i = 0; i < names.length-1; i++) {
        fname += names[i] + " ";    //eliminar espaço depois da penúltima substring
    }
    lname = names[names.length-1].toUpperCase();
}
//referência de site
function de_site() {
    names();
    
    if (subtitle.value.length === 0){
        resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>. Disponível em: ${available.value}. Acesso em: ${acesso_em} </p>`;
    } else {
        resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. Disponível em: ${available.value}. Acesso em: ${access_in} </p>`;
    }
}
send_site.addEventListener('click', de_site);

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
console.log('site.js ok')

//marcar botão do site no aside
let button_site = document.querySelector('button.site');
let a_site = document.querySelector('a.site');
button_site.style.backgroundColor = "#a53d18";
a_site.style.backgroundColor = "#a53d18";

//para evento
let send_site = document.querySelector("button.send_site");

//para impressão do resultado
let resultado = document.querySelector("section.resultado");

//dados para referência
let author = document.querySelector("input#author");
let title = document.querySelector("input#title");
let subtitle = document.querySelector("input#subtitle");
let available = document.querySelector("input#available");
let access = document.querySelector("input#access");

//extrair nomes de author
let fname = "";
let lname = "";

//função para separar nomes
function names () {
    let full_name = author.value;
    let names = full_name.split(" ");
    for (let i = 0; i < names.length-1; i++) {
        fname += names[i] + " ";    
    }
    fname = fname.trim();
    lname = names[names.length-1].toUpperCase();
}

//referência de site
function de_site() {
    names();
    
    //checar se possui informações importantes
    if (author.value.length === 0) {
        alert("Por favor, informe os dados solicitados.")
    } else {
        //checar se tem subtítulo
        if (subtitle.value.length !== 0){
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. Disponível em: ${available.value}. Acesso em: ${access.value} </p>`;
        } else {
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>. Disponível em: ${available.value}. Acesso em: ${access.value} </p>`;
        }
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
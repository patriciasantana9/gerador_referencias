console.log('article.js ok');

//marcar botão do site no aside
let a_article = document.querySelector('a.article');
a_article.style.backgroundColor = "#a53d18";
a_article.style.color = "#ffffff";

//para evento
let send_article = document.querySelector("button.send_article");

//para impressão do resultado
let resultado = document.querySelector("section.resultado");

//dados para referência
let author = document.querySelector("input#author");
let title = document.querySelector("input#title");
let subtitle = document.querySelector("input#subtitle");
let journal_title = document.querySelector("input#journal_title");
let place = document.querySelector("input#place");
let volume = document.querySelector("input#volume");
let issue = document.querySelector("input#issue");
let pages = document.querySelector("input#pages");
let publication_date = document.querySelector("input#publication_date");
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
function de_article() {
    names();
    
    //checar se possui informações importantes
    if (author.value.length === 0) {
        alert("Por favor, informe os dados solicitados.");
    } else {
        //checar se tem subtítulo
        if(subtitle.value.length !== 0) {
            resultado.innerHTML = `<p>${lname}, ${fname}. ${title.value}: ${subtitle.value}. <strong>${journal_title.value}</strong>, v. ${volume.value}, n. ${issue.value}, p. ${pages.value}, ${publication_date.value}. Disponível em: ${available.value}. Acesso em: ${access.value}.</p>`;
        } else {
            resultado.innerHTML = `<p>${lname}, ${fname}. ${title.value}. <strong>${journal_title.value}</strong>, v. ${volume.value}, n. ${issue.value}, p. ${pages.value}, ${publication_date.value}. Disponível em: ${available.value}. Acesso em: ${access.value}.</p>`;
        }
    }
}
send_article.addEventListener('click', de_article);
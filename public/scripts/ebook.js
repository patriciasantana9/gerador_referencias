console.log('ebook.js ok');

//marcar botão do site no aside
let button_ebook = document.querySelector('button.ebook');
let a_ebook = document.querySelector('a.ebook');
button_ebook.style.backgroundColor = "#a53d18";
a_ebook.style.backgroundColor = "#a53d18";

//para evento
let send_ebook = document.querySelector("button.send_ebook");

//para impressão do resultado
let resultado = document.querySelector("section.resultado");

//dados para referência
let author = document.querySelector("input#author");
let title = document.querySelector("input#title");
let subtitle = document.querySelector("input#subtitle");
let edition = document.querySelector("input#edition");
let place = document.querySelector("input#place");
let editor = document.querySelector("input#editor");
let year = document.querySelector("input#year");

//extrair nomes de author
let fname = "";
let lname = "";

//função para separar nomes
function names () {
    let full_name = author.value;
    let names = full_name.split(" ");
    for (let i = 0; i < names.length-1; i++) {
        //eliminar espaço depois da penúltima substring
        fname += names[i] + " ";    
    }
    fname = fname.trim();
    lname = names[names.length-1].toUpperCase();
}

//referência de ebook
function de_ebook() {
    console.log('de_ebook ok')
    names();
    
    //checar se possui informações importantes
    if (author.value.length === 0) {
        alert("Por favor, informe os dados solicitados.");
    } else {
        //checar se tem subtítulo
        if (subtitle.value.length !== 0){
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. ${edition.value}.ed. ${place.value}: ${editor.value}, ${year.value}. <em>Ebook</em>.</p>`;
        } else {
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>. ${edition.value}.ed. ${place.value}: ${editor.value}, ${year.value}. <em>Ebook</em>.</p>`;
        }
    }
}
send_ebook.addEventListener('click', de_ebook);
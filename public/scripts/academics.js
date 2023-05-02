console.log('academics.js ok');

//marcar botão do site no aside
let button_academics = document.querySelector('button.academics');
let a_academics = document.querySelector('a.academics');
button_academics.style.backgroundColor = "#a53d18";
a_academics.style.backgroundColor = "#a53d18";

//para evento
let send_academics = document.querySelector("button.send_academics");

//para impressão do resultado
let resultado = document.querySelector("section.resultado");

//dados para referência
let author = document.querySelector("input#author");
let title = document.querySelector("input#title");
let subtitle = document.querySelector("input#subtitle");
let pages = document.querySelector("input#pages");
let degree = document.querySelector("input#degree");
let program = document.querySelector("input#program");
let university = document.querySelector("input#university");
let place = document.querySelector("input#place");
let year = document.querySelector("input#year");
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
function de_academics() {
    names();
    
    //checar se possui informações importantes
    if (author.value.length === 0) {
        alert("Por favor, informe os dados solicitados.")
    } else {
        //checar se tem subtítulo
        if (subtitle.value.length !== 0){
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. ${year.value}. ${degree.value} - ${program.value}, ${university.value}, ${place.value}, ${year.value}. Disponível em: ${available.value}. Acesso em: ${access.value}.</p>`;
        } else {
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>. ${year.value}. ${degree.value} - ${program.value}, ${university.value}, ${place.value}, ${year.value}. Disponível em: ${available.value}. Acesso em: ${access.value}.</p>`;
        }
    }
}
send_academics.addEventListener('click', de_academics);
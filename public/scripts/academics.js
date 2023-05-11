console.log('academics.js ok');

//marcar botão do site no aside
let a_academics = document.querySelector('a.academics');
a_academics.style.backgroundColor = "#a53d18";
a_academics.style.color = "#ffffff";

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

//função para formatar data
let formatedDate;
function accessDate() {
    //valor do input data
    let access = document.querySelector("input#access").value;
    //valores para substituir mês
    const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul","ago","set","out","nov","dez"];
    //trasnformar data capturada em string para que fique correta
    let date = new Date(JSON.stringify(access));
    
    return formatedDate = ((date.getDate() + " " + months[(date.getMonth())] + " " + date.getFullYear()));
}

//referência de site
function de_academics() {
    names();
    accessDate();
    
    //checar se possui informações importantes
    if (author.value.length === 0) {
        alert("Por favor, informe os dados solicitados.")
    } else {
        //checar se tem subtítulo
        if (subtitle.value.length !== 0){
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. ${year.value}. ${degree.value} - ${program.value}, ${university.value}, ${place.value}, ${year.value}. Disponível em: ${available.value}. Acesso em: ${formatedDate}.</p>`;
        } else {
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>. ${year.value}. ${degree.value} - ${program.value}, ${university.value}, ${place.value}, ${year.value}. Disponível em: ${available.value}. Acesso em: ${formatedDate}.</p>`;
        }
    }
}
send_academics.addEventListener('click', de_academics);
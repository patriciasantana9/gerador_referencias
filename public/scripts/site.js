console.log('site.js ok')

//marcar botão do site no aside
let a_site = document.querySelector('a.site');
a_site.style.backgroundColor = "#a53d18";
a_site.style.color = "#ffffff";

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

function accessDate() {
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    let date = access.value;
    let formatedDate = ;
    /*
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    let data = new Date("12/31/2019");
    let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
    console.log(dataFormatada);
    //saída: 31 Dez 2019
    */
}

//referência de site
function de_site() {
    names();
    date();
    
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
//marcar botão do site no aside
let a_video = document.querySelector('a.video');
a_video.style.backgroundColor = "#a53d18";
a_video.style.color = "#ffffff";

//pegar inputs
let author = document.querySelector("input#author");
let title = document.querySelector("input#title");
let subtitle = document.querySelector("input#subtitle");
let available = document.querySelector("input#available");
let publication_date = document.querySelector('input#publication');
let channel_f = document.querySelector('input#channel');

//button para função principal
let send_video = document.querySelector("button.send_video");

//partes de author
let fname = "";
let lname = "";

//extrair último sobrenome e nomes
function names () {
    if (author.value.length !== 0) {
        let full_name = author.value;
        let names = full_name.split(" ");
        for (let i = 0; i < names.length-1; i++) {
            fname += names[i] + " ";    
        }
        fname = fname.trim();
        lname = names[names.length-1].toUpperCase();
    }
    return fname, lname;
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

//gerar referência de vídeo
function de_video() {
    //resultado dos nomes
    names();
    accessDate();

    //onde será impresso
    let resultado = document.querySelector("section.resultado");

    //checar se tem todos os dados necessários
    if (title.value.length == 0 || available.value.length == 0) {
        alert('Por favor, digite as informações pedidas.');
    } else {
        //checar se tem autor
        if (author.value.length !== 0) {
            //com autor
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. YouTube, ${publication_date.value}. Disponível em: ${available.value}. Acesso em: ${formatedDate}.</p>`;
        } else {
            //sem autor
            resultado.innerHTML = `<p>${channel_f.value}. <strong>${title.value}</strong>: ${subtitle.value}. YouTube, ${publication_date.value}. Disponível em: ${available.value}. Acesso em: ${formatedDate}.</p>`;
        }
    }
}
send_video.addEventListener('click', de_video);
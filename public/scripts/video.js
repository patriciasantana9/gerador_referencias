//marcar botão do site no aside
let button_video = document.querySelector('button.video');
let a_video = document.querySelector('a.video');
button_video.style.backgroundColor = "#a53d18";
a_video.style.backgroundColor = "#a53d18";

//pegar inputs
let author = document.querySelector("input#author");
let title = document.querySelector("input#title");
let subtitle = document.querySelector("input#subtitle");
let available = document.querySelector("input#available");
let access = document.querySelector("input#access");
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
            //eliminar espaço depois da penúltima substring
            fname += names[i] + " ";    
        }
        lname = names[names.length-1].toUpperCase();
    }
    return fname, lname;
}

//formatar data: DD mes AAAA; outra função?
let access_in = access.value;

//gerar referência de vídeo
function de_video() {
    //resultado dos nomes
    names();

    //onde será impresso
    let resultado = document.querySelector("section.resultado");

    //checar se tem todos os dados necessários
    if (title.value.length == 0 || available.value.length == 0) {
        alert('Por favor, digite as informações pedidas.');
    } else {
        //checar se tem autor
        if (author.value.length !== 0) {
            //com autor
            resultado.innerHTML = `<p>${lname}, ${fname}. <strong>${title.value}</strong>: ${subtitle.value}. YouTube, ${publication_date.value}. Disponível em: ${available.value}. Acesso em: ${access_in} </p>`;
        } else {
            //sem autor
            resultado.innerHTML = `<p>${channel_f.value}. <strong>${title.value}</strong>: ${subtitle.value}. YouTube, ${publication_date.value}. Disponível em: ${available.value}. Acesso em: ${access_in} </p>`;
        }
    }
}
send_video.addEventListener('click', de_video);
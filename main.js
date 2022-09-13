function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom('#som_tecla_pom');
    }    
    contador++

    console.log(idAudio);
}

/*

// Pom -------------------------------------------------------
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

// Clap -------------------------------------------------------
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

// Tim -------------------------------------------------------
function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

// Puff -------------------------------------------------------
function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

// Splash -------------------------------------------------------
function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

// Toim -------------------------------------------------------
function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

// Psh -------------------------------------------------------
function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomClap;

// Tic -------------------------------------------------------
function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

// Tom -------------------------------------------------------
function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom; */
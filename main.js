function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let indice = 0;indice < listaDeTeclas.length;indice++) {
    const tecla = listaDeTeclas[indice];
    const instrumento = tecla.classList[1]; //seleciona o segundo atributo de tecla através da seleção no classList
    const idAudio = `#som_${instrumento}`; //preenche constante com parte de string em referencia contultada

    tecla.onclick = function () {
        tocaSom(idAudio);
    } //atribui função a cada evento .onclick nos elemento da lista de teclas.
}

/*let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }    
    contador++
}*/

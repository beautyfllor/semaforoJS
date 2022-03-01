'use strict'

const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automatico')
let idAutomatico = null

const mudarVermelho = () => semaforo.src = './img/vermelho.png'
const mudarAmarelo = () => semaforo.src = './img/amarelo.png'
const mudarVerde = () => semaforo.src = './img/verde.png'

const mudarCores = () => {
    if(mudarVerde()) {
        mudarAmarelo() 
    } else if(mudarAmarelo()) {
        mudarVermelho()
    } else {
        mudarVerde()
    }
}

const automatizar = () => {
    if(idAutomatico == null) {
        idAutomatico = setInterval(mudarCores, 500)
        automatico.textContent = 'Parar'
    } else {
        clearInterval(idAutomatico)
        idAutomatico = null
        automatico.textContent = 'Automático'
    }
}

vermelho.addEventListener('click', mudarVermelho)
amarelo.addEventListener('click', mudarAmarelo)
verde.addEventListener('click', mudarVerde)
automatico.addEventListener('click', automatizar)
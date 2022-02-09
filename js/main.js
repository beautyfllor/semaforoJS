const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automático')
let idAutomatico = null

const mudarVermelho = () => semaforo.src = './img/vermelho.png'
const mudarAmarelo = () => semaforo.src = './img/amarelo.png'
const mudarVerde = () => semaforo.src = './img/verde.png'

const mudarCores = () => {
    setTimeout(mudarVermelho, 1000)
    setTimeout(mudarAmarelo, 1000)
    setTimeout(mudarVerde, 1000)
    setTimeout(mudarAmarelo, 1000)
    setTimeout(mudarVermelho, 1000)
}

const automatizar = () => {
    if(idAutomatico == null) {
        idAutomatico = setInterval(mudarCores, 500)
    } else {
        clearInterval(idAutomatico)
        idAutomatico = null
    }
}

vermelho.addEventListener('click', mudarVermelho)
amarelo.addEventListener('click', mudarAmarelo)
verde.addEventListener('click', mudarVerde)
automatico.addEventListener('click', automatizar)
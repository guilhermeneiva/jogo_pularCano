const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const nuvens = document.querySelector('.nuvens')
const pontuacao = document.querySelector('.pontuacao')
const gameOver = document.querySelector('.telaGameOver')

let pontuacaoSegundos = 0;

function pulo() {

  mario.classList.add('pulo')

  setTimeout(() => {
    mario.classList.remove('pulo')
  }, 500);

}

const loop = setInterval(() => {

  const posicaoCano = cano.offsetLeft;
  const posicaoMario = +getComputedStyle(mario).bottom.replace('px', '');


  const posicaoNuvens = +getComputedStyle(nuvens).right.replace('px', '')


  if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80) {
    cano.style.animation = 'none'
    cano.style.left = `${posicaoCano}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${posicaoMario}px`

    mario.src = '/imagens/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    nuvens.style.animation = 'none'
    nuvens.style.right = `${posicaoNuvens}px`

    gameOver.style.display = 'block'

    clearInterval(loop)

  } else {
    pontuacaoSegundos++
    pontuacao.innerHTML = pontuacaoSegundos
    document.getElementById('mostrarPontos').innerHTML = pontuacaoSegundos
  }

}, 10);

function reniciarJogo() {
  location.reload()
}


  
document.addEventListener('keydown', pulo)



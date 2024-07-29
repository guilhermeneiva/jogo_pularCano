const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

function pulo() {
  mario.classList.add('pulo')

  setTimeout(() => {
    mario.classList.remove('pulo')
  }, 500);
}

const loop = setInterval(() => {

  const posicaoCano = cano.offsetLeft;
  const posicaoMario = +getComputedStyle(mario).bottom.replace('px', '');
  console.log(posicaoMario);

  if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80) {
    cano.style.animation = 'none'
    cano.style.left = `${posicaoCano}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${posicaoMario}px`

    mario.src = '/imagens/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop)
  }

}, 10);



document.addEventListener('keydown', pulo)


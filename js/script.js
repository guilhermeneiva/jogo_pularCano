const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

function jump() {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500);
}

setInterval(() => {

  const posicaoCano = cano.offsetLeft;
  const posicaoMario = +getComputedStyle(mario).bottom.replace('px', '');
  console.log(posicaoMario);

  if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80) {
    cano.style.animation = 'none'
    cano.style.left = `${posicaoCano}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${posicaoMario}px`

  }

}, 10);



document.addEventListener('keydown', jump)


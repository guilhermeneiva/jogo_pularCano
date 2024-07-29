const mario = document.querySelector('.mario')

function jump() {
  mario.classList.add('jump')

  setTimeout(function () {
    mario.classList.remove('jump')
  }, 500)
}

document.addEventListener('keydown', jump)
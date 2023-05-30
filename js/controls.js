export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonAdd5,
  buttonRemove5,
  buttonSoundOn,
  buttonSoundOff,
  rainSoundOn,
  rainSoundOff,
  storeSoundOn,
  storeSoundOff,
  fireSoundOn,
  fireSoundOff
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function soundOn() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
  }

  function soundOff() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
  }

function rainOn() {
  rainSoundOn.classList.add('hide')
  rainSoundOff.classList.remove('hide')
}

function rainOff() {
  rainSoundOn.classList.remove('hide')
  rainSoundOff.classList.add('hide')
}

function storeOn() {
  storeSoundOn.classList.add('hide')
  storeSoundOff.classList.remove('hide')
}

function storeOff() {
  storeSoundOn.classList.remove('hide')
  storeSoundOff.classList.add('hide')
}

function fireOn() {
  fireSoundOn.classList.add('hide')
  fireSoundOff.classList.remove('hide')
}

function fireOff() {
  fireSoundOn.classList.remove('hide')
  fireSoundOff.classList.add('hide')
}


function getMinutes() {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    return false
  }
  
  return newMinutes
}





  return {
    reset,
    play,
    pause,
    soundOn,
    soundOff,
    rainOn,
    rainOff,
    storeOn,
    storeOff,
    fireOn,
    fireOff,
    getMinutes,
  }
}
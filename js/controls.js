export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  rainSoundOn,
  rainSoundOff,
  storeSoundOn,
  storeSoundOff,
  fireSoundOn,
  fireSoundOff,
  buttonDarkMode,
  buttonLightMode,
  backGround,
  timerText,
  svg,
  soundButtonsBg
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

function darkMode() {
  buttonDarkMode.classList.toggle("hide");
  buttonLightMode.classList.toggle("hide");
  backGround.classList.toggle("darkMode");
  timerText.forEach(timerText => {
    timerText.classList.toggle('darkMode');
  });
  svg.classList.toggle("darkMode");
  soundButtonsBg.forEach(soundButtonsBg => {
    soundButtonsBg.classList.toggle('darkMode');
  });
  
  

}

function lightMode() {
  buttonLightMode.classList.toggle("hide");
  buttonDarkMode.classList.toggle("hide");
  backGround.classList.toggle("darkMode");
  timerText.forEach(timerText => {
    timerText.classList.toggle('darkMode');
  });
  svg.classList.toggle("darkMode");
  soundButtonsBg.forEach(soundButtonsBg => {
    soundButtonsBg.classList.toggle('darkMode');
  });
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
    darkMode,
    lightMode
  }
}
export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  rainSoundOn,
  storeSoundOn,
  fireSoundOn,
  buttonDarkMode,
  buttonLightMode,
  backGround,
  timerText,
  svg,
  soundButtonsBg,

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
    buttonSoundOn.classList.toggle('selected')
  }

function rainOn() {
  rainSoundOn.classList.toggle('selected')
}


function storeOn() {
  storeSoundOn.classList.toggle('selected')
}

function fireOn() {
  fireSoundOn.classList.toggle('selected')
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
    rainOn,
    storeOn,
    fireOn,
    getMinutes,
    darkMode,
    lightMode
  }
}
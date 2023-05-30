import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import sounds from "./audios.js"

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} = elements

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = sounds ()

buttonPlay.addEventListener('click', function() {
  sound.pressButton()
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function() {
  sound.pressButton()
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function() {
  sound.pressButton()
  controls.reset()
  timer.reset()
})

buttonSoundOff.addEventListener('click', function() {
  sound.pressButton()
  sound.bgAudio.play()  
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
  sound.pressButton()
  sound.bgAudio.pause()
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  sound.pressButton()
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import sounds from "./audios.js"

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonAdd5,
  buttonRemove5,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
  rainSoundOn,
  rainSoundOff,
  storeSoundOn,
  storeSoundOff,
  fireSoundOn,
  fireSoundOff
} = elements

const controls = Controls({
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

buttonSoundOn.addEventListener('click', function() {
  sound.pressButton()
  sound.forestAudio.play()  
  controls.soundOn()
  console.log("forest")
})


buttonSoundOff.addEventListener('click', function() {
  sound.pressButton()
  sound.forestAudio.pause()
  controls.soundOff()
})

rainSoundOn.addEventListener("click", function(){
  controls.rainOn()
  sound.pressButton()
  sound.rainAudio.play() 
  console.log("rain")
})

rainSoundOff.addEventListener("click", function(){
  controls.rainOff()
  sound.pressButton()
  sound.rainAudio.pause()
})

storeSoundOn.addEventListener("click", function(){
  controls.storeOn()
  sound.pressButton()
  sound.storeAudio.play() 
  console.log("store")
})

storeSoundOff.addEventListener("click", function(){
  controls.storeOff()
  sound.pressButton()
  sound.storeAudio.pause()
})

fireSoundOn.addEventListener("click", function(){
  controls.fireOn()
  sound.pressButton()
  sound.fireAudio.play() 
  console.log("fire")
})

fireSoundOff.addEventListener("click", function(){
  controls.fireOff()
  sound.pressButton()
  sound.fireAudio.pause()
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

buttonAdd5.addEventListener("click", function() {
  timer.addFiveMinutes() 
})

buttonRemove5.addEventListener("click", function() {
  timer.removeFiveMinutes()

})
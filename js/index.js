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
  minutesDisplay,
  secondsDisplay,
  rainSoundOn,
  storeSoundOn,
  fireSoundOn,
  buttonDarkMode,
  buttonLightMode,
  backGround,
  timerText,
  svg,
  soundButtonsBg,
  forestSlider,
  raiSlider,
  storeSlider,
  fireSlider
} = elements

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonAdd5,
  buttonRemove5,
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
  forestSlider,
  raiSlider,
  storeSlider,
  fireSlider
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

forestSlider.addEventListener('input', () => {sound.forestAudio.volume = forestSlider.value / 100; });
forestSlider.addEventListener("click", (event) => {event.stopPropagation();});
buttonSoundOn.addEventListener('click', function() {
  sound.pressButton()
  controls.soundOn()
  sound.forestAudio.paused ? sound.forestAudio.play() : sound.forestAudio.pause();   
})

rainSlider.addEventListener('input', () => {sound.rainAudio.volume = rainSlider.value / 100; });
rainSlider.addEventListener("click", (event) => {event.stopPropagation();});
rainSoundOn.addEventListener("click", function(){
  sound.pressButton()
  controls.rainOn()
  sound.rainAudio.paused ? sound.rainAudio.play() : sound.rainAudio.pause();   
})

storeSlider.addEventListener('input', () => {sound.storeAudio.volume = storeSlider.value / 100;});
storeSlider.addEventListener("click", (event) => {event.stopPropagation();});
storeSoundOn.addEventListener("click", function(){
  sound.pressButton()
  controls.storeOn()
  sound.storeAudio.paused ? sound.storeAudio.play() : sound.storeAudio.pause();
})

fireSlider.addEventListener('input', () => {sound.fireAudio.volume = fireSlider.value / 100; })
fireSlider.addEventListener("click", (event) => {event.stopPropagation();});
fireSoundOn.addEventListener("click", function(){
  sound.pressButton()
  controls.fireOn()
  sound.fireAudio.paused ? sound.fireAudio.play() : sound.fireAudio.pause();  
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
  sound.pressButton()
  timer.addFiveMinutes() 
})

buttonRemove5.addEventListener("click", function() {
  sound.pressButton()
  timer.removeFiveMinutes()
})

buttonDarkMode.addEventListener("click", function() {
  sound.pressButton()
  controls.darkMode()
})

buttonLightMode.addEventListener("click", function() {
  sound.pressButton()
  controls.lightMode()
})
export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forestAudio = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export")
    const rainAudio = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export")
    const storeAudio = new Audio("https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export")
    const fireAudio = new Audio("https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export")
function pressButton() {
    buttonPressAudio.currentTime = 0
    buttonPressAudio.play()
}

function timeEnd() {
    kitchenTimer.play()
}

forestAudio.loop = true
rainAudio.loop = true
storeAudio.loop = true
fireAudio.loop = true

return {
    pressButton,
    timeEnd,
    forestAudio,
    rainAudio,
    storeAudio,
    fireAudio
}
}

    

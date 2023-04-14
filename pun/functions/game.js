export function getImageRandom() {
    return Math.floor(Math.random() * 9)
}

export function timer(start, timeLeft) {
    if (typeof document !== 'undefined') {
        document.getElementById("gameStart").addEventListener("click", function () {

            start(true)
            var sec = 15
            var timer = setInterval(function () {
                if (typeof document !== 'undefined') {
                    document.getElementById('safeTimerDisplay').innerHTML = sec;
                    sec--;

                    if (sec < 0) {
                        clearInterval(timer)
                        timeLeft(false)
                    }
                }


            }, 1000)

        })

    }
}

export function isAnswer(value, timeLeft, answer, URLanswer) {
    let reader = new FileReader()
    console.log(reader.readAsText(URLanswer))
    timeLeft = false
    if (value === reader.readAsText(URLanswer)){
        answer = true
    }
}
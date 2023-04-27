export function getImageRandom() {
    return Math.floor(Math.random() * 9)
}

export function timer(start, timeLeft) {
    if (typeof document !== 'undefined') {
        start(true)
        var sec = 15
        var timer = setInterval(function () {
            if (typeof document !== 'undefined') {
                if (document.getElementById('safeTimerDisplay') != null) {
                    document.getElementById('safeTimerDisplay').textContent = sec;
                }
                sec--;

                if (sec < 0) {
                    clearInterval(timer)
                    timeLeft(false)
                }
            }
        }, 1000)
    }
}

export function isAnswer(value, timeLeft, answer, URLanswer) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URLanswer);
    xhr.responseType = 'blob';
    timeLeft(false)
    xhr.onload = function () {
        if (xhr.status === 200) {
            const reader = new FileReader();
            reader.onload = function () {
                console.log(answer)
                if (answer == reader.result){
                    value(true)
                }
            };
            reader.readAsText(xhr.response);
        } else {
            console.error('Erreur de chargement du fichier: ', xhr.statusText);
        }
    };

    xhr.send();
}



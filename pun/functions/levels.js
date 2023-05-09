export function getImageRandom() {
    return Math.floor(Math.random() * 9)
}

export function timer(start, timeLeft, image) {
    image(getImageRandom())
    if (typeof document !== 'undefined') {
        start(true)
        var sec = 30
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

export function displayIndice(URL){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.status === 200) {
            const reader = new FileReader();
            reader.onload = function () {
                document.getElementById('indice').textContent = reader.result
            };
            reader.readAsText(xhr.response);
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.send();
}

export function isAnswer(value, timeLeft, answer, URLanswer) {
    timeLeft(false)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URLanswer);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.status === 200) {
            const reader = new FileReader();
            reader.onload = function () {
                if(value == reader.result){
                    answer(true)
                }
            };
            reader.readAsText(xhr.response);
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.send();
}

export function nextRound(start, timeLeft, checkAnswer, answer, setRound){
    start(false)
    timeLeft(true)
    answer('')
    checkAnswer(false)
    round++
    if(round >= 3){
        setRound(false)
    }
}

export function setPoints(level){
    var points = 1
    if(level == "medium"){
        points = 2
    } else if (level == "hard"){
        points = 3
    }
    Points += points
}

export var Points = 0
var round = 0
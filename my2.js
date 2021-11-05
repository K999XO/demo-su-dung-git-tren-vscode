var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var longbreak = document.getElementById('longbreak');
var breaktime = document.getElementById('breaktime');
let x = document.getElementById("myAudio");

var counter = document.getElementById('counter');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var lm = document.getElementById('l_minutes');
var ls = document.getElementById('l_seconds');

//store a reference to a timer variable
var startTimer;
var breakTimer;
var longbreakTimer;

//start to work
start.addEventListener('click', function () {
    if (startTimer == undefined) {
        startTimer = setInterval(timer, 1000);
    }
    playAudio()
}
)

//reset the time
reset.addEventListener('click', function () {
    defaultWork();

    defaultBreak();

    defaultLong();

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
    breaktime = undefined;
    longbreakTimer = undefined;
})
//Back to back
function Back() {
    defaultWork();

    defaultBreak();

    defaultLong();
}

// function reset each time
function defaultWork() {
    wm.innerText = 25;
    ws.innerText = 00;
}
function defaultBreak() {
    bm.innerText = 5;
    bs.innerText = 00;
}
function defaultLong() {
    lm.innerText = 15;
    ls.innerText = 00;
}

stop.addEventListener('click', function () {
    stopInterval();

    startTimer = undefined;
    breaktime = undefined;
    longbreakTimer = undefined;
})
//Long break time button
longbreak.addEventListener('click', function () {
    //
    if (longbreakTimer == undefined) {
        longbreakTimer = setInterval(longbreakTime, 1000)
    }
}
)
//Break time button
breaktime.addEventListener('click', function () {
    if (breakTimer == undefined) {
        breakTimer = setInterval(breakTime, 1000);
        defaultWork();
    }
})
//Start Timer Function
function timer() {
    //Work Timer Countdown
    if (counter.innerText != 5) {
        if (ws.innerText != 0) {
            ws.innerText--;
        } else if (wm.innerText != 0 && ws.innerText == 0) {
            ws.innerText = 59;
            wm.innerText--;
        }
    }

    //Break Timer Countdown
    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }
    //Long break on set
    if (counter.innerText == 5) {
        //console.log(ls.innerText);
        if (ls.innerText != 0) {
            ls.innerText--;
        } else if (lm.innerText != 0 && ls.innerText == 0) {
            ls.innerText = 59;
            lm.innerText--;
            console.log(ls.innerText)
            //}
        }
    }
    //Increment Counter by one if one full cycle is completed
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        defaultWork();
        defaultBreak();
        defaultLong();

        document.getElementById('counter').innerText++;

        changeImage()
    }

    if (counter.innerText == 5) {
        if (lm.innerText == 0 && ls.innerText == 0) {
            counter.innerText = 0;

        }
    }
}
//Stop Timer Function
function stopInterval() {
    clearInterval(startTimer);
    clearInterval(breakTimer);
    clearInterval(longbreakTimer);
}
var alerted = false
//If click "Break Time"
function breakTime() {
    clearInterval(startTimer);
    startTimer = undefined;
    if (bs.innerText != 0) {
        bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
        bs.innerText = 59;
        bm.innerText--;
    } else if (bm.innerText == 0 && bs.innerText == 0) {
        timer()
        counter.innerText + 1
    }
}


//If click "Long Break"
function longbreakTime() {
    if (ls.innerText != 0) {
        ls.innerText--;
    } else if (lm.innerText != 0 && ls.innerText == 0) {
        ls.innerText = 59;
        lm.innerText--;
    } else {
        Back();
        stopInterval();
        alert('Tea Time Over')
    }
}

//change image according to counter
function changeImage() {
    if (counter.innerText == 1) {
        document.getElementById("imgClickAndChange").src = "summer.PNG";
    }
    if (counter.innerText == 2) {
        document.getElementById("imgClickAndChange").src = "fall.PNG";
    }
    if (counter.innerText == 3) {
        document.getElementById("imgClickAndChange").src = "winter.PNG";
    }
    if (counter.innerText == 4) {
        document.getElementById("imgClickAndChange").src = "baby.jpg";
    }
    if (counter.innerText == 5) {
        document.getElementById("imgClickAndChange").src = "download.png";
    }
}
//play music

function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
    alert('Audio is pause, click "Play audio to resume"')
}


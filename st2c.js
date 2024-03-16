var time = 0;
var running = 0;

function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("start").innerHTML = "Pause";
    } else {
        running = 0;
        document.getElementById("start").innerHTML = "Resume";
    }
}

function reset() {
    running = 0;
    time = 0;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("display").innerHTML = "00:00:00";
}

function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var tenths = time % 10;
            document.getElementById("display").innerHTML = mins + ":" + secs + ":" + tenths;
            increment();
        }, 100);
    }
}

window.onload = function() {
    document.getElementById("start").addEventListener("click", startPause);
    document.getElementById("reset").addEventListener("click", reset);
};

const duration = document.querySelector('#stopwatchDuration');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let lap = document.getElementById('lap');
let reset = document.getElementById('reset');
let laps = document.getElementById('laps');
let hrs = 0, mins = 0, sec = 0, ms = 0, timeInterval;


start.onclick = () => {
    timeInterval = setInterval(() => {
        ms++;
        if (ms == 100) {
            sec++;
            ms = 0;
        }
        if (sec == 60) {
            mins++;
            sec = 0;
        }
        if (mins == 60) {
            hrs++;
            mins = 0;
        }
        duration.innerHTML = `${zeropad(hrs)}:${zeropad(mins)}:${zeropad(sec)}:${zeropad(ms)}`;

    }, 10);
    start.setAttribute('style', "display:none");
    stop.setAttribute('style', "display:block");
    lap.setAttribute('style', "display:block");
    reset.setAttribute('style', "display:none");
    lap.removeAttribute("disabled");
};

const zeropad = (num) => {
    return String(num).padStart(2, "0")
};

let count = 0;

lap.onclick = () => {
    count++;
    let li = document.createElement("li");
    li.innerHTML = `${"#" + count} - ${zeropad(hrs)}:${zeropad(mins)}:${zeropad(sec)}:${zeropad(ms)}`;
    laps.appendChild(li);
    laps.scroll({ top: laps.scrollHeight, behavior: "smooth" });
};

stop.onclick = () => {
    clearInterval(timeInterval);
    lap.setAttribute("style", "display:none");
    reset.setAttribute('style', "display:block");
    start.setAttribute('style', "display:block");
    start.innerHTML = "Resume";
    stop.setAttribute("style", "display:none");

};

reset.onclick = () => {
    laps.innerHTML = "";
    hrs = mins = sec = ms = count = 0;
    clearInterval(timeInterval);
    duration.innerHTML = "00:00:00:00";

    start.innerHTML = "start";
    lap.setAttribute("style", "display:block");
    lap.setAttribute("disabled", true);
    reset.setAttribute("style", "display:none");
    start.setAttribute("style", "display:block");
    stop.setAttribute("style", "display:none");
};



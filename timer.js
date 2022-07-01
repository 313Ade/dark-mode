const newYears = '1-1-2023';
const days_ = document.getElementById('days')
const hours_ = document.getElementById('hours')
const minutes_ = document.getElementById('minutes')
const seconds_ = document.getElementById('seconds')

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    let minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds % 60)

    console.log(days, hours, minutes, seconds)

    days_.innerHTML = formatTime(days);
    minutes_.innerHTML = formatTime(minutes);
    hours_.innerHTML = formatTime(hours);
    seconds_.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

setInterval(() => {
    countDown()
}, 1000);




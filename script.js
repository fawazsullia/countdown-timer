const targetDate = '17 Dec 2021';

const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minsCount = document.getElementById("mins");
const secsCount = document.getElementById("secs");


function countDownTimer() {
    const target = new Date(targetDate);
    const todaysdate = new Date();
const diffInSeconds = (target - todaysdate)/1000;
const days = Math.floor(diffInSeconds/(60*60*24));
const hours = Math.floor((diffInSeconds/(60*60))-(days*24));
const mins = Math.floor((diffInSeconds/60))%60;
const secs = Math.floor(diffInSeconds)%60;
daysCount.innerHTML = days;
hoursCount.innerHTML = hours;
minsCount.innerHTML = mins;
secsCount.innerHTML = secs;
}
countDownTimer();
setInterval(countDownTimer, 1000);

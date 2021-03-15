// JS
let dateTimeCountdown = new Date(2021, 2, 15, 20, 58).getTime();
let element = document.querySelector('.countdown');
countdownCounter(dateTimeCountdown, element);

function countdownCounter(dateTimeCountdown, element) {
    let countdownCounter = setInterval(() => {
        let dateTimeNow = new Date().getTime();
        let dateTimeDifference = dateTimeCountdown - dateTimeNow;
        let remainingDays = Math.floor(dateTimeDifference / (1000 * 60 * 60 * 24));
        let remainingHours = Math.floor((dateTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let remainingMinutes = Math.floor((dateTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let remainingSeconds = Math.floor((dateTimeDifference % (1000 * 60)) / 1000);

        element.innerHTML = remainingDays + ' Days ' + remainingHours + ' Hours ' + remainingMinutes + ' Minutes ' + remainingSeconds + ' Seconds';
        if(dateTimeDifference < 0) {
            clearInterval(countdownCounter);
            element.innerHTML = "EXPIRED";
        }
    }, 1000);
}

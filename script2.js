
const targetDate = new Date('2024-11-13T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        document.getElementById('countdown').innerText = "O prazo expirou!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();


const countdownInterval = setInterval(updateCountdown, 1000);
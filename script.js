let userName = localStorage.getItem('userName');

if (!userName) {
    userName = prompt("What's your name?");
    if (userName) {
        localStorage.setItem('userName', userName);
    }
}

document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        window.location.href = "https://www.ecosia.org/search?q=" + this.value;
    }
});

document.getElementById("changeName").addEventListener("click", () => {
    const newName = prompt("Enter your new name:");
    if (newName) {
        userName = newName;
        localStorage.setItem('userName', newName);
        updateGreeting();
    }
});

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("clock").textContent = timeString;
}

function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hours = now.getHours();
    let greetingMessage = "";

    if (hours >= 6 && hours < 12) {
        greetingMessage = `Good morning, ${userName}! 🌅`;
    } else if (hours >= 12 && hours < 18) {
        greetingMessage = `Good afternoon, ${userName}! ☀️`;
    } else if (hours >= 18 && hours < 24) {
        greetingMessage = `Good evening, ${userName}! 🌙`;
    } else {
        greetingMessage = `Good night, ${userName}! 😴`;
    }

    greetingElement.innerText = greetingMessage;
}

updateGreeting();
setInterval(updateClock, 1000);
updateClock();


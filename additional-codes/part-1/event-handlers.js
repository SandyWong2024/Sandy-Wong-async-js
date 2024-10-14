document.querySelector("#show-time").addEventListener("click", () => {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('demo').innerHTML = `The time is ${currentTime}`;
});
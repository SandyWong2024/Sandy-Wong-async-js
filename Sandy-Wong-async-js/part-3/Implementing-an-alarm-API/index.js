const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

//Example 1: Wrapping setTimeout()

function setAlarm(){
    setTimeout(() => {
        output.textContent = "Wake up!";
    }, 1000);
}

button.addEventListener("click", setAlarm);


//Example 2: The Promise() constructor
/*
function alarm(person, delay){
    return new Promise((resolve, reject) => {
        if(delay<0){
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}
*/
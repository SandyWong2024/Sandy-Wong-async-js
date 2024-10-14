var worker;

function startWorker(){
    var number = document.getElementById('number').value;
    if(typeof (Worker) !== "undefined"){
        if(typeof (worker) == "undefined"){
            worker = new Worker("worker.js");
        }
        worker.postMessage(number);
        worker.onmessage = function(event){
            document.getElementById("result").innerHTML = event.data;
        };
    } else{
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}
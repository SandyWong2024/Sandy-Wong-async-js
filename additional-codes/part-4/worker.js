self.onmessage = function(event){
    var n = event.data;
    var result = fibonacci(n);
    self.postMessage(result);
};

function fibonacci(n){
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}
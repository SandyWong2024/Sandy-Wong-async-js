//Simple version

/*
function multiplyBy2(number){
    return number * 2;
}

function multiplyBy4(number){
    return number * 4;
}

function multiplyBy8(number){
    return number * 8;
}

function multiplyAll(){
    let product = 1;
    product = multiplyBy2(product);
    product = multiplyBy4(product);
    product = multiplyBy8(product);
    console.log(`result: ${product}`);
}

multiplyAll();
*/

//Callback Version

function multiplyBy2(number, callback){
    const product = number * 2;
    callback(product);
}

function multiplyBy4(number, callback){
    const product = number * 4;
    callback(product);
}

function multiplyBy8(number, callback){
    const product = number * 8;
    callback(product);
}

function multiplyAll(){
    multiplyBy2(1, (product1) => {
        multiplyBy4(product1, (product2) => {
            multiplyBy8(product2, (product3) => {
                console.log(`result: ${product3}`);
            });
        });
    });
}

multiplyAll();
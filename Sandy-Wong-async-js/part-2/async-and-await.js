//Example 1
async function fetchProducts(){
    try{
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0].name);
    }
    catch(error){
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();

//Example 2
/*
async function fetchProducts(){
    try{
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
        console.log(data[0].name);
    }
    catch(error){
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts();
console.log(promise[0].name);
*/

async function fetchProducts(){
    const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

const promise = fetchProducts();
promise
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });

//Example 3
/*
try {
    const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
} catch (error) {
    console.error(`Could not get products: ${error}`);
    throw error;
*/
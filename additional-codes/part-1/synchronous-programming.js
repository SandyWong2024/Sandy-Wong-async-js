//Example 1
const pet = "fish";
const myPet = `My pet is a ${pet}.`;
console.log(myPet);

//Example 2
function favoriteFruit(fruit){
    return `My favorite fruit is ${fruit}.`
}

//Long-running synchronous function
const fruit = "strawberry";
const favStatement = favoriteFruit(fruit);
console.log(favStatement);

function calculateFactorials(n){
    let result = 1;
    for(let i=2; i<=n; i++){
        result *= i;
        console.log('Current Result: ', result)
    }
    return result;
}

//The higher the number, the longer it takes to finish calculating.
console.log(calculateFactorials(10))
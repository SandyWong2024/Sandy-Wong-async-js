async function fetchData(){
    try{
        const [response1, response2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/comments')
        ]);

        if(!response1.ok || !response2.ok){
            throw new Error("Network response was not OK");
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        document.getElementById('content').innerHTML =
            `<h2>Posts</h2>
            <pre>${JSON.stringify(data1, null, 2)}</pre>
            <h2>Comments</h2>
            <pre>${JSON.stringify(data2, null, 2)}</pre>`;
    }
    catch(error){
        console.error("There has been a problem with your fetch operation: ", error);
    }
}

fetchData();

//Chaining Promises example code

/*
let promise = new Promise(function (resolve, reject){
    setTimeout(() => resolve(1), 1000);
})

promise.then(function (result){
    alert(result);
    return result * 2;
}).then(function (result){
    alert(result);
    return result * 2;
}).then(function (result) {
    alert(result);
    return result * 2;
});
*/
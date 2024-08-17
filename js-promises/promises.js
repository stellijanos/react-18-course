const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // resolve("Operation successful!");
        reject("Operation failed!");
    }, 2000);

});


promise
.then((result) => {
    console.log(result);
    return result + ' Janos' // return value for the second then
})
.then(result => {
    console.log(result); // result what the previous then returned
})
.catch(error => {
    console.error(error);
})

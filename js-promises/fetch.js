fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(res => {
    console.log(res);
})
.catch(err => {
    console.error(err);
})
.finally(() => console.log('Janos'));

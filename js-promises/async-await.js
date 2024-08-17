
function fetchData() {

    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => console.log('Janos legyen'));
}

async function fetchDataAsync() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await res.json();
        console.log(json);
    } catch(err) {
        console.error(err);
    }
}


fetchDataAsync()
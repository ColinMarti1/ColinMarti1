export const getTodo = (fn, errorFn) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => fn(todos))
        .catch(e => errorFn(e))
}

export const getAtodo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
}


export const getAllTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));
}


export const createTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export const updateTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export const deleteTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}
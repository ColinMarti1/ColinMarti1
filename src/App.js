import './App.css';
import {useEffect, useState} from "react";
import {getTodo} from "./AppService";

function App() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        getTodo((todos) => setTodos(todos))
    }, [])
    return (
        <div className="App">
            <h2>Todos: {todos.length}</h2>
            <h3>Erledigt: {todos.filter(todo => todo.completed === true).length}</h3>
            <h3>Zu Erledigen: {todos.filter(todo => todo.completed === false).length}</h3>

            <table>
                <thead>
                <td>userId</td>
                <td>Id</td>
                <td>Title</td>
                <td>Erledigt</td>
                </thead>
                <tbody>
                {todos.map(todo =>
                    <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td style={{background: (todo.completed === true ? "green" : "red")}}></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default App;

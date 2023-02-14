import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";


type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {


    const [todos, setTodos] = useState<TodosType[]>([])

    useEffect(() => myFetch(), [])

    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }
    const showUpHandler = () => {
        myFetch()
    }

    const deleteUpHandler = () => {
        setTodos([])
    }

    const mappedTodos = todos.map(t => {
        return (
            <div className="App">
                <li key={t.id}>
                    <span>{t.id}</span>
                    <span>{t.title}</span>
                    <input type="checkbox" checked={t.completed}></input>
                </li>
            </div>
        )
    })
    return (
        <div className="App">
            <Button name={"Show up"} callBack={showUpHandler}/>
            <Button name={"Delete"} callBack={deleteUpHandler}/>
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;

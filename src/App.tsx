import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperInput} from "./components/SuperInput";


type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {


    const [todos, setTodos] = useState<TodosType[]>([])
    const [newTitle, setNewTitle] = useState<string>('')

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

    const addNewTitleHandler = () => {
        const newTodo:TodosType = {
            completed: false,
            id: todos.length + 1,
            title: newTitle,
            userId: 77877
        }
        setTodos([newTodo, ...todos])
        setNewTitle('')
    }
    return (
        <div className="App">
            <SuperButton name={"Show up"} callBack={showUpHandler}/>
            <SuperButton name={"Delete"} callBack={deleteUpHandler}/>
            <SuperButton name={"+"} callBack={addNewTitleHandler}/>
            <SuperInput newTitle={newTitle}
                        setNewTitle={setNewTitle}
            />
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;

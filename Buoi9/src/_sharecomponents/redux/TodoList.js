import { useEffect, useState } from 'react';
import store from './store.js';
import Todo from './Todo.js';

function TodoList() {
    const [todos, setTodos] = useState(store.getState().todo.todos);

    useEffect(() => {
        store.subscribe(() => {
            setTodos(store.getState().todo.todos)
        })
    }, [])

    return (
        <ul>
            {
                todos.map((item, index) => {
                    return (
                        <Todo key={index} todo={item} />
                    )
                })
            }
        </ul>
    )
}

export default TodoList;
import store from "./store";
import * as actionTypes from './constants';
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

//console.log(store);

function DemoRedux() {

    const increment = () => {
        store.dispatch({
            type: actionTypes.COUNT_INCREMENT
        })
    }
    
    const decrement = () => {
        store.dispatch({
            type: actionTypes.COUNT_DECREMENT
        })
    }

    console.log('store: ')
    console.log(store)

    const [counter, setCounter] = useState(store.getState().value)

    console.log('type of setCounter: ');
    console.log(typeof setCounter)

    const updateData  = () => {
        //store.subscribe(() => {console.log(store.getState().value)})
        store.subscribe(() => {
            setCounter(store.getState().value)
        })
    }

    useEffect(() => {
        //updateData();

        store.subscribe(() => {
            setCounter(store.getState().value)
        })
    }, [])
  
    return (
        <div>
            {/* <p>Value from states of the store: {store.getState().value}</p> */}
            <p>Value from states of the store: {counter}</p>
            <button style={{cursor:'pointer'}} onClick={increment}>Increment</button>
            <button style={{cursor:'pointer'}} onClick={decrement}>Decrement</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h1>Combine reducers</h1>
            <TodoList/>
            <AddTodo />
        </div>
    )
}

export default DemoRedux;
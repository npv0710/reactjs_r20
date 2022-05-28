import { useEffect, useState } from "react"
import store from "./store";
import * as actionTypes from './constants'

const DemoRedux = (props) => {

    //const [count, setCount] = useState(0);

    const [count, setCount] = useState(store.getState().count.value);

    const [flag, setFlag] = useState(false)

    // console.log(store)
    // console.log(store.getState())

    // console.log('count received from store: ' + count)

    const increment = (e) => {
        store.dispatch({
            type: actionTypes.COUNT_INCREMENT,
            //payload: 'hello count reducer'
        })
    }

    const decrement = () => {
        store.dispatch({
            type: actionTypes.COUNT_DECREMENT,
            //payload: null
        })

        setFlag(!flag)
    }
    
    useEffect(() => {
        store.subscribe(() => {
            setCount(store.getState().count.value)
        })
        console.log('component rerender & did mount...');
    }, [])

    // const udpateData = () => {
    //     store.subscribe(() => {
    //         setCount(store.getState().count.value)
    //     })
    // }

    // udpateData()

    return(
        <div>
            <p>Value from states of the store: {count}</p>
            <button style={{cursor: 'pointer'}} onClick={increment}>Increment</button>
            <button style={{cursor: 'pointer'}} onClick={decrement}>Decrement</button>
        </div>
    )
}

export default DemoRedux;
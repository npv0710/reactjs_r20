import { useState } from "react"
import store from "./store";
import actions from "./actions";

const AddTodo = (props) => {
    const [inputValue, setInputValue] = useState('');

    const  onChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    const _onClick = () => {
        store.dispatch(actions.addTodo(inputValue));
        setInputValue('');
    }

    return(
        <div style={{width: '300px', height: '30px'}}>
            <input
                style={{height: '35px'}}
                onChange={onChangeInput}
                value={inputValue}
            />
            <button onClick={_onClick}>
                Add todo
            </button>
        </div>
    )
}

export default AddTodo;
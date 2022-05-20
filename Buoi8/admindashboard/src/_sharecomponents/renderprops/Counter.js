import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render () {
        return (
            <>
                { 
                    this.props.render({
                        count: this.state.count,
                        increment: this.increment,
                        decrement: this.decrement
                    })
                } 
            </>
        )
    }
}

export default Counter
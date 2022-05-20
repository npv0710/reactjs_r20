import react, { Component } from 'react'
import './DemoClassComponent.css'

class DemoClassComponent extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            fontColor: 'red',
            fontSize: '16px',
            count: 0,
            flagShowh3: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick () {
        // console.log('clicked...')
        // console.log(this)
        // this.setState({
        //     fontColor: 'green',
        // })
        // this.setState({
        //     count: this.state.count ++
        // })

        this.setState({
            flagShowh3: !this.state.flagShowh3
        })
    }

    render() {
        return (
            <div className='demo demo2'>
                <h1 style={{color: this.state.fontColor}}>Demo class component</h1>
                <h3 className={this.state.flagShowh3 ? 'h3': 'hide'}>Welcome: {this.props.username}</h3>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default DemoClassComponent
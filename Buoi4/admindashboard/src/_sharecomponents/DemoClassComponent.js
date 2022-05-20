import React, { Component } from 'react'
import './DemoClassComponent.css'

class DemoClassComponent extends React.Component {
    constructor(props) {
        //console.log(props)
        super(props)
        this.state = {
            fontColor: 'red',
            fontSize: '16px',
            count: 0,
            flagShowh3: true
        }
        this.handleClick = this.handleClick.bind(this)

        this.myRef = React.createRef()
        this.myRef.current = this.state.count

        console.log('initial props: ')
      
    }

   
    
    handleClick () {
        // console.log('clicked...')
        // console.log(this)
        // this.setState({
        //     fontColor: 'green',
        // })

        this.setState({
            count: this.state.count + 1
        }, function() {
            console.log('state has just changed...')
            //this.props.clickButton(this.state.count)
        })

        //this.props.clickButton(this.state.count)
        //this.setState(({count}) => count ++)

        //this.myRef.current ++

        //this.props.clickButton(this.state.count)

        // this.setState({
        //     flagShowh3: !this.state.flagShowh3
        // })
    }

    componentWillMount() {
        console.log('component demo will mount...')
    }

    componentDidMount() {
        console.log('component demo did mount...')
    }

    componentWillUnmount() {
        console.log('component demo will unmount...')
    }

    componentWillReceiveProps() {
        console.log('Component will receive props...')
        //console.log(this.props.user)
    }

    shouldComponentUpdate() {
        // if (this.props.user.password === '111111')
        //     return true
        // else return false
        return true
    }

    componentWillUpdate() {
        console.log('Component will update before received props...')
        //console.log(this.props.user)
    }

    componentDidUpdate() {
        console.log('Component did update after received props...')
        //console.log(this.props.user)
    }


    render() {
        console.log('component demo render...')
        //console.log(this.props)
        //console.log('count state: ' + this.state.count)
        return (
            <div className='demo demo2'>
                {/* <h1 style={{color: this.state.fontColor}}>Demo class component</h1>
                <h3 className={this.state.flagShowh3 ? 'h3': 'hide'}>Welcome: {this.props.username}</h3>
                <button style={{cursor:'pointer'}} onClick={this.handleClick}>Click me</button>
                <h3>count state: {this.state.count}</h3>
                <h3>username: {this.props.user.username}</h3>
                <h3>password: {this.props.user.password}</h3> */}
            </div>
        )
    }
}

export default React.memo(DemoClassComponent)

//export default DemoClassComponent
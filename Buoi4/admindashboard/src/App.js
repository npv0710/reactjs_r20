import logo from './logo.svg';
import './App.css';
import DemoClassComponent from './_sharecomponents/DemoClassComponent';
import CustomInput from './_sharecomponents/custominput/CustomInput';

import FormGroup from './_sharecomponents/formgroup/FormGroup';
import { useState, useMemo, useCallback} from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home/Home';
import SingnUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';

const changeNumberPlusFive = (num) => {
    console.log('number: ' + num)
    return num + 5;
}

function App() {
    const [showDemoClassComponent, setShowDemoClassComponent] = useState(true)

    const [user, setUser] = useState({
        username: 'Nguyen Van A',
        password: '111111'
    })

    const [number, setNumer] = useState(0)

    let changeNumber = useMemo(() => changeNumberPlusFive(number), [])

    let [flag, setFlag] = useState(false)

    useMemo(() => {
        // componentWillMount events
        console.log('App component will mount...');
    },[])

    const _onClick = (e) => {
        //setShowDemoClassComponent(!showDemoClassComponent)
        e.preventDefault();
        //setUser({...user, username: 'Tran Van B'});
        //setNumer(Math.floor(Math.random() * 10))
        //setNumer(v => v + 1)
        setFlag(!flag)
    }

    const handleClickButton = useCallback((count) => {
        console.log('data received from child component: ');
        console.log(count);
    }, [])

    console.log('App componet render...');

    return ( <
        div className = "App">
        <h1>{user.username}</h1>
        <h1>Random number: {number}</h1>
        <h2>Current plus five: {changeNumber}</h2>
            {
                showDemoClassComponent && 
                <DemoClassComponent 
                    username='Nguyen Van A'
                    age={25}
                    clickButton={handleClickButton}
                    //user={user}
                />
            }

            <button style={{cursor:'pointer'}} onClick={_onClick}>Toggle Componet</button>
            
            <FormGroup width='250px'>
                <CustomInput
                    label='Username *'
                    type='text'
                    name='username'
                    value=''
                />
            </FormGroup>

            <FormGroup width='250px'>
                <CustomInput
                    label='Password *'
                    type='password'
                    name='password'
                    value=''
                />
            </FormGroup>

             <FormGroup width='250px'>
                <CustomInput
                    label='Email *'
                    type='email'
                    name='email'
                    value=''
                />
            </FormGroup>

             <FormGroup width='250px'>
                <CustomInput
                    label='First Name *'
                    type='text'
                    name='firstName'
                    value=''
                />
            </FormGroup>
        </div>
    );

    // localStorage.setItem('login', false);
    // const isLoggedIn = localStorage.getItem('login');
    // if (isLoggedIn === 'false') {
    //     return (
    //         <div className='App'>
    //             <Router>
    //                 <Switch>
    //                     <Route path="/sign-in" component={SignIn} />
    //                     <Route path="/sign-up" component={SingnUp} />
    //                     {/* <Redirect from="/" to="/sign-up" /> */}
    //                 </Switch>
    //             </Router>
    //         </div>
    //     )
    // }

    // return (
    //     <div className='App'>
    //         <Router>
    //             <Switch>
    //                 <Route path="/sign-in" component={SignIn}/>
    //                 <Route path="/sign-up" component={SingnUp} />
    //                 <Route path="/" component={Home} />
    //             </Switch>
    //         </Router>
    //     </div>
    // );
}

export default App;
import logo from './logo.svg';
import './App.css';
import DemoClassComponent from './_sharecomponents/DemoClassComponent';
import CustomInput from './_sharecomponents/custominput/CustomInput';
import FormGroup from './_sharecomponents/formgroup/FromGroup';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

function App() {
    
    const handleClickButton = (count) => {
        console.log('data received from child component: ')
        console.log(count)
    }

    // return ( 
    //     <div className = "App">
    //         <FormGroup width='350px'>
    //             <CustomInput
    //                 label='Username *'
    //                 type='text'
    //                 name='username'
    //                 value=''
    //             />
    //         </FormGroup>
    //         <FormGroup width='350px'>
    //             <CustomInput
    //                 label='Password *'
    //                 type='password'
    //                 name='password'
    //                 value=''
    //             />
    //         </FormGroup>
    //     </div>
    // );
    localStorage.setItem('login', false)
    const isLoggedIn = localStorage.getItem('login')
    if (isLoggedIn === 'false') {
        return (
            <div className='App'>
                <Router>
                    <Switch>
                        <Route exact path="/sign-in" component={Signin} />
                        <Route exact path="/sign-up" component={Signup} />
                        <Redirect from="/" to="/sign-in" />
                    </Switch>
                </Router>
            </div>
        )
    }

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/sign-in" component={Signin}/>
                    <Route path="/sign-up" component={Signup} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
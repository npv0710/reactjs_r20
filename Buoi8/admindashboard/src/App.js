import logo from './logo.svg';
import './App.css';
import DemoClassComponent from './_sharecomponents/DemoClassComponent';
import CustomInput from './_sharecomponents/custominput/CustomInput';
import FormGroup from './_sharecomponents/formgroup/FromGroup';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomeTest from './pages/home/HomeTest';

import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';

import WithLoading from './_sharecomponents/HOCComponent/loading/WithLoading';

const SignupWithLoading = WithLoading(Signup);
const SigninWithLoading = WithLoading(Signin);


function App() {
    
    const handleClickButton = (count) => {
        console.log('data received from child component: ')
        console.log(count)
    }
    localStorage.setItem('login', true)

    const isLoggedIn = localStorage.getItem('login')

    console.log('isLoggedIn: ' + isLoggedIn)

    if (isLoggedIn === 'false') {
        return (
            <div className='App'>
                <Router>
                    <Switch>
                        {/*
                        <Route path="/sign-in" component={Signin}/>
                         <Route path="/sign-up" component={Signup} /> */}
                        <Route path="/sign-in" component={SigninWithLoading}/>
                        <Route path="/sign-up" component={SignupWithLoading} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <Redirect from="/" to="/sign-in" />
                        {/* <Route exact path="/" component={Home} /> */}
                    </Switch>
                </Router>
            </div>
        )
    }

    return (
        <div className='App'>
            <Router>
                <Switch>
                    {/* <Route path="/sign-in" component={Signin}/>
                    <Route path="/sign-up" component={Signup} /> */}
                    <Route path="/sign-in" component={SigninWithLoading}/>
                    <Route path="/sign-up" component={SignupWithLoading} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/" component={HomeTest} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
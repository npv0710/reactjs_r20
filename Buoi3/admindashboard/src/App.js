import logo from './logo.svg';
import './App.css';
import DemoClassComponent from './_sharecomponents/DemoClassComponent';
import CustomInput from './_sharecomponents/CustomInput';

import FormGroup from './_sharecomponents/formgroup/FormGroup';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Home from './pages/Home';

function App() {
    
    const handleClickButton = (count) => {
        console.log('data received from child component: ')
        console.log(count)
    }
    return ( 
        <div className = "App">
            {/* <DemoClassComponent 
                username='Nguyen Van A'
                 age={25}
                clickButton={handleClickButton}
            /> */}

            <p>Demo router</p>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/productlist'>Product List</Link>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/productlist' component={ProductList} />
            </Switch>
        </div>
    );
}

export default App;
import logo from './logo.svg';
import './App.css';
import DemoClassComponent from './_sharecomponents/DemoClassComponent';
import CustomInput from './_sharecomponents/CustomInput';

import FormGroup from './_sharecomponents/formgroup/FormGroup';

function App() {
    
    const handleClickButton = (count) => {
        console.log('data received from child component: ')
        console.log(count)
    }
    return ( <
        div className = "App">
            
            <DemoClassComponent 
                username='Nguyen Van A'
                age={25}
                clickButton={handleClickButton}
            />
            
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

            {/* <CustomInput
                label='Password'
                type='password'
                name='password'
                value=''
            /> */}
        </div>
    );
}

export default App;
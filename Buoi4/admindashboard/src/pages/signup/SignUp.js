import { useState } from "react";
import styled from "styled-components";

import FormGroup from "../../_sharecomponents/formgroup/FormGroup";

import CustomInput from "../../_sharecomponents/custominput/CustomInput";

import { MdGroupAdd } from 'react-icons/md'

import { Link } from 'react-router-dom'

const SingUpContainer = styled.div `
    max-width: 400px;
    margin: auto;
    margin-top: 1.5rem;

.register-header h1 {
    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
}

.register-avatar {
    width: 40px;
    height: 40px;
    background-color: #9c27b0;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.register .btn-submit {
    text-align: center;
    margin-top: 25px;
}

.name {
    display: flex;
}

.name .form-group:first-child{
    margin-right: 5px;
}

.name .form-group:last-child{
    margin-left: 5px;
}

.register-main .group-link {
    flex-direction: row-reverse;
}

.group-link {
    display: flex;
    justify-content: space-between;
    margin-top: 1.35rem;
}

.group-link a {
    color: #1976d2;
    font-weight: 400;
    letter-spacing: 0.01em;
    font-size: 0.875rem;
}

.copy-right {
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: 0.01071em;
    text-align: center;
    color: rgba(0, 0, 0, .6);
    margin-top: 4rem;
}

.copy-right a {
    color:rgba(0, 0, 0, .6);
}
`;

const _onChangeInput = () => {

}

const SignUp = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        role: ''
    })   

    return(
        <SingUpContainer>
            <div className='register-header'>
                <div className='register-avatar'>
                    <MdGroupAdd />
                </div>
                <h1>Sign up</h1>
            </div>
            <form className='register-main'>
                <div className='name'>
                    <FormGroup>
                        <CustomInput type="text" name="firstName" label="&nbsp;First Name *"
                            value={user.firstName}
                            onChangeInput={_onChangeInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <CustomInput type="text" name="lastName" label="Last Name *"
                            value={user.lastName}
                            onChangeInput={_onChangeInput}
                        />
                    </FormGroup>
                </div>
                <FormGroup>
                    <CustomInput type="text" name="username" label="Username *"
                        value={user.username}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="email" name="email" label="&nbsp;Email *"
                        value={user.email}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="password" name="password" label="Passwrod *"
                        value={user.password}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="role" name="role" label="Role *"
                        value={user.role}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <div className='btn-submit'>
                    {/* <Button 
                        type="submit" 
                        color="#fff" 
                        width="100%" uppercase
                        onClick={handleSubmit}
                    >
                        Sign up
                    </Button> */}
                </div>
                <div className='group-link'>
                    <Link to="/sign-in">Already have an account? Sign in</Link>
                </div>
                <p className='copy-right'>Copyright &copy; &nbsp;
                    <Link to="/">Your Website</Link>&nbsp;2022
                </p>
            </form>
        </SingUpContainer>
    )
}

export default SignUp;
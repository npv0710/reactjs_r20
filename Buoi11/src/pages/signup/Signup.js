import FormGroup from "../../_sharecomponents/formgroup/FromGroup";
import CustomInput from "../../_sharecomponents/custominput/CustomInput";

import styled from 'styled-components'

import { MdGroupAdd } from 'react-icons/md'

import CustomButton from "../../_sharecomponents/custombutton/CustomButton";

import { Link } from "react-router-dom";
import { useState } from "react";

import userActions from "../../actions/userActions";

import { connect } from 'react-redux';

const SingupContainer = styled.div `
    max-width: 400px;
    margin: auto;
    margin-top: 1.5rem;

    .name {
        display: flex;
    }

    .name > div:first-child {
        margin-right: 5px;
    }
    .name > div:last-child {
        margin-left: 5px;
    }

    .signup-header h1 {
        text-align: center;
        font-weight: 400;
        font-size: 1.6rem;
    }

    .signup-avatar {
        width: 40px;
        height: 40px;
        background-color: #9c27b0;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }

    .btn-submit {
        margin-top: 2rem;
    }

    .group-link {
        margin-top: 1.35rem;
        display: flex;
        flex-direction: row-reverse;
    }

    .group-link a{
        color: #1976d2;
        font-weight: 400;
        letter-spacing: 0.01em;
        font-size: 0.875rem;
    }

    .copy-right {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
        letter-spacing: 0.01071em;
        font-size: 0.875rem;
        margin-top: 4rem;
        text-align: center;
    }

    .copy-right a {
        color: rgba(0, 0, 0, .6);
    }

`;


const Signup = (props) => {
    const [userSignup, setUserSignup] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        role: ''
    })

    const handleSubmitForm = (e) => {
        e.preventDefault();
        //Call Api
        props.signup(userSignup)
    }

    const _onChangeInput = (e) => {
        setUserSignup({
            ...userSignup,
            [e.target.name]: e.target.value
        })
    }

    return (
        <SingupContainer>
            <div className="signup-header">
                <div className="signup-avatar">
                    <MdGroupAdd size='1.36rem'/>
                </div>
                <h1>Sign up</h1>
            </div>
            <form className="signup-main">
                <div className="name">
                    <FormGroup>
                        <CustomInput
                            label='First Name *'
                            type='text'
                            name='firstName'
                            value=''
                            onChangeInput={_onChangeInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <CustomInput
                            label='Last Name *'
                            type='text'
                            name='lastName'
                            value=''
                            onChangeInput={_onChangeInput}
                        />
                    </FormGroup>
                </div>
                <FormGroup>
                    <CustomInput
                        label='Username *'
                        type='text'
                        name='username'
                        value=''
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Email *'
                        type='email'
                        name='email'
                        value=''
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Password *'
                        type='password'
                        name='password'
                        value=''
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label="Role *"
                        type="text"
                        name="role"
                        value=""
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <div className="btn-submit">
                    {/* <CustomButton title='Sign up'/> */}
                    <CustomButton
                        type="submit"
                        color="#ffffff"
                        width="100%"
                        uppercase
                        onClick={handleSubmitForm}
                    >
                        Sign up
                    </CustomButton>
                </div>
                <div className="group-link">
                    <Link to="/sign-in">
                        Already have an account? Sign in
                    </Link>
                </div>
                <p className="copy-right"> Copyright &copy; &nbsp;
                    <Link to="/">Your Wbsite</Link>&nbsp;2022
                </p>

            </form>
        </SingupContainer>
    )
}

//export default Signup

const mapDispatchToProps = (dispatch, props) => {
    return {
        signup: (user) => {
            dispatch(userActions.registerUser(user))
        }
    }
}
export default connect(null, mapDispatchToProps)(Signup)
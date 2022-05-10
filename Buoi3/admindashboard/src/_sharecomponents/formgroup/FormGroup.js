import styled from "styled-components";

const FromGroupContainer = styled.div `
    margin-top: 1.2rem;
`

const FormGroup = (props) => {
    return (
        <FromGroupContainer style={{width: props.width ? props.width : '100%'}}>
            { props.children }
        </FromGroupContainer>
    )
}

export default FormGroup
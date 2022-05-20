import CustomCheckbox from "../../_sharecomponents/customcheckbox/CustomCheckbox";

import { Link } from "react-router-dom";

const Signin = (props) => {
    return (
        <div className="signup-container">
            <h1>Page Signin</h1>
            <CustomCheckbox fontSize="24px" label="Remember me"/>
            <CustomCheckbox fontSize="24px"/>
            <div className='group-link'>
                <Link to="/">Forgot password?</Link>
                <Link to="/sign-up">Don't have an account? Sign Up</Link>
            </div>
        </div>
    )
}

export default Signin
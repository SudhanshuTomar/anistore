import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/signUp/signUp";
import './SignInAndSignUpPage.scss'

const SignInAndSignUpPage = () => (
    <div className="SignInAndSignUpPage">
        <SignIn />
        <SignUp />
    </div>
);
export default SignInAndSignUpPage;
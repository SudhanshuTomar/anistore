import React from "react";
import './SignIn.scss'
import FormInput from "../form-input/formInput";
import CustomButton from "../custom-button/customButton";
import { signInWithGoogle } from "../../firebase/firebase";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState = ({
            email:'',
            password:''
        })
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email}  
                    label="Email"
                    required/>

                    <FormInput name="password" 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password}  
                    label="Password"
                    required/>
                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;
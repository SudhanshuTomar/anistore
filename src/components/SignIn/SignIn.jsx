import React from "react";
import './SignIn.scss'

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
                    <input name="email" 
                    type="email" 
                    onChange={this.handleChange}
                    value={this.state.email}  required/>
                    <label>Email</label>
                    <input name="password" 
                    type="password" 
                    onChange={this.handleChange}
                    value={this.state.password}  required/>
                    <label>Password</label>
                    <input name="submit" type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}
export default SignIn;
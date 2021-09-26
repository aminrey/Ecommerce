import React from "react";
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{

constructor(props){

    super(props);

    this.state={

        email: '',
        password:''
    }

   

}
handleSubmit = event=>{
    event.preventDefult();
    this.setState({email:'',password:''})

}
handleChange = event=>{
    const{ value , name}=event.target;
    console.log(event.target);
    this.setState({[name]:value})

}
    render(){
        return(

            <div className="sign-in">
                <h2>I already hav an account</h2>
                <span> Sign in with your emai and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label="email" handleChange={this.handleChange} value={this.state.email} required />
                  
                    <FormInput name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange} required />
                    

                    <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign In With Google</CustomButton>
                    </div>
               
                    

                </form>

            </div>


        )


    }

}
export default SignIn;
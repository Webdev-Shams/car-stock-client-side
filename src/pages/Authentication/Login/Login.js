import React from 'react';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';


const Login = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    const {
        handleSubmit,
        formState: { errors },
        trigger,
        register
        } = useForm();
    // const [
    //     signInWithEmailAndPassword,
    // ] = useSignInWithEmailAndPassword(auth);

    const onLogin = data =>{
        signInWithEmailAndPassword(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onLogin)}>
                    <h5>Log In</h5>
                    <div>
                        <div>
                        <label>Your email address</label>
                        <input
                            id="email"
                            name="email"
                            type= 'email'
                            required={true}
                            {...register("email", {
                            required: "Email is Required!!!" ,
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                            }})}
                            error={Boolean(errors.email)}
                            onKeyUp={() => {trigger("email")}}
                        ></input>
                        {errors.email && (
                        <small className="text-danger">{errors.email.message}</small>
                        )}
                        </div>
                    <div>
                        <label>Your password</label>
                        <input
                        name='password'
                        id="password"
                        type= 'password'
                        autoComplete='off'
                        className={`form-control ${errors.password && "invalid"}`}
                        required={true}
                        {...register("password", {
                        required: "You must specify a password",
                        pattern: {
                        value: '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){    1,})(?!.*\s).{8,}$',
                        message: "Password should contain at least one number and one    special character"
                        },
                        minLength: {
                        value: 8,
                        message: "Password must be more than 8 characters"
                        },
                        maxLength: {
                        value: 20,
                        message: "Password must be less than 20 characters"
                        },
                        })}
                        onKeyUp={() => {trigger("password")}}
                        error={Boolean(errors.password)}
                        ></input>
                        {errors.password && (
                        <small className="text-danger">{errors.password.message}</small>
                        )}
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    </div>
                    </form>
                <p>
                    {
                        user ?
                            <button className='bg-teal-500' onClick={handleSignOut}>sign out</button>
                        :
                        
                        <p className='bg-violet-500'>Not Logged in</p>
                    }
                </p>
        </div>
    );
};

export default Login;
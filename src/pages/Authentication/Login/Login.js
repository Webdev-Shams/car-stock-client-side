import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import GoogleSignIn from './GoogleSignIn';
import './Login.css';


const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';
    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    
    useEffect (() => {
      if (user) {
        navigate(from, { replace: true });
      }
    },[from, navigate, user])

    if(loading){
        return <Loading></Loading>;
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-red-500'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else{
            alert('please enter your email address');
        }
    }



    return (
        <div className='loginCont grid place-items-center h-screen text-center'>
            <div className='backdrop-blur-lg py-9 px-6 rounded-lg'>
                <h2 className='text-4xl font-bold text-blue-500 mt-2 mb-9 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Please LogIn</h2>
                <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <input className='w-full mb-6' ref={emailRef} type="email" name="email" placeholder='Enter Your Email'/>
                    <br />
                    <input className='w-full' ref={passwordRef} type="password" name="password" placeholder='Enter Your Password'/>
                    <br />
                    <button className='submitBtn cursor-pointer' type="submit" >Login</button>
                </form>
                {errorElement}
                <p className=' mt-3 text-left'>New to Genius Car? <Link to="/signup" className='text-blue-500 font-semibold underline drop-shadow-[1px_0.5px_0.5px_rgba(0,0,0,1)]' onClick={navigateRegister}>Please Register</Link> </p>
                <p className='mt-1 text-left'>Forget Password? <Link className='text-red-500 font-semibold underline drop-shadow-[1px_0.5px_0.5px_rgba(0,0,0,1)]' onClick={resetPassword}>Reset Password</Link> </p>
                </div>

                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default LogIn;
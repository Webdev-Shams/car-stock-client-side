import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import GoogleSignIn from '../Login/GoogleSignIn';
import './SignUp.css'


const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');    
    
    
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // , {sendEmailVerification: true}

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading){
        return <Loading></Loading>;
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-red-500'>Error: {error?.message}</p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }


    return (
        <div className='signUpCont grid place-items-center h-screen text-center'>
            <div className='backdrop-blur-lg py-9 px-6 rounded-lg'>
            <h2 className='text-4xl font-bold text-blue-500 mt-2 mb-9 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Please SignUp </h2>
            <div className='formContainer'>
            <form onSubmit={handleRegister}>
                <input className='mb-4' type="text" name="name" placeholder='Enter Your Name' required/>
                <br />
                <input ref={emailRef} className='mb-4' type="email" name="email" placeholder='Enter Your Email' required/>
                <br />
                <input ref={passwordRef} className='mb-3' type="password" name="password" placeholder='Enter Your Password' required/>
                <br />
                <button className='signUpBtn' type="submit"> Sign up</button>
            </form>
            {errorElement}
            <p className='font-normal mt-3'>Already have an account? <Link to="/login" className='text-blue-500 font-semibold underline drop-shadow-[1px_1px_0.5px_rgba(0,0,0,1)]' onClick={navigateLogin}>Please Login</Link> </p>
            <GoogleSignIn></GoogleSignIn>
            </div>
            </div>
            
            
        </div>
    );
};

export default SignUp;
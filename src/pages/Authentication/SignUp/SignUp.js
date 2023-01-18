import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';


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
        navigate('/home');
    }


    return (
        <div className='grid grid-cols-1 place-items-center text-center h-full'>
            <div>
            <h2 className='text-4xl md:text-6xl text-center font-semibold
            text-white mt-2 mb-9'>Please <span className='text-blue-500 font-bold'>SignUp</span> </h2>
            <div className='formContainer'>
            <form onSubmit={handleRegister}>
                <input className='mb-4' type="text" name="name" placeholder='Enter Your Name' required/>
                <br />
                <input ref={emailRef} className='mb-4' type="email" name="email" placeholder='Enter Your Email' required/>
                <br />
                <input ref={passwordRef} className='mb-3' type="password" name="password" placeholder='Enter Your Password' required/>
                <br />
                <input className='submitBtn' type="submit" value="Sign Up" />
            </form>
            {errorElement}
            <p className='font-thin mt-3'>Already have an account? <Link to="/login" className='text-blue-500 font-normal underline' onClick={navigateLogin}>Please Login</Link> </p>
            </div>
            </div>
            
            
        </div>
    );
};

export default SignUp;
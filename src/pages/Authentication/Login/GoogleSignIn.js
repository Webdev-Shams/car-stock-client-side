import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    useEffect (() => {
        if (user) {
          navigate(from, { replace: true });
        }
      },[from, navigate, user])
      
    let errorElement;

    if(loading ){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-red-500'>Error: {error?.message}</p>
    }

    


    return (
        <div>
            <div className='flex items-center mt-6 mb-4'>
                <div style={{ height: '1px' }} className='bg-black w-1/2'></div>
                <p className='mb-1 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-1/2'></div>
            </div>
            {errorElement}
            <button
                    onClick={() => signInWithGoogle()}
                    className='bg-blue-500 w-full my-2 py-2 rounded-lg'>
                    <img className='inline bg-white rounded-full p-1' style={{ width: '30px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default GoogleSignIn;
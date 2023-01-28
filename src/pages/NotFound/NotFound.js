import React from 'react';
import './NotFound.css'
import notfound from '../../images/404.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound h-screen grid place-items-center'>
            <div>
            <img className='w-full sm:w-5/6 md:w-4/6 mx-auto' src={notfound} alt="" />
            <Link className='text-red-500 text-xl' to='/home'>back to homepage?</Link>
            </div>
        </div>
    );
};

export default NotFound;
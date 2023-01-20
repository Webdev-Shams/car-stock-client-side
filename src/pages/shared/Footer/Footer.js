import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-blue-800 text-white py-3'>
            <p className='font-thin text-sm'>developed by <span className='font-light'> Shams Saif. </span>  &copy; {year}</p>
        </div>
    );
};

export default Footer;
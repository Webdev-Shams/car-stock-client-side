import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='abtTxt px-6 lg:px-24 py-5 grid place-items-center'>
                <div>
                    <h1 className='text-4xl mb-4'>About</h1>
                    <p className='md:text-base lg:text-lg'>This is a car inventory website.  This website allows you to add, remove and update items in inventory. To do that you have to login or signup your account. Data is saved to MongoDB database.</p>
                </div>
            </div>

        </div>
    );
};

export default About;
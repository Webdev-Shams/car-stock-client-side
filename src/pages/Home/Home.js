import React from 'react';
import About from './About/About';
import './Home.css';
import Brands from './Brands/Brands';
import Cars from '../Cars/Cars';
import HomeCars from './HomeCars/HomeCars';

const Home = () => {
    return (
        <div>
            <div className='home grid place-items-center text-left px-16 lg:px-24'>
                <div>
                    <p className='text-white text-4xl font-thin mb-5'>Welcome to</p>
                    <h1 className='stock text-white text-9xl font-thin drop-shadow-lg shadow-white' style={{ zIndex: '999' }}>Car
                    <span className=' '> Stock</span> 
                    </h1>
                </div>
            </div> 
            <About></About>  
            <HomeCars></HomeCars> 
            <Brands></Brands>
        </div>    
    );
};

export default Home;
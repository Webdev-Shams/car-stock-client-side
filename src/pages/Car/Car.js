import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Car.css';

const Car = ({car}) => {
    const {_id, model, img, company, price, quantity} = car;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/car/${id}`);
    }
    return (
        <div className='car text-left backdrop-blur-lg'>
            <img className='mb-4' src={img} alt="" />
            <div className='px-4 mb-6'>
                <h2 className='text-xl font-semibold'><span className='capitalize text-blue-500 drop-shadow-[1px_1px_0.5px_rgba(0,0,0,1)]'>{company}</span></h2>
                <p>Model: <span className='uppercase'>{model}</span></p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => navigateToServiceDetail(_id)} className='mngBtn'> Update </button>
            </div>
        </div>
    );
};

export default Car;
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './CarStock.css';

const CarStock = () => {
    const { carId } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/car/${carId}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setCar(data));
    } ,[]);

    
    const handleDeliver = async (qnt) => {
        const decrease = qnt - 1;
        // update the quantity in the MongoDB database
        const url = `http://localhost:5000/car/${carId}`;
        const updatedData = {...car, quantity:decrease}
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        // update the state
        setCar({...car, quantity: decrease});
    }
   
   

    return (
        <div className='grid place-items-center min-h-screen py-11'>
            <div className='w-5/6 md:w-4/6 lg:w-3/6 px-6 py-8 border-black border-2 rounded-lg'>
                <h1 className='text-4xl text-blue-500 font-bold uppercase mb-7'>{car.company}</h1>
                <img className='rounded-lg' src={car.img} alt="" />
                <div className='text-left text-xl capitalize'>
                    <p><span className='font-semibold'>Model:</span> {car.model}</p>
                    <p><span className='font-semibold'>Price:</span> {car.price}</p>
                    <p><span className='font-semibold'>Quantity:</span> {car.quantity}</p>

                    <button className='bg-red-500 px-11 py-6 rounded-lg' onClick={() => handleDeliver(car.quantity)}>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default CarStock;
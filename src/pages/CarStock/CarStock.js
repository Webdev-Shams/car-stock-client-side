import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './CarStock.css';

const CarStock = () => {
    const { carId } = useParams();
    const [car, setCar] = useState({});
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/car/${carId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCar(data));
    } ,[]);

    const decreaseStock = car.quantity - 1;
    console.log(decreaseStock)

    
    const handleDeliver =  () => {
        if(car.quantity > 0) {
            const url = `http://localhost:5000/update/${carId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({quantity:decreaseStock})
            })
            .then(res=>res.json())
            .then(result=>console.log(result))


            setCar({...car, quantity: decreaseStock});
            }

            else{
                alert('Sorry! Out of Stock!');
            }
    };


    const onAddStock = (data) => {
        const add = parseInt(data.quantity) + parseInt(car.quantity);

        const url = `http://localhost:5000/update/${carId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({quantity:add})
        })
        .then(res=>res.json())
        .then(result=>console.log(result))


        setCar({...car, quantity:add});
        reset();
        alert('successfully added!');
    };


    return (
            <div className='carStockbg grid place-items-center min-h-screen py-11'>
                <div className='carStockCont w-5/6 md:w-4/6 lg:w-3/6 px-6 py-8  backdrop-blur-sm  rounded-lg'>
                    <h1 className='text-4xl text-blue-500 font-bold uppercase mb-7'>{car.company}</h1>
                    <img className='rounded-lg' src={car.img} alt="" />
                    <div className='text-left text-xl capitalize text-white mt-6'>
                        <p><span className='font-semibold'>Model:</span> {car.model}</p>
                        <p><span className='font-semibold'>Price: $ </span> {car.price}</p>
                        <p><span className='font-semibold'>Quantity:</span> {car.quantity}</p>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <button className='bg-red-500 my-2 mr-11 rounded-md col-span-1 text-white' onClick={handleDeliver}>Delivered</button>
                            <form className='col-span-2' onSubmit={handleSubmit(onAddStock)}>
                                <input className='mb-4 py-2 stockFormInput' placeholder={car.quantity} type="number" {...register("quantity")} />
                                <input className='bg-teal-500 py-2 px-6 text-white cursor-pointer' type="submit" value="Add Stock" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CarStock;
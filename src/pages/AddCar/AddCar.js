import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = "http://localhost:5000/car";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        
        alert('New Car Added!');
        reset();
    };
    
    return (
        <div className='addCar grid place-items-center h-screen'>
            <div className='w-1/2  px-28 py-11 backdrop-blur-lg'>
                <h2 className='text-blue-500 text-4xl font-bold mb-9 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Add a Car Here</h2>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-1 w-full text-center py-3 rounded-md' placeholder='Car Compay' {...register("company", { required: true, maxLength: 20 })} />
                    <br />
                    <input className='mb-1 w-full text-center py-3 rounded-md' placeholder='Car Model' {...register("model", { required: true, maxLength: 20 })} />
                    <br />
                    <input className='mb-1 w-full text-center py-3 rounded-md' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <br />
                    <input className='mb-1 w-full text-center py-3 rounded-md' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                    <br />
                    <input className='mb-1 w-full text-center py-3 rounded-md' placeholder='Photo Url' type="text" {...register("img", { required: true })} />
                    <br />

                    <input className='bg-blue-500 hover:bg-blue-700 py-2 w-full text-white text-lg font-medium rounded-md cursor-pointer' type="submit" value="Add Car"/>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
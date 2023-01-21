import React from 'react';
import { useForm } from 'react-hook-form';

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
        <div className='w-50 mx-auto'>
            <h2 className='text-3xl'>Add a car here:</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4' placeholder='Car Compay' {...register("company", { required: true, maxLength: 20 })} />
                <input className='mb-4' placeholder='Car Model' {...register("model", { required: true, maxLength: 20 })} />
                <input className='mb-4' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='mb-4' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-4' placeholder='Photo Url' type="text" {...register("img", { required: true })} />
                {/* <button className='bg-blue-500 p-4' type="submit" value="addcar" onClick={() =>}>Add Car</button> */}
                <input className='bg-blue-500 p-4' type="submit" value="Add Car"/>
            </form>
        </div>
    );
};

export default AddCar;
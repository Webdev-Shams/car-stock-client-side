import React from 'react';
import useCar from '../../hooks/useCar';
import './ManageInventory.css';

const ManageInventory = () => {
    const [cars, setCars] = useCar();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = cars.filter(car => car._id !== id);
                setCars(remaining);
            })
        }
    }
    return (
        <div className='manageCars bg-black grid h-screen place-items-center'>
            <div className='w-5/6'>
                <h1 className='text-4xl text-blue-500 font-bold mb-6'>Manage Cars</h1>
                <div className='mngCarsBg backdrop-blur-lg'>
                    <table className='border-2 border-white text-white font-semibold'>
                        <thead>
                            <tr className='bg-blue-500 border-2 border-white'>
                                <th className='border-2 border-white py-2'>Company</th>
                                <th className='border-2 border-white'>Model</th>
                                <th className='border-2 border-white'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cars.map( car =>                             
                                    <tr key={car._id} className="text-left capitalize">
                                        <td className='pl-6 pr-6'>{car.company}</td>
                                        <td className='pl-6 pr-6'>{car.model}</td>
                                        <td className='text-center px-2 py-2'><button className='font-extrabold bg-red-500 w-full  py-2' onClick={() => handleDelete(car._id)}>X</button></td>
                                    </tr>
                                )
                            }
                        </tbody>                
                    </table>
                </div>
            </div>
         </div>
    );
};

export default ManageInventory;
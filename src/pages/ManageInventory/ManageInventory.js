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
        <div className='grid h-screen place-items-center'>
            <div className='w-5/6'>
                <h1 className='text-4xl text-blue-500 font-bold mb-6'>Manage Cars</h1>
                <div>
                    <table className='border-2 border-black'>
                        <thead>
                            <tr className='bg-blue-500 text-white border-2 border-black'>
                                <th className='border-2 border-black'>Company</th>
                                <th className='border-2 border-black'>Model</th>
                                <th className='border-2 border-black'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cars.map( car =>                             
                                    <tr key={car._id} className="text-left capitalize">
                                        <td className='pl-6 pr-6'>{car.company}</td>
                                        <td className='pl-6 pr-6'>{car.model}</td>
                                        <td className='text-center'><button className='font-extrabold bg-red-500 px-6 py-3' onClick={() => handleDelete(car._id)}>X</button></td>
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
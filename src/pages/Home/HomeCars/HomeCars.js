import React from 'react';
import { Link } from 'react-router-dom';
import useCar from '../../../hooks/useCar';
import Car from '../../Car/Car';

const HomeCars = () => {
    const [cars] = useCar();
    return (
        <div className='carsCont'>
            <div className="row">
                <h1 className='text-4xl mb-9'> Cars Available </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    cars.slice(0, 6).map(car => <Car
                        key={car._id}
                        car={car}
                    >
                    </Car>)
                }
                </div>
                <div className='mt-9 font-bold text-white'>
                    <button className='px-11 py-3 text-blue-500 bg-white hover:bg-zinc-300 mr-9 drop-shadow-md rounded'><Link to='/cars'>See All</Link></button>
                    <button className='px-9 py-3 bg-teal-500 hover:bg-teal-800 drop-shadow-lg rounded'><Link to='/manage'>Manage</Link></button>
                </div>
            </div>
        </div>
    );
};

export default HomeCars;
import React from 'react';
import useCar from '../../hooks/useCar';
import Car from '../Car/Car';
import './Cars.css';

const Cars = () => {
    const [cars] = useCar();
    return (
        <div className='carsCont'>
            <div className="row">
                <h1 className='text-4xl mb-9'> Cars Available </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    cars.map(car => <Car
                        key={car._id}
                        car={car}
                    >
                    </Car>)
                }
                </div>
            </div>
        </div>
    );
};

export default Cars;
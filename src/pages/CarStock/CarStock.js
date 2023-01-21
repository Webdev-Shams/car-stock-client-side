import React, { useEffect, useState } from 'react';
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
    } ,[])


    return (
        <div>
            <h2>You are about to Book: {car.model}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CarStock;
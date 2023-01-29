import React from 'react';
import './Brands.css';

const Brands = () => {
    return (
        <div className='brands'>
            <h1 className='text-4xl mb-4'>Brands</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4 place-items-center'>
                <img src="https://png.monster/wp-content/uploads/2022/02/png.monster-758-370x370.png" alt="porche" />
                <img src="https://www.pngitem.com/pimgs/m/2-25712_audi-logo-png-transparent-png.png" alt="audi" />
                <img src="https://www.pngmart.com/files/22/Jaguar-Logo-PNG-Free-Download.png" alt="jaguar" />
                <img src="https://seeklogo.com/images/B/bmw-logo-7233D7FDAF-seeklogo.com.png" alt="bmw" />
                <img src="https://png.monster/wp-content/uploads/2022/02/png.monster-696.png" alt="mercedes-benz" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" alt="ford" />
                <img src="https://www.pngmart.com/files/3/Chevrolet-Logo-PNG-Image.png" alt="chevrolet" />
                <img src="https://www.carlogos.org/car-logos/honda-logo-1700x1150.png" alt="honda" />
            </div>
        </div>
    );
};

export default Brands;
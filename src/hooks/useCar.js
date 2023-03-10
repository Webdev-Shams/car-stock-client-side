import { useEffect, useState } from "react";

const useCar = () => {
    const [cars, setCars] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => setCars(data));
    }, [])

    return[cars, setCars]
}

export default useCar;
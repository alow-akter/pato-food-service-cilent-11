import React, { useEffect, useState } from 'react';
import SixCurd from './SixCurd/SixCurd';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/food')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 gap-20'>
            {foods.map(simpleCurd => <SixCurd key={simpleCurd._id} simpleCurd={simpleCurd}></SixCurd>)}
        </div>
    );
};

export default Foods;
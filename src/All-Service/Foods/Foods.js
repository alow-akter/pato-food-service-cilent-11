import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';

import SixCurd from './SixCurd/SixCurd';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useTitle('foods')
    useEffect(() => {
        fetch('https://foodserver-nu.vercel.app/food')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-20'>
                {foods.map(simpleCurd => <SixCurd key={simpleCurd._id} simpleCurd={simpleCurd}></SixCurd>)}
            </div>

        </div>
    );
};

export default Foods;
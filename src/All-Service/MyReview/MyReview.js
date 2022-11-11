import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCurd from '../MyReviewCurd/MyReviewCurd';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch(`https://foodserver-nu.vercel.app/reviewsByEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })

    }, [user?.email])
    return (
        <div>

            <div className='grid lg:grid-cols-2 gap-6'>
                {
                    orders.map(rev => <MyReviewCurd key={rev._id} rev={rev}></MyReviewCurd>)
                }
            </div>
        </div>
    );
};

export default MyReview;
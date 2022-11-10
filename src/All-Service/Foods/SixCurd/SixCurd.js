import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SixCurd = ({ simpleCurd }) => {
    const { _id, title, img, price, description, rating } = simpleCurd
    return (
        <div className='flex justify-between mx-auto mt-8 shadow-gray-500 shadow-lg'>
            <div className="max-w-xs p-3 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                    <div>
                        <span className="block text-sm font-medium tracking-widest uppercase dark:text-violet-400 mt-2">price: ${price}</span>
                        <span className="block text-xl font-medium tracking-widest  dark:text-violet-400 mt-4">
                            rating:{rating}</span>
                        <div className="rating gap-3 mt-3">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                        </div>
                    </div>
                    <div>
                        {description.length > 250 ?
                            <p>{description.slice(0, 100) + '...'}</p>
                            :
                            <p>{description}</p>
                        }

                    </div>
                    <div className='flex justify-center mt-5 '>

                        <Link to={`/detailsCurd/${_id}`}>
                            <button className='btn btn-primary'>View All</button>
                        </Link>

                    </div>
                </div>
                <p className="dark:text-gray-100"></p>
            </div>
        </div>
    );
};

export default SixCurd;
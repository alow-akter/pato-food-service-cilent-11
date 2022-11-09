import React from 'react';

const AllFood = ({ food }) => {
    const { title, img, price, description, rating } = food
    return (
        <div className='flex justify-between mx-auto p-4'>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                    <div>
                        <span className="block text-sm font-medium tracking-widest uppercase dark:text-violet-400 mt-2">price: ${price}</span>
                        <span className="block text-xl font-medium tracking-widest  dark:text-violet-400 mt-4">
                            rating:{rating}</span>
                        <div className="rating gap-3 mt-5">
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
                </div>
                <p className="dark:text-gray-100"></p>
            </div>
        </div>
    );
};

export default AllFood;
import React from 'react';
import { Link } from 'react-router-dom';

const SixCurd = ({ simpleCurd }) => {
    const { title, img, price, description, rating } = simpleCurd
    return (
        <div className='flex justify-between mx-auto mt-8 shadow-gray-500 shadow-lg'>
            <div className="max-w-xs p-3 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
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

                        <button>
                            <Link
                                class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                                href="/download"
                            >
                                <span
                                    class="absolute inset-y-0 right-0 w-[2px] bg-rose-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                                ></span>

                                <span
                                    class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                                >
                                    View All
                                </span>
                            </Link>
                        </button>
                    </div>
                </div>
                <p className="dark:text-gray-100"></p>
            </div>
        </div>
    );
};

export default SixCurd;
import React from 'react';

const ReviewCurd = ({ recurd }) => {
    const { serviceName, photoURL, message } = recurd
    return (
        <div className=''>
            <div className="flex justify-center max-w-xs p-6  rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 m-4 shadow-slate-700 shadow-lg">
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{serviceName}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">{message}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCurd;

import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCurd from '../ReviewCurd/ReviewCurd';


const DetailsCurd = () => {
    const { _id, img, title, description, price, rating } = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(user)
    const [reviewCurd, setReviewCurd] = useState([])
    const handleReviewSubmit = event => {
        event.preventDefault()

        const from = event.target;
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const email = user?.email;
        const message = from.message.value;
        console.log(name, photoURL, price, rating, message)


        const review = {
            food: _id,
            serviceName: title,
            customer: name,
            photoURL,
            message,
            email

        }
        fetch('https://foodserver-nu.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service placed successfully')
                    from.reset()
                }
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetch(`https://foodserver-nu.vercel.app/reviewsById?food=${_id}`)
            .then(res => res.json())
            .then(data => setReviewCurd(data))
    }, [])
    console.log(reviewCurd)


    return (
        <div>
            <div className='flex gap-2 mx-auto'>
                <div className=''>
                    <div className=' mt-4 '>
                        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg  shadow-slate-500 shadow-lg dark:bg-gray-900 dark:text-gray-100">
                            <div>
                                <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                                <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                                <p className="text-sm dark:text-gray-400">{description}</p>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="space-x-2">
                                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                            <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                                        </svg>
                                    </button>
                                    <button aria-label="Bookmark this post" type="button" className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex space-x-2 text-sm dark:text-gray-400">
                                    <button type="button" className="flex items-center p-1 space-x-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of comments" className="w-4 h-4 fill-current dark:text-violet-400">


                                        </svg>
                                        <span>price: ${price}</span>
                                    </button>
                                    <button type="button" className="flex items-center p-1 space-x-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-4 h-4 fill-current dark:text-violet-400">
                                            <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                                            <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                                        </svg>
                                        <span>{rating}</span>
                                        <Link className='underline' to='/foods'>Go to foods</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-white   max-w-md mx-auto mt-4 ">
                    <h1 className="text-center text-xl mb-4 text-black p-8">
                        Please review add
                    </h1>
                    <form onSubmit={handleReviewSubmit}>
                        <div className="form-group mb-6">
                            <input
                                type="text"
                                className="form-control block
                    w-full
                    px-3
                    py-3
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleInput7"
                                placeholder="Service Name"
                                name="name"
                            />
                        </div>


                        <div className="form-group mb-6">
                            <textarea

                                className=" form-control
                    block
                    w-full
                    px-3
                    py-3
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    <m-0></m-0>
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                id="exampleFormControlTextarea13"
                                rows="3"
                                placeholder="Service Describe"
                                name="message"
                            ></textarea>
                        </div>
                        <div className="form-group form-check text-center mb-6"></div>
                        <input
                            type="submit"
                            className="
            w-full
            px-6
            py-4
            bg-blue-600
            text-white
            font-medium
            text-[17px]
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            <duration-150></duration-150>
                ease-in-out"
                            value="Submit Service"
                        />
                    </form>
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                {reviewCurd.map(recurd => <ReviewCurd key={recurd._id} recurd={recurd}></ReviewCurd>)}
            </div>

        </div>

    );
};

export default DetailsCurd;
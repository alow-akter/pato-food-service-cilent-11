import React from 'react';


const FoodService = () => {

    const handleFoods = event => {
        event.preventDefault()
        const from = event.target;
        const title = from.title.value;
        const img = from.img.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const description = from.description.value;
        console.log(title, img, price, rating, description,)
        // console.log(img)

        const foodService = {
            title,
            img,
            price,
            rating,
            description
        }
        fetch('https://foodserver-nu.vercel.app/foodService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(foodService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                from.reset()
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-4 ">
                    <h1 className="text-center text-xl mb-4 text-black">
                        Service Info Provider Form
                    </h1>
                    <form onSubmit={handleFoods}>
                        <div className="form-group mb-6">
                            <input
                                type="text"
                                className="form-control block w-full
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
                                name="title"
                            />
                        </div>

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
                                placeholder="Service Picture"
                                name="img"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <input
                                type="text"
                                className="form-control block w-full
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
                                placeholder="Service Price"
                                name="price"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <input
                                type="text"
                                className="form-control block w-full
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
                                placeholder="Service Rating"
                                name="rating"
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
                                name="description"
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
        </div>
    );
};

export default FoodService;
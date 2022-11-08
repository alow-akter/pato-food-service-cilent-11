import React from 'react';

const Home = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://www.gfs.com/sites/default/files/styles/hero_image_modern_/public/hero-modern/new%20products%20us%20web%20header.jpg?itok=LwOCf7mr)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/5 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/15 sm:to-white/5"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div class="max-w-xl text-center sm:text-left">
                        <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                            Let us find your

                            <strong class="block font-extrabold text-rose-700">
                                Forever Home.
                            </strong>
                        </h1>

                        <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative w-10/12 mx-auto flex gap-4 py-6 overflow-x-auto mt-20 bg-[#68968C] p-5">
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://www.gfs.com/sites/default/files/styles/card_image_minimal/public/product-card-image/Final-Bakery.jpg?itok=jsMJQZIl" alt="" />
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://www.gfs.com/sites/default/files/styles/card_image_minimal/public/product-card-image/Final-Seafood.jpg?itok=aak9LfKY" alt="" />
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://www.gfs.com/sites/default/files/styles/card_image_minimal/public/product-card-image/Final-Dairy.jpg?itok=6AR9j1d5" alt="" />

            </div>

            <section className="py-6 dark:bg-gray-800 bg-[#68968C] mt-10">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2  text-center text-1xl font-bold">
                        <div>
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src='https://img.favpng.com/2/23/4/dish-food-cuisine-ingredient-biryani-png-favpng-n7BudMgSN3cb1RMQLzsQ5hnyD.jpg' alt='' />
                            <h3>Chicken biryani</h3>
                        </div>
                        <div>
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROO3mfBQNOylve4owjqBRtxxe2maAv14CoeQ&usqp=CAU' alt='' />
                            <h3>Dall and Hot pork</h3>
                        </div>
                        <div>
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src='https://cdn.imgbin.com/0/24/17/imgbin-organic-food-recipe-health-food-fresh-salad-E8WdenfxJeYEj84i8w1iFcWbG.jpg' alt='' />
                            <h3>Organic food</h3>
                        </div>
                        <div>
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src='https://img.favpng.com/16/2/1/chicago-style-pizza-take-out-italian-cuisine-greek-pizza-png-favpng-PNytE5ULDVeqgE4E4vwihwP7a.jpg' alt='' />
                            <h3>Pizza hot</h3>
                        </div>



                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
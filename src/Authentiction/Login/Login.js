import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {
    const { login } = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                from.reset()


            })
            .catch(err => {
                console.error(err)

            })


    }

    const { googleSingIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error =>
                console.error(error)
            )
    }

    return (
        <div className='mt-5 bg-[#68968C]'>

            <section class="relative flex flex-wrap lg:h-screen lg:items-center">
                <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ">
                    <div class="mx-auto max-w-lg text-center">
                        <h1 class="text-2xl font-bold sm:text-3xl">Please Login</h1>
                    </div>

                    <form onSubmit={handleSubmit} action="" class="mx-auto mt-8 mb-0 p-8 max-w-md space-y-4 ">
                        <div>
                            <label htmlFor="email" class="sr-only">Email</label>

                            <div class="relative">
                                <input
                                    type="email"
                                    name='email'
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email" required
                                />

                                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" class="sr-only">Password</label>

                            <div class="relative">
                                <input
                                    type="password"
                                    name='password'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password" required
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-[#B5506B] hover:bg-[#e42054] px-5 py-3 text-sm font-medium text-white"
                        >
                            Login
                        </button>
                        <button onClick={handleGoogleSingIn}
                            type="submit"
                            className="block w-full rounded-lg bg-[#B5506B] hover:bg-[#e42054] px-5 py-3 text-sm font-medium text-white mt-4"
                        >
                            Google
                        </button>

                        <div class="flex items-center justify-between">
                            <p class="text-sm text-white">
                                Create a new account
                                <Link to='/singUp' class="underline text-[#C70100]">Sign up</Link>
                            </p>


                        </div>
                    </form>
                </div>

                <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://img.lovepik.com/element/45009/2329.png_300.png"
                        class="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>

        </div>
    );
};

export default Login;
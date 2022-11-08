import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSingup = event => {
        event.preventDefault()
        const from = event.target
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        from.reset()

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)

            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-slate-400">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-[#C70100] sm:text-3xl">
                        Please Sing Up
                    </h1>

                    <form onSubmit={handleSingup} action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl bg-[#68968C]">
                        <p className="text-lg font-medium">Sign in to your account</p>
                        <div>
                            <label htmlFor="name" className="text-sm font-medium">Name</label>

                            <div className="relative mt-1">
                                <input
                                    type="name"
                                    name='name'
                                    id="name"
                                    className="w-full rounded-lg border-gray-500 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter name"
                                />


                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    name='email'
                                    id="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email" required
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
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" className="text-sm font-medium">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    id="password"
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
                        <div>
                            <input className='block w-full rounded-lg bg-[#B5506B] hover:bg-[#e42054] px-5 py-3 text-sm font-medium text-white' type="submit" value="Singup" />
                        </div>

                        <p className="text-center text-sm text-white">
                            Already have an account
                            <Link to='/login' className="underline text-[#C70100]" >Login</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SingUp;
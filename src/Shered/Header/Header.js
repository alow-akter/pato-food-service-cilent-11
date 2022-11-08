import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-[#5E998E]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='ml-28'>
                        <img className='w-[60px] rounded-lg' src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' alt="" />
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div>

                </div>
                <div className="navbar-end">
                    <h2 className='text-2xl p-3 font-bold text-[#C70100]'>Pato<span className='m-2 text-sm text-[#505050] '>FOOD SERVICE</span></h2>
                </div>
            </div>

        </div>
    );
};

export default Header;
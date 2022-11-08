import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const menuItems = <>
        <li className='ml-4'><Link to='/'>Home</Link></li>

        {
            user?.email ?
                <>

                    <li className='font-semibold m-3'>
                        <button onClick={handleLogOut} className=' btn-ghost'>Sing 0ut</button>
                    </li>
                </>
                :
                <li className='ml-4'><Link to='/login'>Login</Link></li>

        }

    </>

    return (
        <div>
            <div className="navbar bg-[#5E998E]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className='flex '>
                    <div >
                        <img className='w-[65px] rounded-xl ' src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-10.jpg" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <h2 className='text-2xl p-3 font-bold text-[#C70100]'>Pato<span className='m-2 text-sm text-[#505050] '>FOOD SERVICE</span></h2>
                </div>
            </div>

        </div>
    );
};

export default Header;
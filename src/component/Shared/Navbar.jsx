import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogedIn, setIsLogedOut } from '../State/userAuthSlice';

const Navbar = () => {
    const { isLogedIn } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [userName, setUserName] = useState();

    useEffect(() => {
        const user = localStorage.getItem('user');
        // console.log('useEffect', JSON.parse(user));
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.length > 0 && parsedUser[0].username) {
                setUserName(parsedUser[0].username);
                dispatch(setIsLogedIn());
                // console.log(parsedUser[0].username, 'prase');
            }
        }
    }, []);

    // user Log Out
    const handleLogOut = () => {
        dispatch(setIsLogedOut());
        localStorage.removeItem('user');
        window.location.replace('/login');
    }

    // user have or not
    const menuItems =
        <React.Fragment>
            {
                isLogedIn ?
                    <li className='font-bold'><button onClick={handleLogOut} to='/login'>SignOut/{userName}</button></li>
                    :
                    <li className='font-bold'><Link to='/login'>Login</Link></li>
            }
        </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between" style={{ backgroundColor: "#0088CC" }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold"><span className='text-white'>Login Auth System</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
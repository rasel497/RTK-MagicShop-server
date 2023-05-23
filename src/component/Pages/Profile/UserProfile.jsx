import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    console.log('ddddpp', userData);
    // set user in profile card
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user'));
        if (Array.isArray(storedData)) {
            setUserData(storedData);
        }
    }, []);
    return (
        <div className='flex justify-center mt-10'>
            <div className="card card-compact w-96 bg-slate-500 shadow-xl p-5">
                <h2 className='text-center text-2xl text-green-500 font-bold'>Welcome To Profile</h2>
                <div className="card-body text-white">
                    {Array.isArray(userData) ?
                        userData.map((user, index) => (
                            <div key={index}>
                                <h2 className="card-title">
                                    Name: <span className='text-green-500'>{user?.username}</span>
                                </h2>
                                <h2 className="card-title">
                                    Email: <span className='text-green-500'>{user?.email}</span>
                                </h2>
                                <h2 className="card-title">
                                    Age: <span className='text-green-500'>{user?.age}</span>
                                </h2>
                            </div>
                        ))
                        :
                        <>
                            <p>No user data available. <Link to='/login' className='text-red-500 underline'>Please Login</Link> </p>
                            <p>Wrong E-mail & Password</p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserProfile;

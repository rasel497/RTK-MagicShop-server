import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogedIn } from '../../State/userAuthSlice';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { users } = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const location = useLocation();
    // const form = location.state?.form?.pathname || '/profile'

    const handleLogin = (data) => {
        axios.post('http://localhost:5000/userLogin/', data)
            .then((res) => {
                dispatch(setIsLogedIn());
                navigate('/profile');
                // navigate(form, { replace: true })
                localStorage.setItem('user', JSON.stringify(res.data))
                return res.data;
            })
            .catch(err => console.error(err));
    };
    return (
        <div className="flex justify-center">
            <div className='flex justify-center items-center rounded-md bg-indigo-950 my-10' style={{ width: "550px" }}>
                <div className='w-96 p-7'>
                    <h2 className='text-center text-2xl text-white font-bold'>Login:
                        <span className='text-red-500'> {users?.email}</span>
                    </h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text-alt  text-white">User name</span></label>
                            <input type="email" placeholder='your email' className="input input-bordered w-full max-w-xs"
                                {...register("email", { required: "Email is requred!" })}
                            />
                            {errors.email && <p className='text-yellow-300'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text-alt  text-white">Password</span></label>
                            <input type="password" placeholder='your password' className="input input-bordered w-full max-w-xs"
                                {...register("password", { required: "Password is requred!" })}
                            />
                            {errors.password && <p className='text-yellow-300'>{errors.password?.message}</p>}
                        </div>
                        <button className='btn btn-active btn-primary w-full mt-4' type="submit">Login</button>
                        <p className='text-white'>Are you new? <Link to="/signup" className='text-amber-50 text-sm underline'>Create an account.</Link></p>
                    </form>
                </div>
            </div >
        </div>
    );
};

export default Login;
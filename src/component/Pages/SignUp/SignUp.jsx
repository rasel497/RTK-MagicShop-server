import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [registrationStatus, setRegistration] = useState("");

    const handlCreatePost = (data) => {
        axios.post('http://localhost:5000/userRegistration/', data)
            .then((res) => {
                if (res.data.message) {
                    setRegistration(res.data.message)
                } else {
                    setRegistration("Registration Successful")
                }
                // console.log('Res:', res.data);
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="flex justify-center">
            <div className='flex justify-center items-center rounded-md bg-indigo-950 my-10' style={{ width: "550px" }}>
                <div className='w-96 p-7'>
                    <form onSubmit={handleSubmit(handlCreatePost)}>
                        <h2 className='text-center text-md text-green-500 font-bold'>{registrationStatus}</h2>
                        <h2 className='text-center text-3xl text-white font-bold'>Sign Up</h2>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text-alt  text-white">User name</span></label>
                            <input type="username" placeholder='your name' className="input input-bordered w-full max-w-xs"
                                {...register("username", { required: "Name is requred!" })}
                            />
                            {errors.username && <p className='text-yellow-300'>{errors.username?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text-alt  text-white">Age</span></label>
                            <input type="age" placeholder='your age' className="input input-bordered w-full max-w-xs"
                                {...register("age", { required: "Age is requred!" })}
                            />
                            {errors.age && <p className='text-yellow-300'>{errors.age?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text-alt  text-white">Email</span></label>
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
                        <button className='btn btn-active btn-primary w-full mt-4' type="submit">Register</button>
                    </form>
                    <p className='text-white'>Already Have an account? <Link to="/login" className='text-amber-50 text-sm underline'>Please Login</Link></p>
                </div>
            </div >
        </div>
    );
};
export default SignUp;
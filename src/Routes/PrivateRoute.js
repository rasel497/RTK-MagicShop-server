import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import UserProfile from '../component/Pages/Profile/UserProfile';
import { setPrivateRouteAuthorized } from '../component/State/userAuthSlice';

const PrivateRoute = () => {
    // const { users, privateRoute, } = useSelector((state) => state.users);
    // const location = useLocation();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const isAuthorized = users?.email && users?.password;
    //     dispatch(setPrivateRouteAuthorized(isAuthorized));
    // }, [dispatch, users]);

    // if (privateRoute.authorized) {
    //     return <UserProfile />;
    // }

    // return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

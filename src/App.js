import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Pages/Login/Login';
import SignUp from './component/Pages/SignUp/SignUp';
import Navbar from './component/Shared/Navbar';
import PrivateRoute from './Routes/PrivateRoute';
import UserProfile from './component/Pages/Profile/UserProfile';
import { setIsLogedIn, setIsLogedOut } from './component/State/userAuthSlice';

function App() {
  const { isLogedIn, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = localStorage.getItem('user'); // check users have or not in localStorage
    if (isLoading) {
      if (currentUser !== null && currentUser.length > 0) { // my condition
        dispatch(setIsLogedIn());
      } else {
        dispatch(setIsLogedOut());
      }
    }
  }, [isLoading, dispatch]);
  console.log('iiii', isLoading);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={isLoading? <>Loading...</> : isLogedIn ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/profile" element={isLoading ? <>Loading...</> : isLogedIn ? <UserProfile /> : <Navigate to="/login" />} />


        {/* <PrivateRoute path="/profile" element={<UserProfile />} isAuthenticated={isLogedIn} /> */}
        {/* <Route path="/profile" element={<PrivateRoute path="/profile" exact><UserProfile /></PrivateRoute>} /> */}
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/login'
import Register from "./Pages/register";
import PageNotFound from "./Pages/pageNotFound";
import ForgotPasswrod from "./Pages/forgotPassword";
import Navbar from "./Components/navbar";
import Main from "./Pages/main";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/editProfile";
import SearchUser from "./Pages/searchUser";

 function LoginRouter() {

    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="password/reset" element={<ForgotPasswrod />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>

        </>
    )
}



 function MainRouter() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<Main />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="profile/edit" element={<EditProfile />} />
                    <Route path=":uname" element={<SearchUser />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>

        </>
    )
}


export {LoginRouter,MainRouter};
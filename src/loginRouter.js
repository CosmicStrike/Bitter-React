import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/login'
import Register from "./Pages/register";
import PageNotFound from "./Pages/pageNotFound";
import ForgotPasswrod from "./Pages/forgotPassword";

export default function LoginRouter() {

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
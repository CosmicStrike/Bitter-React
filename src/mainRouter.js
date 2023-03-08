import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar'
import Main from './Pages/main'
import SearchUser from './Pages/searchUser'
import EditProfile from './Pages/editProfile'
import Profile from './Pages/profile'
import PageNotFound from "./Pages/pageNotFound";

export default function MainRouter() {

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
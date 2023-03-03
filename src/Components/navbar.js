import React from "react";

function Navbar() {

    return (
        <><header class="header border border-r-0 border-l-0 border-black pb-4 w-full flex flex-row place-content-between">
            <p class="pl-6 text-xl pt-6 font-bold">Bitter</p>
            <div class="navTabs flex gap-x-8">
                <div class="homeTab hover:cursor-pointer">
                    <p class="material-icons pt-4 mx-2 text-2xl" id="homebtn"> home</p>
                    <p>Home</p>
                </div>
                <div class="searchTab hover:cursor-pointer" onclick="window.location.href='/search'">
                    <p class="material-icons pt-4 mx-2 text-2xl" id="searchbtn">search</p>
                    <p>Search</p>
                </div>
            </div>

            <div class="relative inline-block group ">
                <div class="profile-container pt-4 pr-8 min-w-[50px] max-w-[50px] min-h-[50px] mr-[5rem]">
                    <img id="profile-img" src="" alt="pfp" class="min-w-[50px] h-[50px] rounded-full" />
                </div>
                <div class="navs group-hover:block absolute hidden w-36 right-1 z-1 shadow-xl">
                    <p class="py-2 hover:cursor-pointer pl-2 bg-white hover:bg-gray-300" id="profile-btn">
                        Profile
                    </p>
                    <p class="py-2 hover:cursor-pointer pl-2 bg-white hover:bg-gray-300" id="logout-btn">
                        Logout
                    </p>
                </div>
            </div>
        </header></>
    )
}

export default Navbar
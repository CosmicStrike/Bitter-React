import React from "react";

export default class SearchUser extends React.Component {
    render() {
        return (
            <>
                <main class="w-full flex flex-col justify-center">
                    <form id="searchForm" class="w-full">
                        <div
                            class="userSearchBox w-full flex items-center justify-center mt-8 md:px-32 lg:px-64 gap-x-4"
                        >
                            <input
                                type="text"
                                class="border-2 w-[80%] h-[6vh] p-4 rounded-full"
                                name="search"
                                id="searchUsers"
                                placeholder="find your friend"
                            />
                            <label
                                class="material-icons mx-2 text-3xl cursor-pointer"
                                for="search"
                            >search</label
                            >
                            <input type="submit" id="search" hidden />
                        </div>

                    </form>
                </main>
            </>

        )
    }
}
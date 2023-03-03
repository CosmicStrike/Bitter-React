import React from "react";

export default class Reset_Password extends React.Component {

    render() {
        return (
            <body>
                <main>
                    <div
                        class="root flex flex-row justify-center lg:place-content-evenly mt-[200px]"
                    >
                        <div
                            class="form-container border rounded-[3rem] flex flex-col px-[50px] py-[70px] border-white bg-white"
                        >
                            <form
                                id="reset_form"
                                class="flex flex-col w-[360px] lg:w-[400px]"
                                onsubmit="return false;"
                            >
                                <div class="phrase-container flex flex-col justify-center">
                                    <p class="phrase text-xl text-center">
                                        Reset Password
                                    </p>
                                    <p class="phrase text-l text-center font-medium">
                                        {/* {{ uname }} */}
                                    </p>
                                </div>
                                <input
                                    type="password"
                                    id="newpass1"
                                    name="newpass1"
                                    placeholder="Enter new password"
                                    class="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2"
                                />
                                <input
                                    type="password"
                                    id="newpass2"
                                    name="newpass2"
                                    placeholder="Confirm Password"
                                    class="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2"
                                />

                                <input
                                    class="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer disabled:bg-gray-900"
                                    type="submit"
                                    name="reset"
                                    id="resetButton"
                                    value="Reset"
                                />
                            </form>
                        </div>

                        <div class="image-container hidden lg:block">
                            <img
                                src="/static/static_images/forgot.png"
                                alt="someimg"
                                class="w-[600px]"
                            />
                        </div>
                    </div>
                </main>
            </body>
        )
    }
}
import React from "react";

export default class Forgot_Password extends React.Component {

    render() {
        return (
            <body class="bg-[#f7f7f7]">
                <div class="header w-full flex flex-row place-content-between">
                    <p class="pl-2 text-xl mt-4">Bitter</p>
                </div>

                <main>
                    <div
                        class="root flex flex-row justify-center lg:place-content-evenly mt-[150px]"
                    >
                        <div
                            class="form-container border rounded-[3rem] flex flex-col px-[50px] py-[70px] border-white bg-white"
                        >
                            <form
                                id="reg_form"
                                class="flex flex-col w-[360px] lg:w-[400px]"
                                onsubmit="return false;"
                            >
                                <div class="phrase-container flex flex-col pl-1 ">
                                    <p class="phrase text-2xl font-bold text-left pb-2 ">
                                        Reset Password
                                    </p>
                                    <p>
                                        Enter your email address, we will send you a link to reset your password.
                                    </p>
                                </div>
                                <input
                                    class="mt-4 rounded-[1em] h-[35px] pl-[15px] border-2"
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    id="email"
                                />
                                <input
                                    class="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer disabled:bg-gray-900"
                                    type="submit"
                                    name="reset"
                                    id="resetButton"
                                    value="Request reset link"
                                />
                                <a
                                    href="/"
                                    class="flex justify-center mt-[30px] hover:underline underline-offset-1"
                                >
                                    Login instead?
                                </a>
                            </form>
                        </div>

                        <div class="image-container hidden lg:block">
                            <img src="/static/static_images/forgot.png" alt="Forgot Pass"
                                class="w-[600px] " />
                        </div>
                    </div>
                </main>
            </body>)
    }
}
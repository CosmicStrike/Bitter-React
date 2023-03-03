import React from "react";


class Register extends React.Component {

    render() {
        return (
            <body class="bg-[#f7f7f7]">
                <div class="header w-full flex flex-row place-content-between">
                    <p class="pl-2 text-xl mt-4">Bitter</p>
                </div>

                <main>
                    <div class="root flex flex-row justify-center lg:place-content-evenly mt-[100px]">
                        <div class="form-container border rounded-[3rem] flex flex-col px-[50px] py-[70px] border-white bg-white">
                            <form id="reg_form" class="flex flex-col w-[360px] lg:w-[400px]">
                                <div class="phrase-container flex justify-center">
                                    <p class="phrase text-xl text-center">
                                        Create new account
                                    </p>
                                </div>
                                <input class="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2" type="email" name="email"
                                    placeholder="email" id="email" />
                                <input class="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2" type="text" name="username"
                                    placeholder="username" id="username" />
                                <input class="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2" type="password" name="password"
                                    placeholder="Password" id="passwd1" />
                                <input class="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2" type="password" name="password2"
                                    placeholder="Reenter Password" id="passwd2" />
                                <input
                                    class="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer disabled:bg-gray-900"
                                    type="submit" name="reg" id="reg" value="Register" />
                                <a href="/" class="flex justify-center mt-[30px] hover:underline underline-offset-1">
                                    Login instead?
                                </a>
                            </form>
                        </div>

                        <div class="image-container hidden lg:block">
                            <img src={require('../static_images/reg.png')} alt="someimg" class="w-[600px] " />
                        </div>
                    </div>
                </main>
            </body>
        )
    }
}


export default Register
import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    formSubmit = async (event) => {
        event.preventDefault()
        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries())
        // console.log(data)

        const response = await fetch('http://localhost/5000/api/login', {
            method: 'PUT',
            headers: {
                'Accept': 'appication/json',
                'Content-type': 'application/json',
                'credentials': 'include'
            },
            body: JSON.stringify({
                username: data["uname"],
                password: data["passwd"]
            })
        }).then((response) => response.json())

        let status = response.status
        if (status === "success") {
            localStorage.setItem("uname", response.username)
            localStorage.setItem("uid", response.userId);
            window.location.reload()
        }
    }


    render() {
        return (
            <div className="bg-[#f7f7f7]">
                <div className="header w-full flex flex-row place-content-between ">
                    <p className="pl-2 text-xl mt-4">Bitter</p>

                    <button
                        className="bg-white-900 h-[30px] w-[100px] border rounded-full border-purple-900 mt-4 mr-4 text-purple-900 hover:cursor-pointer"
                    >
                        Sign Up
                    </button>
                </div>
                <main className="mt-28">
                    <div className="containerx flex justify-center lg:flex-row lg:place-content-evenly lg:mr-10">
                        <div className="image-container hidden lg:block">
                            <img className="w-[600px] " src={require('../static_images/login.png')} alt="someimage" />
                        </div>

                        <div className="form-container border rounded-[3rem] flex flex-col px-[50px] py-[70px] border-white bg-white  ">
                            <form id="login_form" onSubmit={this.formSubmit} className="login-form flex flex-col w-[360px] lg:w-[400px] ">
                                <div className="phrase-container flex justify-center ">
                                    <p className="phrase text-xl text-center ">
                                        Share your thoughts with people and connect to
                                        them
                                    </p>
                                </div>

                                <input className="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2 " type="text" name="uname"
                                    placeholder="username" id="uname" />
                                <input className="m-[8px] rounded-[1em] h-[35px] pl-[15px] border-2 " type="password" name="passwd"
                                    placeholder="Password" id="passwd" />
                                <input className="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer "
                                    type="submit" name="login_btn" id="login_btn" value="Login" />
                                <a href="/password/reset"
                                    className="forgot-text flex justify-center mt-[50px] hover:underline underline-offset-1">
                                    Forgot password
                                </a>
                                <input type={'submit'} hidden></input>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Login
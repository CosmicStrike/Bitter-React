import React from "react";

export default class Confirm_Mail extends React.Component {

    render() {
        return (<>
            <div class="header w-full flex flex-row place-content-between">
                <p class="pl-2 text-xl mt-4">Bitter</p>
            </div>
            <div class="my-10 mx-10 text-center">
                <p class="text-2xl">
                    We have sent you a confirmation email, confirm your email to
                    continue
                </p>
                <div class="mt-4 ">
                    <label class="font-bold text-lg"
                    >Didn't get the email?
                    </label>
                    &MediumSpace;
                    <a
                        href="#"
                        id="resend"
                        class="text-lg underline underline-offset-1"
                    >
                        click here
                    </a>
                </div>
            </div>
        </>)
    }
}

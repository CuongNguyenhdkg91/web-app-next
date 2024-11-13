//replace logo with an animation icons svg library
'use client'

import auth from "./action"
const Login = () => {
    return(
    <form action ={auth} >
        <div className="wrapper-LoginModal mt-8 mb-[300px] p-8 border-solid rounded-md border border-black max-w-[25cm]">
            <div className="flex flex-col gap-5 text-center text-base">
                <div className = "h-14 px-0">
                    <img className="mx-auto" src="/logo.png" />
                </div>
                <div className = "text-3xl" >Welcome Back</div>
                <div>Please enter your detail to sign in</div>
                <div className = "w-full flex flex-row gap-8 justify-center">
                    <div className = "h-10 w-2/5 border-solid border flex gap-2.5 justify-center items-center text-lg">
                        <img className="h-3/5"src="/google.png" />
                        Google
                    </div>
                    <div className = "h-10 w-2/5 border-solid border flex gap-2.5 justify-center items-center text-lg">
                        <img className="h-3/5" src="/facebook.png" />
                        Facebook
                    </div>
                </div>
                <div>Or continue with email</div>
                <div className="h-16 flex bg-white border border-black border-solid box-border p-2.5">Email address 
                </div>
                <div className="h-16 flex bg-white border border-black border-solid box-border p-2.5">
                    Password
                    <input id="password" name="pass" type="password" />
                </div>
                <div className="text-right">Forgot your password</div>
                <button type="submit" className="border border-solid h-10 flex items-center justify-center">Log in</button>
                <div>Dont have an account? <span>Create an account</span></div>
            </div>
        </div>
    </form>
    )
}

export {Login}
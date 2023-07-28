import React, { useContext } from 'react'
import { loginContext } from '../contexts/loginContext'

export default function Login() {
    const { clickLogin, setclickLogin } = useContext(loginContext);
    // console.log({ clickLogin });

    return (
        (clickLogin) &&
        <div className="flex justify-center">
            <div className="container-sm mt-5 border max-w-4xl bg-white rounded-md z-10 absolute top-[50px]  h-[320px]">
                <header className="flex fle justify-between">
                    <div className="text-2xl pt-2 px-3 font-medium ">Login</div>
                    <div className="mt-[12px] mr-[6px] hover:cursor-pointer">
                        <svg className="" onClick={() => { setclickLogin(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </header>
                <form className="p-3 text-blacj">
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email Address' />
                        <div id="emailHelp" class="form-text text-black">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your Password' />
                    </div>
                    <button type="submit" class="btn bg-red-500 text-white hover:bg-red-600">Submit</button>
                </form>
            </div>
        </div>
    )
}

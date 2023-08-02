import React, { useContext } from 'react'
import { loginContext } from '../contexts/loginContext'

export default function Login() {
    const { clickLogin, setclickLogin } = useContext(loginContext);

    return (
        (clickLogin) &&
        <div className="flex justify-center">
            <div className="container-sm mt-5 border max-w-4xl bg-white rounded-md z-10 absolute top-[50px]  h-[310px]">
                <header className="flex fle justify-between">
                    <div className="text-2xl pt-2 px-3 font-medium ">login</div>
                    <div className="mt-[12px] mr-[6px] hover:cursor-pointer">
                        <svg onClick={() => { setclickLogin(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </header>
                <form className="p-3 text-blacj">
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email Address' required />
                        <div id="emailHelp" className="form-text text-black">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required />
                    </div>
                    <button type="submit" className="btn bg-red-500 text-white hover:bg-red-600">Submit</button>
                </form>
            </div>
        </div>
    )
}

import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function Signup() {
  const { clickSignup, setclickSignup } = useContext(loginContext);
  const { setId, setusername } = useContext(UserContext);

  const [username, setName] = useState();
  const [email, setUserEmail] = useState();
  const [password, setUserPassword] = useState();
  const [signedup, setsignedup] = useState(false);

  async function createUser(ev) {
    ev.preventDefault();
    let data = await axios.post("/register", { username, email, password });
    setId(data._id);
    setusername(data);
  }

  return (
    clickSignup && (
      <div className="flex justify-center">
        <div className="container-sm mt-5 border max-w-4xl bg-white rounded-md z-10 absolute top-[50px]  h-520px]">
          <header className="flex fle justify-between">
            <div className="text-2xl pt-2 px-3 font-medium ">Sign up</div>
            <div className="mt-[12px] mr-[6px] hover:cursor-pointer">
              <svg
                onClick={() => {
                  setclickSignup(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </header>
          <form className="p-3 text-black ">
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label">
                Enter your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="Enter your name"
                required
                onChange={(ev) => {
                  setName(ev.target.value);
                }}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Email Address"
                required
                onChange={(ev) => {
                  setUserEmail(ev.target.value);
                }}
              />
              <div id="emailHelp" className="form-text text-black">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="pass"
                placeholder="Enter your Password"
                autoComplete="section-blue shipping address-level2"
                required
                onChange={(ev) => {
                  setUserPassword(ev.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_pass" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm_pass"
                placeholder="Confirm Password"
                autoComplete="section-blue shipping address-level2"
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to Zomato's{" "}
                <span className="text-red-500"> Terms of Service,</span>
                <span className="text-red-500"> Privacy Policy</span> and{" "}
                <span className="text-red-500">Content Policies</span>
              </label>
            </div>
            <button
              to="/"
              type="submit"
              className="btn bg-red-500 text-white hover:bg-red-600 "
              onClick={createUser}
              onMouseDown={() => {
                setclickSignup(false);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
}

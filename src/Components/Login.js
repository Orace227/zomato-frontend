import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import Input from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import {
  email_validation,
  password_validation,
} from "../utils/inputValidations";
import { toast } from "react-hot-toast";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const { setId, setusername } = useContext(UserContext);
  const { clickLogin, setclickLogin, setclickSignup } =
    useContext(loginContext);
  const [success, setSuccess] = useState(false);
  const methods = useForm();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userData = await axios.get("/profile", {
  //         credentials: "include",
  //       });
  //       setId(userData.data.id);
  //       setusername(userData.data.username);
  //     } catch (err) {
  //       if (err) {
  //         setclickSignup(true);
  //       }
  //     }
  //   };
  //   fetchUserData();
  // }, []);
  const onSubmit = methods.handleSubmit(async ({ email, password }, ev) => {
    try {
      ev.preventDefault();
      let Loggedin = await axios.post(
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (Loggedin) {
        console.log(Loggedin.data);

        toast.success("Congratulations!! You are Logged in");
        setSuccess(true);
        setclickLogin(false);
        methods.reset();
      }
    } catch (error) {
      // console.log(error.message);
      if (error.message === "Network Error") {
        toast.error("Unable to establish a database connection!!");
      }
      if (error.message === "Request failed with status code 401") {
        toast.error("Unable to establish a database connection!!");
      }
    }
  });

  return (
    clickLogin && (
      <FormProvider {...methods}>
        <div className="flex justify-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className="absolute top-[100px] w-[300px] sm:w-[500px] md:w-[700px] p-3 z-10 rounded-md bg-white border-2 border-gray-300 "
          >
            <header className="flex fle justify-between mb-4">
              <div className="text-2xl pt-2 px-3 font-medium ">Log in</div>
              <div className="mt-[12px] mr-[6px] hover:cursor-pointer">
                <svg
                  onClick={() => {
                    setclickLogin(false);
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
            <div className="grid gap-3 md:grid-row">
              <Input {...email_validation} />
              <Input {...password_validation} />
            </div>
            <div className="mt-4 ">
              <button
                onClick={onSubmit}
                className="p-[10px] rounded-md bg-blue-600 font-semibold text-lg text-white flex items-center gap-1 hover:bg-blue-800"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
    )
  );
}

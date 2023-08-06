import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import Input from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import {
  name_validation,
  con_password_validation,
  email_validation,
  password_validation,
} from "../utils/inputValidations";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-hot-toast";

export default function Signup() {
  const { clickSignup, setclickSignup } = useContext(loginContext);
  const { setId, setusername } = useContext(UserContext);
  const [success, setSuccess] = useState(false);
  const methods = useForm();

  const onSubmit = methods.handleSubmit(
    async ({ email, name, password }, ev) => {
      ev.preventDefault();
      // console.log(email,name,password);
      let data = await axios.post("/register", {
        username: name,
        email,
        password,
      });
      setId(data._id);
      setusername(data);
      toast.success("Congratulations!!! You have signed up");
      methods.reset();
      setSuccess(true);
      setclickSignup(false);
    }
  );

  return (
    clickSignup && (
      <FormProvider {...methods}>
        <div className="flex justify-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className="absolute top-[100px] w-[300px] sm:w-[500px] md:w-[700px] p-3 z-10 rounded-md bg-white border-2 border-gray-300"
          >
            <header className="flex fle justify-between mb-4">
              <div className="text-2xl pt-2 px-3 font-medium ">Sign Up</div>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </header>
            <div className="grid gap-3 md:grid-row">
              <Input {...name_validation} />
              <Input {...email_validation} />
              <Input {...password_validation} />
              <Input {...con_password_validation} />
            </div>
            <div className="mt-4 ">
              <button
                onClick={onSubmit}
                className="p-[10px]  rounded-md bg-blue-600 font-semibold text-lg text-white flex items-center gap-1 hover:bg-blue-800"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
    )
  );
}

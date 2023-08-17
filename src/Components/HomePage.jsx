import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer";
import Head from "../Components/Head";
import Head2 from "../Components/Head2";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Options from "../Components/Options";
import Signup from "../Components/Signup";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Login />
      <Signup />
      <Toaster />
      <Head />
      <Head2 />
      <Options />
      <Footer />
    </>
  );
}

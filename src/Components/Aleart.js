import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Aleart() {
  const notify = () => toast("Here is your toast.");

  return (
    <div className="z-10">
      <Toaster />
    </div>
  );
}

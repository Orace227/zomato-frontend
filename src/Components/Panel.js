import React from "react";

export default function Panel(props) {
  return (
    <>
      <div className="container-sm flex ">
        <div className="flex flex-col gap-14 w-full">
          <div className="flex justify-start">
            <h1 className="text-4xl m-4">{props.title}</h1>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <img className="w-[200px] mb-2" src={props.url} alt="review" />
            <h1 className="text-2xl">{props.text}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

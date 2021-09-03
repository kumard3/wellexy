import React from "react";
import CouponsData from "../data/coupons";

function Card(props) {
  return (
    <div className="w-[20%] m-5">
      <img src={props.img} alt="image" />
      <div className="w-[95%] mx-auto pt-3 rounded-md -mt-1 pb-2 px-2 flex justify-between items-center border">
        <span className="font-bold text-md">{props.code}</span>

        <span
          className=" text-green-600 font-bold text-md cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(props.code);
            alert("Code copied.");
          }}
        >
          Copy
        </span>
      </div>
    </div>
  );
}

function CreateCard(data) {
  return <Card img={data.img} code={data.code} />;
}

export default function Offers() {
  return (
    <div className="p-10 flex flex-wrap justify-around">
      {CouponsData.map(CreateCard)}
      {console.log("hi")}
    </div>
  );
}

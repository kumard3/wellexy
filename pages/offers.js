import React from "react";
import CouponsData from "../data/coupons";

function Card(props) {
  return (
    <div className="border w-[20%]">
      <img src={props.img} alt="image" />
      <div className="flex justify-between items-center">
        <p>{props.code}</p>
        <span className="text-green-600 font-bold text-md">Copy</span>
      </div>
    </div>
  );
}

function CreateCard(data) {
  return <Card img={data.img} code={data.code} />;
}

export default function Offers() {
  return (
    <div className="flex flex-wrap p-5 justify-around">
      {CouponsData.map(CreateCard)}
      {console.log("hi")}
    </div>
  );
}

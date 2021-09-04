import { PlusOutlined } from "@ant-design/icons";
import React from "react";

export default function ProductCard() {
  return (
    <div className="w-[250px] bg-white m-2 border rounded-sm overflow-hidden">
      <div className="relative flex justify-center items-center h-[250px] overflow-hidden p-3">
        <img
          src={
            "https://s3.amazonaws.com/redqteam.com/pickbazar/medicine/K_Mom_Natural_Pureness_Premium_Baby_Wipes_With_Cap_100s.jpg"
          }
          alt="product image"
        />
        <div className="w-[50px] h-[50px] flex justify-center items-center absolute bottom-3 right-3 bg-green-600 cursor-pointer rounded-full z-1 text-white">
          <PlusOutlined className="text-2xl" />
        </div>
      </div>

      <div className="p-3">
        <p className="m-0 text-lg">₹ 500</p>
        <p className="m-0 text-md truncate">K Mom Natural Pureness Premium 20mg</p>
        <p className="m-0 text-md">1 Box (10 tablates)</p>
      </div>
    </div>
  );
}

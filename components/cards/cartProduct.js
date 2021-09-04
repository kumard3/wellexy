import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";

export default function CartProduct() {
  return (
    <div className="bg-white my-2 max-w-[499px] mx-auto border rounded-sm overflow-hidden flex items-center">
      <div className="flex justify-center items-center w-[100px] overflow-hidden p-1">
        <img
          src={
            "https://s3.amazonaws.com/redqteam.com/pickbazar/medicine/K_Mom_Natural_Pureness_Premium_Baby_Wipes_With_Cap_100s.jpg"
          }
          alt="product image"
        />
      </div>

      <div className="p-3">
        <p className="m-0 text-lg truncate font-bold">
          K Mom Natural Pureness Premium 20mg
        </p>
        <div className="flex justify-between">
          <p className="m-0 text-md w-[50%]">₹ 500</p>
          <p className="m-0 text-md w-[50%] text-green-600 font-bold">₹ 1000</p>
        </div>
        <p className="m-0 text-md">2 x 1 Box (10 tablates)</p>
      </div>

      <div className="w-[35px] flex flex-col justify-between bg-gray-100 rounded-3xl mx-2 overflow-hidden">
        <span className="p-1 bg-gray-300 cursor-pointer">
          <PlusOutlined className="text-xl" />
        </span>
        <span className="flex justify-center items-center">1</span>
        <span className="p-1 bg-gray-300 cursor-pointer">
          <MinusOutlined className="text-xl" />
        </span>
      </div>
    </div>
  );
}

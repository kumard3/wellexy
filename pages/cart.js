import { Button } from "antd";
import Link from "next/link";
import React from "react";

function EmptyCart() {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="text-center">
        <img
          src="/shopping-bag.svg"
          alt="icon"
          width="100px"
          className="mx-auto"
        />
        <h3 className="m-5">Opps! your cart is empty</h3>
        <Link href="/">
          <Button size="large" className="m-5">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <div>
      <EmptyCart />
    </div>
  );
}

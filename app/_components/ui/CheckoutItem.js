"use client";

import Image from "next/image";

function CheckoutItem({ item }) {

  return (
    <div className="flex justify-between items-center my-8 border-b border-b-rose-200 p-2">
      <div className="h-16 flex gap-2">
        <div className="relative h-full w-16 rounded-sm">
          <Image src={item.image.mobile} fill alt="item image" />
        </div>
        <div>
          <h2 className="font-bold text-xl text-rose-900 mb-3">{item.name} </h2>
          <span className="flex gap-4 items-center">
            <h2 className="text-lg text-redColor ">{item.quantity}x</h2>
            <p className="text-rose-300">@ ${item.price}</p>
          </span>
        </div>
      </div>
      <h2 className="text-lg text-rose-900 ">${item.quantity * item.price}</h2>
    </div>
  );
}

export default CheckoutItem;

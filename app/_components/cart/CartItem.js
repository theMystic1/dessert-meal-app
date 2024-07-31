"use client";

import { useCart } from "@/app/contexts/CartContext";
import removeIcon from "@/public/assets/images/icon-remove-item.svg";
import Image from "next/image";

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  function handleRemove() {
    removeFromCart(item.name);
  }
  return (
    <div className="flex justify-between items-center my-8 border-b border-b-rose-200 p-2">
      <div className="">
        <h2 className="font-bold text-xl text-rose-900 mb-3">{item.name} </h2>
        <span className="flex gap-4 items-center">
          <h2 className="text-lg text-redColor ">{item.quantity}x</h2>
          <p className="text-rose-300">@ ${item.price}</p>
          <p className="text-rose-400 font-semibold">
            {" "}
            ${item.price * item?.quantity}
          </p>
        </span>
      </div>
      <button
        className="h-6 w-6 relative rounded-full border border-rose-400 "
        onClick={handleRemove}
      >
        <Image src={removeIcon} fill alt="remove icon" />
      </button>
    </div>
  );
}

export default CartItem;

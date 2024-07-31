"use client";

import Header from "../ui/Header";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import carbonNeutral from "@/public/assets/images/icon-carbon-neutral.svg";
import Image from "next/image";
import Button from "../ui/Button";
import { useCart } from "@/app/contexts/CartContext";

function Cart({ handleConfirmation }) {
  const { cart } = useCart();

  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, curv) => acc + curv, 0);

  return (
    <div className="w-full min-h-80 rounded-md bg-white p-4">
      <Header clasName="text-redColor">Your Cart ({cart.length})</Header>

      {cart.length > 0 ? (
        <div className="flex flex-col ">
          {cart.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}

          <div className="flex justify-between items-center">
            <p className="font-light"> Order Total</p>
            <h1 className="font-bold text-2xl ">${totalPrice}</h1>
          </div>
          <div className="flex justify-center items-center gap-2 w-full bg-rose-100 rounded-md h-16 my-8">
            <div className="relative h-6 w-6">
              <Image src={carbonNeutral} fill alt="Carbon " />
            </div>
            <p>
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <Button type="secondary" onClick={handleConfirmation}>
            Confirm Order
          </Button>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;

"use client";

import Header from "../ui/Header";
import orderIcon from "@/public/assets/images/icon-order-confirmed.svg";
import Image from "next/image";
import Button from "../ui/Button";
import { useCart } from "@/app/contexts/CartContext";
import CheckoutItem from "./CheckoutItem";

function Checkout({ setIsConfirmed }) {
  const { cart, clearCart } = useCart();

  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, curv) => acc + curv, 0);

  function handleNewOrder() {
    setIsConfirmed(false);
    clearCart();
  }
  return (
    <div className=" w-full md:w-[500px] min-h-80 rounded-md bg-white p-4">
      <div className="my-4 relative h-10 w-10">
        <Image src={orderIcon} fill alt="order icon" />
      </div>
      <Header clasName="">Order Confirmed</Header>

      <p className="text-rose-500 my-4 font-semibold">
        {" "}
        We hope you enjoy your order
      </p>

      <div className="flex flex-col bg-rose-100 w-full rounded-md p-4">
        {cart.map((item) => (
          <CheckoutItem key={item.name} item={item} />
        ))}

        <div className="flex justify-between items-center">
          <p className="font-light"> Order Total</p>
          <h1 className="font-bold text-2xl ">${totalPrice}</h1>
        </div>

        <Button type="secondary" onClick={handleNewOrder}>
          Start New Order
        </Button>
      </div>
    </div>
  );
}

export default Checkout;

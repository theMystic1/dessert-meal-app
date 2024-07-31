"use client";

import Image from "next/image";
import Button from "./Button";
import { useCart } from "@/app/contexts/CartContext";

function DessertItem({ item }) {
  const { cart, addToCart, isInCart, incDecItem } = useCart();

  function removeLeadingDot(filePath) {
    if (filePath.startsWith(".")) {
      return filePath.slice(1);
    }
    return filePath;
  }

  function handleAddCart() {
    addToCart(item);
  }

  function handleIncDec(type) {
    const min = 1;
    const quantityCount = cart.find((itm) => itm.name === item.name)?.quantity;
    if (type === "dec" && quantityCount === min) return;

    incDecItem(type, item.name);
  }

  return (
    <div className={`min-w-60 w-full `}>
      {/*  */}
      <div
        className={`relative w-full h-60 rounded-md ${
          isInCart(item) ? "border-2 border-redColor" : ""
        }`}
      >
        <Image
          src={removeLeadingDot(item.image.desktop)}
          fill
          alt="Dessert image"
          className="object-cover object-top rounded-md"
        />
        <div className="absolute z-50 bottom-[-20px] left-10 transform w-60">
          {isInCart(item) ? (
            <Button type="cartCount" handleIncDec={handleIncDec}>
              {isInCart(item)
                ? cart.find((itm) => itm.name === item.name)?.quantity
                : null}
            </Button>
          ) : (
            <Button type="addCart" onClick={handleAddCart} />
          )}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-rose-500">{item.name}</p>
        <p className="text-rose-900 font-semibold text-[18px]">
          {item.category}
        </p>
        <p className="text-redColor font-semibold">${item.price}</p>
      </div>
    </div>
  );
}

export default DessertItem;

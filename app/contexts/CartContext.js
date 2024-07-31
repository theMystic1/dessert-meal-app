"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    let quantity = 1;
    const newItem = { ...item, quantity };
    setCart((prevCart) => [...prevCart, newItem]);
  }

  function removeFromCart(name) {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  }

  function incDecItem(type, name) {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            quantity:
              type === "inc"
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 0),
          };
        }
        return item;
      })
    );
  }

  function isInCart(item) {
    return cart.some((cartItem) => cartItem.name === item.name);
  }

  function clearCart() {
    setCart([]);
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    incDecItem,
    isInCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error(
      "Cart context was used outside of the Cart context provider"
    );

  return context;
}

export { useCart, CartProvider };

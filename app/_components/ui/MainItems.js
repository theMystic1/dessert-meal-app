"use client";

import { useState } from "react";
import Cart from "../cart/Cart";
import DessertItem from "./DessertItem";
import Header from "./Header";
import Overlay from "./Overlay";
import Checkout from "./Checkout";

function MainItems({ data }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleConfirmation() {
    setIsConfirmed(true);
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-12 xl:gap-4">
      <div className="">
        <Header>Desserts</Header>

        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {data.map((item) => (
            <DessertItem key={item.name} item={item} />
          ))}
        </div>
      </div>

      {isConfirmed ? (
        <Overlay>
          <Checkout setIsConfirmed={setIsConfirmed} />
        </Overlay>
      ) : null}
      <div className=" ">
        <Cart
          handleConfirmation={handleConfirmation}
          setIsConfirmed={setIsConfirmed}
        />
      </div>
    </div>
  );
}

export default MainItems;

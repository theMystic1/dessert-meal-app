import emptyCartIcon from "@/public/assets/images/illustration-empty-cart.svg";
import Image from "next/image";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-full">
      <div className="relative h-40 w-40">
        <Image src={emptyCartIcon} fill alt="Empty Cart Icon" />
      </div>
      <p className="text-rose-400 ">Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;

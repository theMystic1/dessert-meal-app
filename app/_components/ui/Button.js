import Image from "next/image";
import cartImg from "@/public/assets/images/icon-add-to-cart.svg";

function Button({ children, type, onClick, handleIncDec }) {
  function handleInc(type) {
    handleIncDec(type);
  }

  if (type === "cartCount") {
    return (
      <div className="bg-redColor px-4 py-2 flex items-center justify-between rounded-[30px] text-white w-40 font-semi-bold text-lg">
        <Count onClick={() => handleInc("dec")}>-</Count>
        <span>{children}</span>
        <Count onClick={() => handleInc("inc")}>+</Count>
      </div>
    );
  }

  if (type === "secondary") {
    return (
      <button
        className="bg-redColor px-4 py-3 flex items-center justify-center rounded-[30px] text-white font-semibold text-lg hover:bg-rose-800"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === "addCart") {
    return (
      <button
        className="bg-white px-2 md:px-4 py-2 flex items-center justify-center gap-2 rounded-[30px] center text-black hover:text-redColor font-semibold border-2 border-rose-400 hover:border-redColor min-w-40"
        onClick={onClick}
      >
        <span className="relative h-6 w-6 ">
          <Image src={cartImg} fill alt="cart image" />
        </span>
        Add to Cart
      </button>
    );
  }

  return null; // Ensure function returns a valid React node
}

function Count({ children, onClick }) {
  return (
    <button
      className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-white font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

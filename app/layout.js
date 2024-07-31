import "./_styles/globals.css";
import "./_styles/fonts.css";

import { CartProvider } from "./contexts/CartContext";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dessert Meals",
  description: "The best meals in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-redHat bg-rose-100`}>
        <main className=" mx-auto w-full min-h-[1000px] p-4 lg:p-16 ">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}

 "use client"

import Cart from "@/components/front-end/Cart";
import Navbar from "@/components/front-end/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);


  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      <Cart setShowCart={setShowCart} />
    </main>
  );
}

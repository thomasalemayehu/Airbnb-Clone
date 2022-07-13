import React from "react";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";
import { useSession } from "next-auth/react";

function Cart() {
  const { data: session } = useSession();
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Cart"} />

      <Header />

      <main className="mt-3 px-3">
        <h1>Your Cart</h1>

        {!session && <h1>Login</h1>}
      </main>
    </>
  );
}

export default Cart;

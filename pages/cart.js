import React from "react";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";

function Cart() {
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Cart"} />

      <Header />

      <main className="mt-3 px-3">
        <h1>Your Cart</h1>
      </main>
    </>
  );
}

export default Cart;

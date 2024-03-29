import React from "react";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/cartSlice";
import SearchInfoCard from "../components/SearchInfoCard";
import Image from "next/legacy/image";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Spinner from "../components/Spinner";
const stripePromise = loadStripe(process.env.stripe_public_key);
function Cart() {
  const { data: session } = useSession();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  const router = useRouter();
  const itemsInCart = useSelector(selectItems);
  const sumPrice = useSelector(selectTotal);

  // Checkout function
  const createCheckoutSession = async () => {
    setCheckoutLoading(true);
    const stripe = await stripePromise;

    // create checkout session
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      itemsInCart,
      email: session.user?.email,
    });

    // redirect
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
    setCheckoutLoading(false);
  };

  return (
    <>
      <CustomHead pageTitle={"Airbnb - Cart"} />

      <Header />

      <main className="">
        {/* not logged in */}
        {!session && (
          <div className="mt-24 px-8 xl:px-24 flex items-center  ">
            {/* Left */}

            <div className="relative hidden md:inline-block w-[350px] h-[350px] lg:w-[420px] lg:h-[420px]  xl:w-[520px] xl:h-[520px]">
              <Image
                src="/Icons/Cart.svg"
                alt="Airbnb logo"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>

            {/* right */}
            <div className="mx-[10%] xl:mx-[15%]  mt-12 md:mt-0  w-[100%] md:w-auto">
              <h5 className="text-primary text-3xl flex items-center justify-center xl:text-5xl font-semibold">
                Login to Airbnb
              </h5>
              <h6 className="mt-2 text-base">Login to view your cart</h6>
              <button
                className="large-button mt-6 w-2/5 py-2"
                onClick={() => router.push("/auth")}
              >
                Login
              </button>
            </div>
          </div>
        )}

        {/* No Item */}
        {session && itemsInCart.length < 1 && (
          <div className="mt-24 px-8 xl:px-24 flex items-center  ">
            {/* Left */}

            <div className="relative hidden md:inline-block w-[350px] h-[350px] lg:w-[420px] lg:h-[420px]  xl:w-[520px] xl:h-[520px]">
              <Image
                src="/Icons/Cart.svg"
                alt="Airbnb logo"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>

            {/* right */}
            <div className="mx-[10%] xl:mx-[15%]  mt-12 md:mt-0  w-[100%] md:w-auto">
              <h5 className="text-primary text-3xl flex items-center justify-center xl:text-5xl font-semibold">
                Your Cart is Empty
              </h5>
              <h6 className="mt-2 text-base">Add Items to your cart</h6>
            </div>
          </div>
        )}

        {/* item */}
        <div className="pb-12 px-3 pt-3">
          {session &&
            itemsInCart.length >= 1 &&
            itemsInCart?.map(
              (
                {
                  id,
                  image,
                  location,
                  title,
                  description,
                  star,
                  price,
                  total,
                  longitude,
                  latitude,
                  startDate,
                  endDate,
                  numberOfGuests,
                  daysOfStay,
                },
                index
              ) => (
                <SearchInfoCard
                  key={index}
                  id={id}
                  image={image}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  longitude={longitude}
                  latitude={latitude}
                  startDate={startDate}
                  endDate={endDate}
                  numberOfGuests={numberOfGuests}
                  daysOfStay={daysOfStay}
                  isCheckout={true}
                />
              )
            )}

          {/* Checkout button */}
          {itemsInCart.length >= 1 && (
            <div className="flex flex-col mx-auto  w-2/5  mt-16">
              <div className="font-bold text-lg">
                Grand Total: <div>{sumPrice} ETB</div>
              </div>
              <button
                className="large-button py-2 mt-3"
                onClick={createCheckoutSession}
                disabled={!session}
              >
                {isCheckoutLoading ? <Spinner></Spinner> : "Checkout"}
              </button>
            </div>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}

export default Cart;

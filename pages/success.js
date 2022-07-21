import React from "react";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import CustomHead from "../components/CustomHead";

function Success() {
  const router = useRouter();
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Success"}></CustomHead>
      <Header />

      {/* Message */}
      <div className="px-12 py-12 mx-16 mt-12 bg-gray-100">
        <div className="flex">
          <CheckCircleIcon className="h-10 mr-4 text-primary" />
          <h1 className="text-3xl font-semibold">
            Thank You! Your Booking has been confirmed!
          </h1>
        </div>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          consectetur ullam et a? Enim, iusto quam possimus maxime nostrum ea.
          Sapiente praesentium excepturi quaerat inventore officia soluta
          dignissimos commodi voluptatem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium consectetur ullam et a? Enim, iusto quam
          possimus maxime nostrum ea. Sapiente praesentium excepturi quaerat
          inventore officia soluta dignissimos commodi voluptatem!
        </p>

        <button
          className="normal-button mt-8"
          onClick={() => {
            router.push("/");
          }}
        >
          Go Home
        </button>
      </div>
    </>
  );
}

export default Success;

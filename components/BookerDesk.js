import React from "react";

function BookerDesk() {
  return (
    <div className="hidden lg:inline-block w-[360px] my-auto shadow-md rounded-2xl px-12 py-4 text-sm mt-3 hover:bg-gray-100 transition duration-200 ease-out">
      {/* rate */}
      <div className="text-xl font-bold">$1091/night</div>

      {/* dates */}
      <div className="flex mt-4">
        {/* check in */}
        <span className="flex-grow ">
          <span className="text-xs font-bold">CHECK-IN</span>
          <div className="text-base">02/12/22</div>
        </span>
        {/* checkout */}
        <span>
          <span className=" text-xs font-bold">CHECK-OUT</span>
          <div>02/16/22</div>
        </span>
      </div>

      {/* guests */}
      <div className="mt-4">
        <span className="text-xs font-bold">GUESTS</span>
        <div>1 guest</div>
      </div>

      {/* Button */}
      <button className="large-button mt-6">Book Now</button>

      {/* desc */}
      <div className="mt-2  text-sm text-center text-gray-500">
        You{` won't `}be charged yet
      </div>

      {/* cost */}
      <div className="mt-4 text-base">
        {/* main */}
        <div className="flex">
          <span className="flex-grow">$1091 x 7 nights</span>
          <span>$7637</span>
        </div>

        {/* cleaning */}
        <div className="mt-2 flex">
          <span className="flex-grow">Cleaning Fee</span>
          <span>$172</span>
        </div>

        {/* Service */}
        <div className="mt-2 flex">
          <span className="flex-grow">Service Fee</span>
          <span>$72</span>
        </div>

        {/* Tax */}
        <div className="mt-2 pb-4 border-b flex">
          <span className="flex-grow">Tax Fee</span>
          <span>$231</span>
        </div>

        {/* Total */}
        <div className="mt-2 text-xl font-semibold flex">
          <span className="flex-grow">Total Fee</span>
          <span>$8769</span>
        </div>
      </div>
    </div>
  );
}

export default BookerDesk;

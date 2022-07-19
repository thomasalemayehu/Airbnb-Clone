import React from "react";
import Currency from "react-currency-formatter";
const USD_TO_ETB = 53.3;

function BookerDesk({ price, startDate, endDate, numberOfGuests, daysOfStay }) {
  return (
    <div className="hidden lg:inline-block w-[360px] my-auto shadow-md rounded-2xl px-12 py-4 text-sm mt-3 hover:bg-gray-100 transition duration-200 ease-out">
      {/* rate */}
      <div className="text-xl font-bold">
        <Currency quantity={price * USD_TO_ETB} currency="etb" /> / Night
      </div>

      {/* dates */}
      <div className="flex mt-4">
        {/* check in */}
        <span className="flex-grow ">
          <span className="text-xs font-bold">CHECK-IN</span>
          <div className="text-base">
            {startDate.split("T")[0].split("-").join("/")}{" "}
          </div>
        </span>
        {/* checkout */}
        <span>
          <span className=" text-xs font-bold">CHECK-OUT</span>
          <div> {endDate.split("T")[0].split("-").join("/")} </div>
        </span>
      </div>

      {/* guests */}
      <div className="mt-4">
        <span className="text-xs font-bold">GUESTS</span>
        <div>{numberOfGuests} guest</div>
      </div>

      {/* Button */}
      <button className="large-button mt-6">Checkout Now</button>

      {/* desc */}
      <div className="mt-2  text-sm text-center text-gray-500">
        You{` won't `}be charged yet
      </div>

      {/* cost */}
      <div className="mt-4 text-base">
        {/* main */}
        <div className="flex">
          <span className="flex-grow">
            <Currency quantity={price * USD_TO_ETB} currency="etb" /> x{" "}
            {daysOfStay} nights
          </span>
          <span>
            <Currency
              quantity={price * USD_TO_ETB * daysOfStay}
              currency="etb"
            />
          </span>
        </div>

        {/* cleaning  - 0.4% */}
        <div className="mt-2 flex">
          <span className="flex-grow">Cleaning Fee</span>
          <span>
            <Currency
              quantity={price * USD_TO_ETB * daysOfStay * 0.04}
              currency="etb"
            />
          </span>
        </div>

        {/* Service 0.25 % */}
        <div className="mt-2 flex">
          <span className="flex-grow">Service Fee</span>
          <span>
            <Currency
              quantity={price * USD_TO_ETB * daysOfStay * 0.025}
              currency="etb"
            />
          </span>
        </div>

        {/* Tax */}
        <div className="mt-2 pb-4 border-b flex">
          <span className="flex-grow">Tax Fee</span>
          <span>
            <Currency
              quantity={price * USD_TO_ETB * daysOfStay * 1.065 * 0.35}
              currency="etb"
            />
          </span>
        </div>

        {/* Total */}
        <div className="mt-2 text-xl font-semibold flex">
          <span className="flex-grow">Total Fee</span>
          <span>
            <Currency
              quantity={price * USD_TO_ETB * daysOfStay * 1.415}
              currency="etb"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookerDesk;

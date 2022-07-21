import React from "react";
import moment from "moment";
import Currency from "react-currency-formatter";

function BookingsCard({
  id,
  amount,
  description,
  images,
  numberOfGuests,
  price,
  startDate,
  endDate,
  title,
  timestamp,
}) {
  const USD_TO_ETB = 53.33;
  return (
    <div className="mt-12 shadow-md relative  border rounded-md hover:shadow-lg transition duration-200 ease-out pb-4">
      {/* Meta Info */}
      <div className="flex items-center bg-primaryLight space-x-10 p-5 text-sm">
        <div className="">
          <p className="font-bold text-xs">Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount * USD_TO_ETB} currency="etb"></Currency>
          </p>
        </div>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>

      <div className="flex mt-4 px-4">
        {/* Info */}
        <div className="flex-grow">
          <p className="text-base">{title.replaceAll('"', "")}</p>
          <p className="text-sm text-gray-600">
            {description.replaceAll('"', "")}
          </p>
        </div>

        {/* Date */}
        <div>
          <p className="text-base">
            {startDate.replaceAll('"', "").split("T")[0].replaceAll("-", "/")} -{" "}
            {""}
            {endDate.replaceAll('"', "").split("T")[0].replaceAll("-", "/")}
          </p>
          <p className="text-sm text-gray-600">
            {numberOfGuests.replaceAll('"', "") + " "}{" "}
            {numberOfGuests > 1 ? "guests" : "guest"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingsCard;

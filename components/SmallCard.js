import React from "react";
import Image from "next/image";

function SmallCard({ image, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-primaryLight hover:scale-105 transition duration-200 ease-out ">
      <div className="relative h-16 w-16 bg-primaryLight rounded-lg">
        <Image
          src={image}
          layout="fill"
          className="rounded-lg"
          alt={location}
        />
      </div>

      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;

import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function SearchInfoCard({
  image,
  location,
  title,
  description,
  star,
  price,
  total,
  longitude,
  latitude,
}) {
  return (
    <div className="flex py-8 px-4  cursor-pointer  hover:opacity-90 hover:shadow-lg transition duration-200 ease-out">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink bg-gray-100 rounded-lg">
        <Image
          src={image}
          layout="fill"
          alt={title}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>

          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 p-2 border-red-600" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          {/* left */}
          <p className="flex items-center space-x-1">
            <StarIcon className="h-5 text-red-400" />
            <span>{star}</span>
          </p>
          <div>
            <p className="text-l lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInfoCard;

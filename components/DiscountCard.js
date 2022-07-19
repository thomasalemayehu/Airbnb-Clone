import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import {
  selectBookmarkItems,
  addToBookmark,
  removeFromBookmark,
} from "../slices/bookmarkSlice";
import { useSelector } from "react-redux";

function DiscountCard({
  id,
  img,
  location,
  title,
  description,
  star,
  price,
  long,
  lat,
  discountRate,
  isCheckout = false,
}) {
  const router = useRouter();
  const isBookmarked = itemsInBookmark.filter((item) => item.id == id);
  const itemsInBookmark = useSelector(selectBookmarkItems);
  return (
    <div className="px-3 py-3">
      {/* Image */}
      <div className="relative h-48 w-72 md:h-52 md:w-60 flex-shrink bg-primaryLight rounded-lg mb-3 md:mb-0 cursor-pointer overflow-hidden">
        {/* Image */}
        <Image src={img} alt={title} layout="fill" />

        {/* Banner */}
        <div className="w-[100%] h-[100%] bg-[#9481ffa1] z-20 absolute top-0 right-0 hover:opacity-0 flex items-center justify-center font-bold text-2xl italic transition duration-200 ease-out">
          {discountRate}% OFF
        </div>
      </div>

      <div className="flex flex-col flex-grow pl-0 md:pl-5">
        <div className="flex justify-between">
          <p
            className="hover:underline cursor-pointer"
            onClick={() =>
              router.push({
                pathname: "/detail",
                query: {
                  id: id,
                },
              })
            }
          >
            {location}
          </p>

          <HeartIcon
            onClick={
              isBookmarked.length > 0
                ? removeItemFromBookmark
                : addItemToBookmark
            }
            className={`h-7 cursor-pointer text-primary transition-all duration-200 ease-out ${
              isBookmarked.length > 0 ? "fill-primary" : ""
            }`}
          />
        </div>

        <h4
          className="hover:underline cursor-pointer text-xl"
          onClick={() =>
            router.push({
              pathname: "/detail",
              query: {
                id: id,
              },
            })
          }
        >
          {title}
        </h4>

        <div className="border-b w-10 p-2  border-primary" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          {/* left */}
          <p className="flex items-center space-x-1">
            {/* <StarIcon className="h-5 text-primary" /> */}
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

export default DiscountCard;

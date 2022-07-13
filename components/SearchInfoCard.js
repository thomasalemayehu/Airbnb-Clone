import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

function SearchInfoCard({
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
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const addPlaceToCart = () => {
    if (session && session.user) {
      dispatch(
        addToCart({
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
        })
      );
      toast.success(`${title} added to cart!`);
    } else {
      toast.error("Login to Add to Cart");
    }
  };
  return (
    <main className="py-2 pb-4 cursor-pointer  hover:opacity-90 hover:shadow-lg transition duration-200 ease-out">
      {/* Card */}
      <div
        className="flex py-8 px-4 flex-col md:flex-row mx-auto "
        onClick={() =>
          router.push({
            pathname: "/detail",
            query: { id: id },
          })
        }
      >
        <div className="relative h-48 w-72 md:h-52 md:w-60 flex-shrink bg-primaryLight rounded-lg mb-3 md:mb-0">
          <Image
            src={image}
            layout="fill"
            alt={title}
            objectFit="cover"
            className="rounded-lg mx-auto mb-100"
          />
        </div>

        <div className="flex flex-col flex-grow pl-0 md:pl-5">
          <div className="flex justify-between">
            <p>{location}</p>

            <HeartIcon className="h-7 cursor-pointer" />
          </div>

          <h4 className="text-xl">{title}</h4>

          <div className="border-b w-10 p-2  border-primary" />

          <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

          <div className="flex justify-between items-end pt-5">
            {/* left */}
            <p className="flex items-center space-x-1">
              <StarIcon className="h-5 text-primary" />
              <span>{star}</span>
            </p>
            <div>
              <p className="text-l lg:text-2xl font-semibold pb-2">{price}</p>
              <p className="text-right font-extralight">{total}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 mt-3">
        <button
          className="normal-button"
          onClick={() => {
            addPlaceToCart();
          }}
        >
          Book Now
        </button>
      </div>
    </main>
  );
}

export default SearchInfoCard;

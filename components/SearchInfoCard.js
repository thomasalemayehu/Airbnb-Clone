import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { selectItems } from "../slices/cartSlice";
import { useSession } from "next-auth/react";
import {
  selectBookmarkItems,
  addToBookmark,
  removeFromBookmark,
} from "../slices/bookmarkSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";

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
  startDate,
  endDate,
  numberOfGuests,
  isCheckout = false,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const itemsInBookmark = useSelector(selectBookmarkItems);
  const itemsInCart = useSelector(selectItems);

  const isBookmarked = itemsInBookmark.filter((item) => item.id == id);
  const addPlaceToCart = () => {
    if (session && session.user) {
      const doesExist = itemsInCart.filter((item) => item.id == id);

      if (doesExist > 0) {
        dispatch(removeFromCart(id));
      }

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
          startDate,
          endDate,
          numberOfGuests,
        })
      );
      toast.success(`${title} added to cart!`);
    } else {
      toast.error("Login to Add to Cart");
    }
  };
  const removePlaceFromCart = () => {
    if (session && session.user) {
      dispatch(
        removeFromCart({
          id,
        })
      );
      toast.success(`${title} removed from cart!`);
    } else {
      toast.error("Login to Change to Cart");
    }
  };
  const addItemToBookmark = () => {
    if (session && session.user) {
      dispatch(
        addToBookmark({
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
      toast.success(`${location} added to wishlist!`);
    } else {
      toast.error(`Login to add ${location} to your wishlist!`);
    }
  };

  const removeItemFromBookmark = () => {
    if (session && session.user) {
      dispatch(removeFromBookmark({ id }));
      toast.success(`${location} removed from wishlist!`);
    } else {
      toast.error("Please Login");
    }
  };

  const USD_TO_ETB = 53.33;

  // const totalStayCost = int.parse(prices) * int.parse(total);

  return (
    <main className="py-2 pb-4 r  hover:opacity-90 hover:shadow-lg transition duration-200 ease-out">
      {/* Card */}
      <div className="flex py-8 px-4 flex-col md:flex-row mx-auto ">
        <div
          className="relative h-48 w-72 md:h-52 md:w-60 flex-shrink bg-primaryLight rounded-lg mb-3 md:mb-0 cursor-pointer"
          onClick={() =>
            router.push({
              pathname: "/detail",
              query: {
                id: id,
                startDate: startDate,
                endDate: endDate,
                numberOfGuests: numberOfGuests,
                daysOfStay: total,
              },
            })
          }
        >
          <Image
            src={image}
            layout="fill"
            alt={title}
            objectFit="cover"
            className="rounded-lg mx-auto mb-100 "
          />
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
                    startDate: startDate,
                    endDate: endDate,
                    numberOfGuests: numberOfGuests,
                    daysOfStay: total,
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
                  startDate: startDate,
                  endDate: endDate,
                  numberOfGuests: numberOfGuests,
                  daysOfStay: total,
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
              <StarIcon className="h-5 text-primary" />
              <span>{star}</span>
            </p>
            <div>
              <p className="text-l lg:text-2xl font-semibold pb-2">
                <Currency
                  currency="etb"
                  quantity={price * USD_TO_ETB}
                ></Currency>{" "}
                / Night
              </p>
              <p className="text-right font-light">
                <Currency
                  currency="etb"
                  quantity={price * total * USD_TO_ETB * 1.415}
                ></Currency>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 mt-3">
        {/* Book Button */}
        {!isCheckout && (
          <button className="normal-button" onClick={addPlaceToCart}>
            Book Now
          </button>
        )}

        {/* checkout button */}
        {isCheckout && (
          <button className="normal-button" onClick={removePlaceFromCart}>
            Remove
          </button>
        )}
      </div>
    </main>
  );
}

export default SearchInfoCard;

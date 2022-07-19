import React from "react";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";
import { selectBookmarkItems } from "../slices/bookmarkSlice";
import { useSelector } from "react-redux";
import SearchInfoCard from "../components/SearchInfoCard";
import { useSession } from "next-auth/react";

function Wishlist() {
  const itemsInBookmark = useSelector(selectBookmarkItems);
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Wishlist"}></CustomHead>
      <Header />
      <main className="px-2 md:px-8 lg:px-12 xl:px-16 py-8">
        <h1 className="mt-2 text-2xl pb-2 font-semibold ">Your Wishlist</h1>
        <div className="border-b border-primary w-[32px] mb-6 ml-1"></div>
        {itemsInBookmark.length > 0 &&
          itemsInBookmark?.map(
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
              />
            )
          )}

        {itemsInBookmark.length === 0 && (
          <h1 className="text-3xl w-full h-[350px] flex items-center justify-center ">
            {" "}
            Your Wishlist is Empty
          </h1>
        )}
      </main>
    </>
  );
}

export default Wishlist;

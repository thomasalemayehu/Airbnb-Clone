import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import CustomHead from "../components/CustomHead";
import Image from "next/image";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/solid";
import LiveMap from "../components/LiveMap";
import BookerDesk from "../components/BookerDesk";

function Details({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
  host,
  reviews,
}) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <CustomHead pageTitle={"Airbnb + " + location} />
      <section>
        <Header />

        <main className="pb-[100px] lg:pb-[24px]">
          <div className="flex flex-col">
            {/* image */}
            <div className="relative w-[100%] h-[300px] md:h-[340px] lg:h-[400px]">
              <Image src={img} alt={title} layout="fill" objectFit="cover" />
            </div>

            <div className="flex pr-12">
              {/* Main Info */}
              <div className="px-3 pr-10 lg:px-12 lg:pr-[20%] flex-grow">
                {/* location */}
                <h2 className="mt-6 text-2xl lg:text-3xl font-bold ">
                  {location}
                </h2>
                {/* star */}
                <div className="mt-1 lg:mt-2 flex items-center gap-x-1 pb-4 border-b border-primary text-sm">
                  <StarIcon className="h-4 text-primary" />
                  <span className="">{star}</span>
                  <span> ·</span>
                  <span className="underline">{reviews} reviews</span>
                  <span> ·</span>
                  <span className="underline">Superhost</span>
                </div>

                <div className="mb-2 pb-4 border-b border-primary">
                  <h3 className="mt-6 text-2xl lg:text-3xl font-bold">
                    {host}
                  </h3>
                  {description.split("·").map((item, index) => (
                    <div
                      key={index}
                      className="mt-1 px-8 flex items-center gap-x-2 pb-2"
                    >
                      <CheckCircleIcon className="h-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booker Desk */}
              <BookerDesk />
            </div>
          </div>

          {/* Map */}
          <div className="mt-4 px-3 pr-10">
            <h1 className="text-2xl font-bold">Location</h1>
            <div className="w-full h-[250px] bg-red-200 mt-2 md:h-[300px] lg:h-[300px]">
              <LiveMap
                searchLocations={[
                  {
                    img,
                    location,
                    title,
                    description,
                    star,
                    price,
                    total,
                    long,
                    lat,
                    host,
                    reviews,
                  },
                ]}
              />
            </div>
          </div>
        </main>

        {/* Mobile Banner */}
        <div className="w-full h-[100px] bg-white shadow-inner fixed bottom-0 left-0 flex items-center px-3 py-3 z-50 lg:hidden">
          {/* content */}
          <div className="flex-grow">
            <p className="text-xl">$443/night</p>
            <p className="text-sm">Aug 10-15 ($2003)</p>
          </div>

          {/* button */}
          <div>
            <button className="normal-button">Book Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const allSearchLocations = [
    {
      id: "1",
      img: "https://links.papareact.com/xqj",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "£30 / night",
      total: "£117 total",
      long: -0.0022275,
      lat: 51.5421655,
      host: "Entire cottage hosted by Ludvig",
      reviews: 55,
    },
    {
      id: "2",
      img: "https://links.papareact.com/hz2",
      location: "Private room in center of London",
      title: "Independant luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
      star: 4.3,
      price: "£40 / night",
      total: "£157 total",
      long: -0.095091,
      lat: 51.48695,
      host: "Dome hosted by Dorothy",
      reviews: 75,
    },
    {
      id: "3",
      img: "https://links.papareact.com/uz7",
      location: "Private room in center of London",
      title: "London Studio Apartments",
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "£35 / night",
      total: "£207 total",
      long: -0.135638,
      lat: 51.521916,
      host: "Entire cottage hosted by Ludvig",
      reviews: 69,
    },
    {
      id: "4",
      img: "https://links.papareact.com/6as",
      location: "Private room in center of London",
      title: "30 mins to Oxford Street, Excel London",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "£55 / night",
      total: "£320 total",
      long: -0.069961,
      lat: 51.472618,
      host: "Cycladic home hosted by Roula",
      reviews: 18,
    },
    {
      id: "5",
      img: "https://links.papareact.com/xhc",
      location: "Private room in center of London",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
      star: 5.0,
      price: "£60 / night",
      total: "£450 total",
      long: -0.08472,
      lat: 51.510794,
      host: "Island hosted by Tomas",
      reviews: 7,
    },
    {
      id: "6",
      img: "https://links.papareact.com/pro",
      location: "Private room in center of London",
      title: "The Blue Room In London",
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "£65 / night",
      total: "£480 total",
      long: -0.094116,
      lat: 51.51401,
      host: "Entire rental unit hosted by Maria & Henri",
      reviews: 120,
    },
    {
      id: "7",
      img: "https://links.papareact.com/8w2",
      location: "Private room in center of London",
      title: "5 Star Luxury Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "£90 / night",
      total: "£650 total",
      long: -0.109889,
      lat: 51.521245,
      host: "Entire villa hosted by Celine",
      reviews: 111,
    },
  ];

  const searchLocation = allSearchLocations.filter(
    (location) => location.id == context.query.id
  );

  return {
    props: searchLocation[0],
  };
}
export default Details;

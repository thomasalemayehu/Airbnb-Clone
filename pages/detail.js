import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import CustomHead from "../components/CustomHead";
import Image from "next/image";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/solid";
import LiveMap from "../components/LiveMap";
import BookerDesk from "../components/BookerDesk";
import Footer from "../components/Footer";
import { selectItems } from "../slices/cartSlice";

function Details({
  img,
  location,
  title,
  description,
  moreDescription,
  star,
  price,
  total,
  long,
  lat,
  hostedBy,
  reviewCount,
}) {
  const router = useRouter();
  const { id, startDate, endDate, numberOfGuests, daysOfStay } = router.query;

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

            <div className="flex pr-12 lg:pr-16 xl:pr-24">
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
                  <span className="underline">{reviewCount} reviews</span>
                  <span> ·</span>
                  <span className="underline">Superhost</span>
                </div>

                <h2 className="mt-6 text-2xl lg:text-3xl font-bold ">
                  Hosted By {hostedBy}
                </h2>

                <div className="mb-2 py-4 border-b border-primary">
                  {description}
                </div>

                <div className="mb-2 pb-4 border-b border-primary">
                  <h3 className="mt-6 text-2xl lg:text-3xl font-bold"></h3>
                  {moreDescription.split("·").map((item, index) => (
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
              <BookerDesk
                price={price}
                startDate={startDate}
                endDate={endDate}
                numberOfGuests={numberOfGuests}
                daysOfStay={daysOfStay}
              />
            </div>
          </div>

          {/* Map */}
          <div className="mt-4 px-3 pr-10">
            <h1 className="text-2xl font-bold">Location</h1>
            <div className="w-full h-[250px] bg-red-200 mt-2 md:h-[320px] lg:h-[450px] xl:h-[500px]">
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
                    hostedBy,
                    reviewCount,
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

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const allSearchLocations = [
    // Addis Ababa
    {
      id: "1",
      img: "/images/Stays/Demssis.webp",
      location: "Addis Ababa, Ethiopia",
      hostedBy: "Demssis",
      title: "Entire rental unit 1 with free parking",
      description: "4 guests · 3 bedrooms · 3 beds · 2.5 baths",
      moreDescription:
        "Kitchen · Wifi · Dedicated workspace · Free parking on premises · Pets allowed · Self check-in · Ethernet connection",
      star: 5.0,
      reviewCount: "7",
      price: "50",
      long: 8.954128877720558,
      lat: 38.74880513746566,
    },
    {
      id: "2",
      img: "/images/Stays/Nemany.webp",
      location: "Addis Ababa, Ethiopia",
      hostedBy: "Nemany",
      title: "Central 3 Br Apt w/ Generator and Skyline Views",
      description: "6 guests · 3 bedrooms · 3 beds · 2 baths",
      moreDescription:
        "Kitchen · Wifi · Dedicated workspace · Free parking on premises · Furry friends welcome · City skyline view",
      star: 5.0,
      reviewCount: "1",
      discountRate: "0",
      price: "62",
      long: 8.96626841022152,
      lat: 38.77240947897332,
    },
    {
      id: "3",
      img: "/images/Stays/Ruth.webp",
      location: "Addis Ababa, Ethiopia",
      hostedBy: "Ruth",
      title: "Lovely brand new 2-bedroom suite in city centre",
      description: "4 guests · 2 bedrooms · 3 beds · 1 baths",
      moreDescription:
        "Kitchen · Dedicated workspace · Experienced host · Furry friends welcome ",
      star: 5.0,
      reviewCount: "1",
      discountRate: "0",
      price: "80",
      long: 8.96626841022152,
      lat: 38.77240947897332,
    },
    {
      id: "4",
      img: "/images/Stays/Mitiku.webp",
      location: "Addis Ababa, Ethiopia",
      hostedBy: "Mitiku",
      title: "Lovely 3 bed rental unit with free parking",
      description: "3 guests · 3 bedrooms · 3 beds · 2 baths",
      moreDescription: "Kitchen · Dedicated workspace · TV · Kitchen ",
      star: 5.0,
      reviewCount: "1",
      discountRate: "10",
      price: "80",
      long: 9.001933731557346,
      lat: 38.77209549707948,
    },
    {
      id: "5",
      img: "/images/Stays/Ruth-1.webp",
      location: "Addis Ababa, Ethiopia",
      hostedBy: "Ruth",
      title: "Charming brand new one bedroom boutique suite",
      description: "2 guests · 1 bedrooms · 1 beds · 1 bath",
      moreDescription:
        "Kitchen · Dedicated workspace · Experienced host · Kitchen ",
      star: 5.0,
      reviewCount: "1",
      discountRate: "10",
      price: "57",
      long: 9.001933731557346,
      lat: 38.77209549707948,
    },
    // New York
    {
      id: "6",
      img: "/images/Stays/James.webp",
      location: "Queens, New York, United States",
      hostedBy: "James",
      title: "Private Studio in Queens",
      description: "2 guests · 1 bedrooms · 1 bed · 1 bath",
      moreDescription:
        "Kitchen · Dedicated workspace · Experienced host · Furry friends welcome · Great check-in experience ",
      star: 4.82,
      reviewCount: "181",
      discountRate: "7",
      price: "86",
      long: 40.69884436720829,
      lat: -73.92132208123624,
    },
    {
      id: "7",
      img: "/images/Stays/Marina.webp",
      location: "New York, United States",
      hostedBy: "Marina",
      title: "UNTITLED at Freeman - Queen Studio 506",
      description: "2 guests · 1 bedroom · 1 beds · 1 bath",
      moreDescription:
        "Kitchen · Dedicated workspace · TV · Kitchen · Great location · Great check-in experience ",
      star: 5.0,
      reviewCount: "1",
      discountRate: "12",
      price: "178",
      long: 40.691261285557076,
      lat: -73.93320606121398,
    },
    {
      id: "8",
      img: "/images/Stays/Tiara.webp",
      location: "Stunning Window to Floor Studio in Harlem",
      hostedBy: "Tiara",
      title: "Charming brand new one bedroom boutique suite",
      description: "2 guests · 1 bedrooms · 1 beds · 1 bath",
      moreDescription:
        "Kitchen · Dedicated workspace · Experienced host · Kitchen ",
      star: 5.0,
      reviewCount: "1",
      discountRate: "0",
      price: "157",
      long: 40.686995371965324,
      lat: -73.95208910229036,
    },
    // Tokyo
    {
      id: "9",
      img: "/images/Stays/Alt Stay.webp",
      location: "Shinjuku City, Tōkyō-to, Japan",
      hostedBy: "Alt Stay",
      title: "Bright Natural Studio - New Unit!",
      description: "2 guests · 1 bedrooms · 1 bed · 1 bath",
      moreDescription:
        "Kitchen · Dedicated workspace · Experienced host · Furry friends welcome · Great check-in experience ",
      star: 4.95,
      reviewCount: "20",
      discountRate: "6",
      price: "84",
      long: 36.861583353553804,
      lat: 40.54223033179386,
    },
    {
      id: "10",
      img: "/images/Stays/Masahiro.webp",
      location: "Bunkyo City, Tōkyō-to, Japan",
      hostedBy: "Masahiro",
      title: "6 min Sta. Very near Akihabara!!Good location/51",
      description: "2 guests · 1 bedrooms · 1 bed · 1 bath",
      moreDescription:
        "Kitchen · Dedicated workspace · Experienced host · Furry friends welcome · Great check-in experience ",
      star: 4.62,
      reviewCount: "130",
      discountRate: "2",
      price: "31",
      long: 35.621907824877276,
      lat: 40.34750520839253,
    },

    {
      id: "11",
      img: "/images/Stays/Edwardian.webp",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      hostedBy: "Edwardian",
      description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms",
      moreDescription: " · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      reviewCount: "69",
      discountRate: "0",
      price: "60",
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      id: "12",
      img: "/images/Stays/Mark.jpg",
      location: "Private room in center of London",
      title: "Independant luxury studio apartment",
      hostedBy: "Mark",
      description: "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms ",
      moreDescription: "Wifi · Kitchen",
      star: 4.3,
      reviewCount: "55",
      price: "40",
      discountRate: "0",
      long: -0.095091,
      lat: 51.48695,
    },
    {
      id: "13",
      img: "/images/Stays/Caroline.jpg",
      location: "Private room in center of London",
      hostedBy: "Caroline",
      title: "London Studio Apartments",
      description: "4 guest · 4 bedroom · 4 bed · 2 bathrooms",
      moreDescription: "Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.8,
      reviewCount: "77",
      price: "35",
      long: -0.135638,
      lat: 51.521916,
    },

    // Madrid
    // Amsterdam
    // Barcelona
    // Dubai
    // Florence
    // London
    // New Orleans
    // Paris
    // Stockholm
  ];

  const searchLocation = allSearchLocations.filter(
    (location) => location.id == context.query.id
  );

  return {
    props: searchLocation[0],
  };
}
export default Details;

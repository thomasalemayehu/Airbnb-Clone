import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import SearchInfoCard from "../components/SearchInfoCard";
import LiveMap from "../components/LiveMap";
import CustomHead from "../components/CustomHead";

function Search({ searchLocations }) {
  // get info from params
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  // format date
  const formattedDate = `${format(
    new Date(startDate),
    "dd MMM, yyyy"
  )} - ${format(new Date(endDate), "dd MMM, yyyy")}`;

  const findNumberOfDays = (startDate, endDate) => {
    const diffDays = Math.ceil(
      (Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24)
    );
    return diffDays > 0 ? diffDays : 1;
  };

  const totalStayDays = findNumberOfDays(startDate, endDate);
  return (
    <>
      <CustomHead pageTitle={`Airbnb - ${location}`}></CustomHead>
      <div>
        <Header
          placeHolder={
            location +
            " | " +
            formattedDate +
            " | " +
            numberOfGuests +
            (numberOfGuests > 1 ? " guests" : " guest")
          }
        />

        <main className="flex pb-12">
          <section className="flex-grow pt-14 px-6">
            <p className="text-xs">
              300+ Stays -{" "}
              <span className="bg-primary px-2 py-[3px] rounded-lg mr-1 hover:shadow-md hover:bg-primaryLight transition duration-300 ease-out">
                {formattedDate.split("-")[0]}
              </span>{" "}
              -{" "}
              <span className="bg-primary px-2 py-[3px] rounded-lg ml-1 hover:shadow-md hover:bg-primaryLight transition duration-300 ease-out">
                {formattedDate.split("-")[1]}
              </span>{" "}
              for {numberOfGuests} {""}
              {numberOfGuests > 1 ? "guests" : "guest"}
            </p>
            <h1 className="text-3xl font-semibold mt-3 mb-6 text-primary">
              Stays in <span className="">{location}</span>
            </h1>

            {/* Filters */}
            {/* <div className=" hidden  lg:flex gap-x-4 mb-5">
              <p className="filterPill">Cancelation Flexibility</p>
              <p className="filterPill">Type of Place</p>
              <p className="filterPill">Price</p>
              <p className="filterPill">Rooms and Beds</p>
              <p className="filterPill">More Filters</p>
            </div> */}

            {searchLocations?.map(
              (
                {
                  id,
                  img,
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
                  image={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={totalStayDays}
                  longitude={longitude}
                  latitude={latitude}
                />
              )
            )}

            {searchLocations.length == 0 && (
              <div className="w-full h-[360px] flex items-center justify-center text-2xl font-bold">
                No stays in {location} yet.
              </div>
            )}
          </section>

          {/* Map */}
          {searchLocations.length > 0 && (
            <section className="hidden xl:inline-flex xl:min-w-[600px]">
              <LiveMap searchLocations={searchLocations} />
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const searchLocationsAll = [
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

  const selectedStays = searchLocationsAll.filter((stay) =>
    stay.location.toUpperCase().includes(context.query.location.toUpperCase())
  );

  return {
    props: {
      searchLocations: selectedStays,
    },
  };
}
export default Search;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import SearchInfoCard from "../components/SearchInfoCard";
import LiveMap from "../components/LiveMap";

function Search({ searchLocations }) {
  // get info from params
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  // format date
  const formattedDate = `${format(
    new Date(startDate),
    "dd MMM, yyyy"
  )} - ${format(new Date(endDate), "dd MMM, yyyy")}`;
  return (
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
          <div className=" hidden  lg:flex gap-x-4 mb-5">
            <p className="filterPill">Cancelation Flexibility</p>
            <p className="filterPill">Type of Place</p>
            <p className="filterPill">Price</p>
            <p className="filterPill">Rooms and Beds</p>
            <p className="filterPill">More Filters</p>
          </div>

          {searchLocations.map(
            (
              {
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
                image={img}
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
        </section>

        {/* Map */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <LiveMap searchLocations={searchLocations} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // const searchResults = await fetch()
  const searchLocations = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];
  return {
    props: {
      searchLocations,
    },
  };
}
export default Search;

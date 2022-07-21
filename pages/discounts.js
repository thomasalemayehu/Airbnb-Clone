import React from "react";
import CustomHead from "../components/CustomHead";
import DiscountCard from "../components/DiscountCard";
import Header from "../components/Header";

function Discounts({ discountItems }) {
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Discounts"}></CustomHead>
      <main>
        <Header />

        <div>
          {discountItems?.map(
            ({
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
            }) => (
              <DiscountCard
                key={id}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                long={long}
                lat={lat}
                discountRate={discountRate}
              />
            )
          )}
        </div>
      </main>
    </>
  );
}

export default Discounts;

export async function getServerSideProps() {
  const discountItems = [
    {
      id: "1",
      img: "https://links.papareact.com/xqj",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      discountRate: 12,
      price: "£30 / night",
      total: "£117 total",
      lat: -0.0022275,
      long: 51.5421655,
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
      discountRate: 7,
      lat: -0.135638,
      long: 51.521916,
    },
    {
      id: "7",
      img: "https://links.papareact.com/8w2",
      location: "Private room in center of London",
      title: "5 Star Luxury Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "£90 / night",
      total: "£650 total",
      lat: -0.109889,
      long: 51.521245,
      discountRate: 22,
    },
  ];
  return {
    props: { discountItems },
  };
}

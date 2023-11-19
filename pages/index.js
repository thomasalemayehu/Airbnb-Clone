import CustomHead from "../components/CustomHead";
import Image from "next/legacy/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, liveData }) {
  return (
    <div>
      <CustomHead pageTitle="Airbnb"></CustomHead>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small Cards */}
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5 text-primary">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }, index) => (
              <SmallCard
                key={index}
                image={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        {/* Medium Sections */}
        <section>
          <h2 className="text-3xl font-semibold mt-6 py-8 text-primary">
            Live Anywhere
          </h2>

          <div className="flex space-x-6 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3 -m-3">
            {liveData?.map(({ img, title }, index) => (
              <MediumCard key={index} image={img} title={title} />
            ))}
          </div>
        </section>

        {/* Large Cards */}
        <LargeCard
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = [
    // Dynamic Images
    {
      id: "1",
      img: "/images/Cities/Addis Ababa.gif",
      location: "Addis Ababa",
      distance: "Capital of Ethiopia",
    },
    {
      id: "2",
      img: "/images/Cities/New York.gif",
      location: "New York",
      distance: "4.5-hour drive from D.C",
    },
    {
      id: "3",
      img: "/images/Cities/Tokyo.gif",
      location: "Tokyo",
      distance: "Capital of Japan",
    },
    {
      id: "4",
      img: "/images/Cities/Madrid.gif",
      location: "Madrid",
      distance: "Capital of Spain",
    },

    // Static Images
    {
      id: "5",
      img: "/images/Cities/Amsterdam.webp",
      location: "Amsterdam",
      distance: "Capital of Netherlands",
    },
    {
      id: "6",
      img: "/images/Cities/Barcelona.webp",
      location: "Barcelona",
      distance: "4.5-hour drive from Madrid",
    },
    {
      id: "7",
      img: "/images/Cities/Dubai.webp",
      location: "Dubai",
      distance: "Capital of UAE",
    },
    {
      id: "8",
      img: "/images/Cities/Florence.webp",
      location: "Florence",
      distance: "2-hour drive from Rome",
    },
    {
      id: "9",
      img: "/images/Cities/London.webp",
      location: "London",
      distance: "Capital of UK",
    },
    {
      id: "10",
      img: "/images/Cities/New Orleans.webp",
      location: "New Orleans",
      distance: "6 hours from D.C",
    },
    {
      id: "11",
      img: "/images/Cities/Paris.webp",
      location: "Paris",
      distance: "Capital of France",
    },
    {
      id: "12",
      img: "/images/Cities/Stockholm.webp",
      location: "Stockholm",
      distance: "Capital of Sweden",
    },
  ];

  const liveData = [
    { img: "/images/Discover/Arctic.webp", title: "Arctic Stays" },
    {
      img: "/images/Discover/Bed & Breakfast.webp",
      title: "Bed and Breakfast",
    },
    { img: "/images/Discover/Caves.webp", title: "Cave Stays" },
    { img: "/images/Discover/Design.webp", title: "Great Design Stays" },
    { img: "/images/Discover/Entire.webp", title: "Entire Home Stays" },
    {
      img: "/images/Discover/Island.webp",
      title: "Island Stays",
    },
    { img: "/images/Discover/Outdoor.webp", title: "Outdoor Stays" },
    { img: "/images/Discover/Parks.webp", title: "Park Stays" },
    { img: "/images/Discover/Pets.webp", title: "Pets Allowed" },
    { img: "/images/Discover/Unique.webp", title: "Unique Stays" },
  ];

  return {
    props: {
      exploreData,
      liveData,
    },
  };
}

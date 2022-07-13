import CustomHead from "../components/CustomHead";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, liveData }) {
  return (
    <div>
      <CustomHead title="Airbnb"></CustomHead>

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
    {
      img: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];

  const liveData = [
    { img: "https://links.papareact.com/2io", title: "Outdoor getaways" },
    { img: "https://links.papareact.com/q7j", title: "Unique stays" },
    { img: "https://links.papareact.com/s03", title: "Entire homes" },
    { img: "https://links.papareact.com/8ix", title: "Pet allowed" },
  ];

  return {
    props: {
      exploreData,
      liveData,
    },
  };
}

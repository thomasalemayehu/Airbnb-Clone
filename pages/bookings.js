import React from "react";
import Header from "../components/Header";
import CustomHead from "../components/CustomHead";
import { getSession } from "next-auth/react";
import db from "../firebase";
import BookingsCard from "../components/BookingsCard";
import moment from "moment";

function Bookings({ bookings }) {
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Bookings"}></CustomHead>
      <Header />

      <main className="max-w-3xl mx-auto mt-12 pb-16">
        {bookings.length > 0 &&
          bookings?.map(
            (
              {
                id,
                amount,
                description,
                images,
                numberOfGuests,
                price,
                startDate,
                endDate,
                title,
                timestamp,
              },
              index
            ) => (
              <BookingsCard
                key={index}
                id={id}
                amount={amount}
                description={description}
                images={images}
                numberOfGuests={numberOfGuests}
                price={price}
                startDate={startDate}
                endDate={endDate}
                title={title}
                timestamp={timestamp}
              />
            )
          )}

        {bookings.length === 0 && (
          <div className="w-full h-[360px] flex items-center justify-center">
            <h1 className="text-3xl font-bold">No Booking History</h1>
          </div>
        )}
      </main>
    </>
  );
}

export default Bookings;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  //   get session
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("bookings")
    .orderBy("timestamp", "desc")
    .get();
  const bookings = JSON.parse(
    JSON.stringify(
      await Promise.all(
        stripeOrders.docs.map(async (booking) => ({
          id: booking.id,
          amount: booking.data().amount,
          description: booking.data().description,
          images: booking.data().images,
          numberOfGuests: booking.data().numberOfGuests,
          price: booking.data().price,
          startDate: booking.data().startDate,
          endDate: booking.data().endDate,
          title: booking.data().title,
          timestamp: moment(booking.data().timestamp.toDate()).unix(),
        }))
      )
    )
  );
  console.log(bookings);
  return {
    props: {
      bookings,
    },
  };
}

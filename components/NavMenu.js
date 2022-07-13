import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

function NavMenu() {
  const { data: session } = useSession();

  return (
    <div className=" bg-gray-100 absolute top-12 flex flex-col px-4 py-4 pr-12 hover:shadow-md rounded-lg transition duration-500">
      {session && (
        <div className="pb-4 border-b border-primary">
          <p className="text-lg text-primary pb--2 ">{session.user?.name}</p>

          <p className="text-xs text-gray-500">{session.user?.email}</p>
        </div>
      )}
      <a
        className="menu-link"
        onClick={() => {
          setShowMenu(false);
          router.push("/bookings");
        }}
      >
        Booking History
      </a>
      <a
        className="menu-link"
        onClick={() => {
          setShowMenu(false);
          router.push("/wishlist");
        }}
      >
        Wishlist
      </a>
      <a
        className="menu-link"
        onClick={() => {
          setShowMenu(false);
          router.push("/discounts");
        }}
      >
        Discount
      </a>
      <a className="menu-link" onClick={!session ? signIn : signOut}>
        {session ? "Logout" : "Login"}
      </a>

      <div
        className="relative flex items-center justify-center h-5 cursor-pointer mt-6"
        onClick={() => {
          setShowMenu(false);
          router.push("/");
        }}
      >
        <Image
          src="/images/Airbnb-Logo.png"
          className="mx-auto"
          alt="Airbnb logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
    </div>
  );
}

export default NavMenu;

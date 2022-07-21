/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import NavMenu from "./NavMenu";
import { selectItems } from "../slices/cartSlice";
import { useSelector } from "react-redux";

function Header({ placeHolder = "Start your search" }) {
  const { data: session } = useSession();
  const itemsInCart = useSelector(selectItems);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [searchClass, setSearchClass] = useState("");
  const handleDateSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const handleNumberOfGuests = (e) => {
    setNumberOfGuests(e.target.value);
  };

  // date range
  const dateSelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInputValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
  };

  // cancel button
  const cancelSearch = () => {
    setSearchInputValue("");
    setStartDate(new Date());
    setEndDate(new Date());
  };

  // main
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 select-none">
      {/* Image */}
      <div
        className="relative flex items-center h-10 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/images/Airbnb-Logo.png"
          alt="Airbnb logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Search */}
      <div
        className={`flex items-center border-2 rounded-full py-1 md:shadow-sm focus-within:shadow-md ${searchClass}`}
      >
        <input
          type="text"
          className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 overflow-hidden "
          placeholder={placeHolder}
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              search();
            }
          }}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-primary text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Nav */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 relative">
        <p className="hidden cursor-pointer pl-1 ">Become a host</p>
        <GlobeAltIcon className="h-6 text-primary hidden" />
        <div
          className="flex items-center space-x-2 border-2 border-primary px-2 py-1 rounded-full hover:shadow-lg transition duration-200 ease-out"
          onClick={() => setShowMenu(showMenu ? false : true)}
        >
          <MenuIcon className="h-6 text-primary" />
          {session ? (
            <div className="relative">
              <img
                loading="lazy"
                src={session.user?.image}
                alt={session.user?.name}
                className="h-8 object-cover rounded-full overflow-x-hidden overflow-y-hidden"
              />
              {itemsInCart.length > 0 && (
                <p className="absolute top-0 left-5 bg-yellow-400 z-10 w-[16px] h-[16px] rounded-full text-center text-xs">
                  {itemsInCart.length}
                </p>
              )}
            </div>
          ) : (
            <UserCircleIcon className="h-6 text-primary" />
          )}
        </div>

        {showMenu && <NavMenu />}
      </div>

      {searchInputValue && (
        <div className="flex flex-col col-span-3 mx-auto mt-8">
          <DateRangePicker
            ranges={[dateSelectionRange]}
            minDate={new Date()}
            rangeColors={["#9381FF"]}
            onChange={handleDateSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-lg md:text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              value={numberOfGuests}
              onChange={handleNumberOfGuests}
              min={1}
              className="w-12 pl-2 text-lg text-primary outline-none"
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow bg-primary text-white py-2 rounded-md hover:shadow-md active:scale-95 active:text-white transition duration-200 ease-out"
              onClick={search}
            >
              Search
            </button>
            <button className="flex-grow text-primary" onClick={cancelSearch}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

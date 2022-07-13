import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Header({ placeHolder = "Start your search" }) {
  const router = useRouter();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
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
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
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
      <div className="flex items-center border-2 rounded-full py-1 md:shadow-sm focus-within:shadow-md">
        <input
          type="text"
          className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeHolder}
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-primary text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Nav */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer pl-1">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 text-primary" />
        <div className="flex items-center space-x-2 border-2 border-primary px-2 py-1 rounded-full hover:shadow-lg transition duration-200 ease-out">
          <MenuIcon className="h-6 text-primary" />
          <UserCircleIcon className="h-6 text-primary" />
        </div>
      </div>

      {searchInputValue && (
        <div className="flex flex-col col-span-3 mx-auto mt-8">
          <DateRangePicker
            ranges={[dateSelectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleDateSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              value={numberOfGuests}
              onChange={handleNumberOfGuests}
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow bg-primary py-2 rounded-md"
              onClick={search}
            >
              Search
            </button>
            <button className="flex-grow text-gray-400" onClick={cancelSearch}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

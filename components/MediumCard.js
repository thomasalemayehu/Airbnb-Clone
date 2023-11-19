import React from "react";
import Image from "next/legacy/image";

function MediumCard({ image, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      {/* Image */}
      <div className="relative w-80 h-80 rounded-xl bg-primaryLight">
        <Image layout="fill" src={image} alt={title} className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;

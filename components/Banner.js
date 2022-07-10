import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[500px]">
      {/* hero */}
      <Image
        src="/images/Hero-Image.webp"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go?</p>

        <button className="text-accent bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">{`I'm flexible`}</button>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[320px] sm:h-[420px] lg:h-[420px] xl:h-[520px]">
      {/* hero */}
      <Image
        src="/images/Hero-Image.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-xl sm:text-2xl text-white">Not sure where to go?</p>

        <button className="text-primary bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">{`I'm flexible`}</button>
      </div>
    </div>
  );
}

export default Banner;

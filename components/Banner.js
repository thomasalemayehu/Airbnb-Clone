import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[500px]">
      {/* hero */}
      <Image
        src="/images/Hero-Image.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-xl sm:text-2xl text-white font-semibold">
          <Typewriter
            options={{
              strings: ["Not sure where to go?", "We got you!"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>

        <button className="text-primary bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 active:bg-primary active:text-white">{`I'm flexible`}</button>
      </div>
    </div>
  );
}

export default Banner;

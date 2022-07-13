import React from "react";
import CustomHead from "../components/CustomHead";
import { getProviders, signIn } from "next-auth/react";
import SignInButton from "../components/SignInButton";
import Header from "../components/Header";
import Image from "next/image";
import { useRouter } from "next/router";

function Auth({ providers }) {
  const router = useRouter();
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Auth"}></CustomHead>

      <main className="h-screen w-screen  flex">
        {/* lEft */}
        <div className="hidden lg:inline-block w-[55%] h-screen bg-primary px-8 py-6 pt-24">
          <h1 className="text-black text-6xl font-semibold mb-8">Airbnb</h1>
          <div className="relative mt-24 w-4/6 h-4/6">
            <Image
              src="/images/Auth.svg"
              alt="Airbnb logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        </div>

        {/* right */}
        <div className=" w-[100%]  lg:w-[45%] h-screen  px-8 flex  flex-col justify-center">
          <div
            className="relative flex items-center  h-24 cursor-pointer mb-10"
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
          {Object.values(providers).map(({ name, id }) => (
            <SignInButton
              key={id}
              providerName={name}
              providerId={id}
              providerImage={`/icons/${name}.svg`}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Auth;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

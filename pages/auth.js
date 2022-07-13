import React from "react";
import CustomHead from "../components/CustomHead";

import { getProviders, signIn } from "next-auth/react";
import SignInButton from "../components/SignInButton";
import Header from "../components/Header";

function Auth({ providers }) {
  return (
    <>
      <CustomHead pageTitle={"Airbnb - Auth"}></CustomHead>
      <Header />
      <div>
        <main className="flex flex-col max-w-screen-sm px-8 md:px-48 mx-auto my-32 bg-gray-200 py-8">
          {Object?.values(providers).map(({ name, id }) => (
            <SignInButton
              key={id}
              providerName={name}
              providerId={id}
              providerImage={`/icons/${name}.svg`}
            />
          ))}
        </main>
      </div>
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

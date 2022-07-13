import React from "react";
import Head from "next/head";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Spinner from "./Spinner";

function SignInButton({ providerName, providerImage, providerId }) {
  const [showLoader, setShowLoader] = React.useState(false);
  return (
    <>
      {showLoader ? (
        <div className="flex items-center space-x-3 mb-6 border border-gray-100 px-3 py-2 transition duration-200 ease-out hover:bg-primary active:scale-95 hover:shadow-lg active:text-white rounded-md">
          <Spinner />
        </div>
      ) : (
        <div
          className="flex items-center space-x-3 mb-6 border border-primary px-3 py-2 transition duration-200 ease-out hover:bg-primary active:scale-95 hover:shadow-lg active:text-white rounded-md"
          onClick={() => {
            signIn(providerId);
            setShowLoader(true);
          }}
        >
          <div className="relative w-6 h-6">
            <Image src={providerImage} alt={providerName} layout="fill" />
          </div>
          <div>Sign in With {providerName}</div>
        </div>
      )}
    </>
  );
}

export default SignInButton;

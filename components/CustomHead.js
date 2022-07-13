import React from "react";
import Head from "next/head";

function CustomHead({ pageTitle, pageDescription, favicon }) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="description"
        content={pageDescription ? pageDescription : "Airbnb Clone"}
      />
      <link
        rel="shortcut icon"
        href={favicon ? favicon : "/images/favicon.ico"}
      />
    </Head>
  );
}

export default CustomHead;

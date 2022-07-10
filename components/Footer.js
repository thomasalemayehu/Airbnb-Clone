import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Spoiler Not a real site</p>
        <p>Its pretty site</p>
        <p>Referrals accepted</p>
        <p>Thomas Alemayehu</p>
      </div>
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">HOST</h5>
        <p>Thomas Alemayehu</p>
        <p>Presents</p>
        <p>Full Stack Engineer</p>
        <p>Mobile App Developer</p>
        <p>Hire Now</p>
      </div>
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}

export default Footer;

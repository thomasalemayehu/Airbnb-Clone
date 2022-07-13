import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">ABOUT</h5>
        <p className="footer-link">How Airbnb works</p>
        <p className="footer-link">Newsroom</p>
        <p className="footer-link">Investors</p>
        <p className="footer-link">Airbnb Plus</p>
        <p className="footer-link">Airbnb Luxe</p>
      </div>
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="footer-link">Accessibility</p>
        <p className="footer-link">Spoiler Not a real site</p>
        <p className="footer-link">Its pretty site</p>
        <p className="footer-link">Referrals accepted</p>
        <p className="footer-link">Thomas Alemayehu</p>
      </div>
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">HOST</h5>
        <p className="footer-link">Thomas Alemayehu</p>
        <p className="footer-link">Presents</p>
        <p className="footer-link">Full Stack Engineer</p>
        <p className="footer-link">Mobile App Developer</p>
        <p className="footer-link">Hire Now</p>
      </div>
      {/*  */}
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="footer-link">Help Center</p>
        <p className="footer-link">Trust & Safety</p>
        <p className="footer-link">Say Hi YouTube</p>
        <p className="footer-link">Easter Eggs</p>
        <p className="footer-link">For the Win</p>
      </div>
    </div>
  );
}

export default Footer;

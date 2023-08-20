import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-[6rem] absolute bottom-0 left-0 p-[48px] bg-[#00202D] flex justify-between items-center">
      <div className="gap-64">
        <p className="text-white">&copy; 2033 LeagueOfEngineers All rights reserved.</p>
      </div>
      <div className="gap-4 flex">
        <a href="#" className="text-white">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-white">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-white">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

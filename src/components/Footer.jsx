import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
  <footer className="bg-blue-500 p-4 text-white text-center">
    © {year} Adarsh
  </footer>
)};

export default Footer;

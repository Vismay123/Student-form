import React from 'react';
import collegeLogo from './cllg-logo.png'; // Import your college logo image
import collegeName from './cllg-title.png'; // Import your college name image

const Header = () => {
  return (
    <header className="header">
      <img src={collegeLogo} alt="College Logo" className="logo" />
      <img src={collegeName} alt="College Name" className="college-name" />
      
      
      <p>Student Document Upload</p>
    </header>
  );
};

export default Header;

import React from 'react';
import headerImage from '../assets/header.png';
import { Link } from 'react-router-dom';

const Header = () => {
return (
  <div>
     
     <Link to = "/"><img src={headerImage} alt="HeaderImage" /></Link>
  </div>
 );
}

export default Header;
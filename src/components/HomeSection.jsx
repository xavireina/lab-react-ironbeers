import React from 'react';
import { Link } from 'react-router-dom';


const HomeSection = (props) => {
return (
  <div>
    <img src={props.image} alt="" />
    <Link to = {props.link}>{props.title}</Link>
    <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
  </div>
 );
}

export default HomeSection;
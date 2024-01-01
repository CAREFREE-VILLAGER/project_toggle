// BoxWithTextAndImage.jsx

import React from 'react';
import './Subscribe.css'; 
import { GoTriangleRight } from "react-icons/go";

const Subscribe = () => {
  
  const imageUrl = 'https://www.theirmindia.org/assets/images/irm_home/section7_container2_img.svg';

  return (
    <div className="container">
      <div className="text">
      <h3 style={{fontSize:'2.5rem', color:'#18446c'}}>Subscribe</h3>
      <p style={{fontSize:'1rem', color:'#18446c'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
    <input type="text" id="fname" name="firstname" placeholder="Enter Your Email Address" style={{fontSize:'1rem'}}></input>
    <button className='button'>Subscribe <GoTriangleRight style={{ fontSize: '20px' }}/></button>
      </div>
       <div className="image-container">
      <img
          src={imageUrl}
          alt="Your Alt Text"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Subscribe;

 
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className='slide-content'>
        <div className="slide-text">
          <h3>Lorem ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br/>Know More {' '}
          <span className="icon-container">
             <IoIosArrowDroprightCircle style={{ fontSize: '2em' }} />
          </span>
        </p>
        </div>
      </div>

      <div className='slide-content'>
        <div className="slide-text">
          <h3>Lorem ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br/>Know More {' '}
          <span className="icon-container">
             <IoIosArrowDroprightCircle style={{ fontSize: '2em' }} />
          </span>
        </p>
        </div>
      </div>

      <div className='slide-content'>
        <div className="slide-text">
          <h3>Lorem ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br/>Know More {' '}
          <span className="icon-container">
             <IoIosArrowDroprightCircle style={{ fontSize: '2em' }} />
          </span>
        </p>
        </div>
      </div>

     

      <div className='slide-content'>
        <div className="slide-text">
          <h3>Lorem ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br/>Know More {' '}
          <span className="icon-container">
             <IoIosArrowDroprightCircle style={{ fontSize: '2em' }} />
          </span>
        </p>
        </div>
      </div>
      
    </Slider>
  );
};

export default CardSlider;

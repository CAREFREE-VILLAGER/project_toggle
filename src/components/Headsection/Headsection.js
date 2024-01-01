import React from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import './Headsection.css';
import imageSource from './newimg.png';
import { GoTriangleRight } from "react-icons/go";

SwiperCore.use([Pagination, A11y, Autoplay]);

const Headsection = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      loop
      style={{ height: '400px', width: '100%' }}
    >
      <SwiperSlide style={{  boxSizing: 'border-box', display: 'flex', backgroundColor:'#f4f4f4', }}>

            
      <div style={{paddingLeft: '120px', paddingTop:'50px',fontSize: '22px', color:'#12406f' }}>

        <h1 >Heading</h1>
        <p >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
        
          diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd
                  <br/>
                  <button className='button'>Know More <GoTriangleRight /></button>
               </p>
                   </div>
            
           <div className="image-container">
            <img
              src={imageSource}
              alt="Description"
              style={{ maxWidth: '100%', height: '100%' }}
            />
          </div>
           
      </SwiperSlide>
   
      <SwiperSlide style={{  boxSizing: 'border-box', display: 'flex', backgroundColor:'#f4f4f4' }}>

            
<div style={{paddingLeft: '120px', paddingTop:'50px',fontSize: '22px', color:'#12406f' }}>

  <h1 >Heading</h1>
  <p >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
  
    diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd
            <br/>
            <button className='button'>Know More <GoTriangleRight /></button>
         </p>
             </div>
      
     <div className="image-container">
      <img
        src={imageSource}
        alt="Description"
        style={{ maxWidth: '100%', height: '100%' }}
      />
    </div>
     
</SwiperSlide>


<SwiperSlide style={{  boxSizing: 'border-box', display: 'flex', backgroundColor:'#f4f4f4' }}>

            
<div style={{paddingLeft: '120px', paddingTop:'50px',fontSize: '22px', color:'#12406f' }}>

  <h1 >Heading</h1>
  <p >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
  
    diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd
            <br/>
            <button className='button'>Know More <GoTriangleRight /></button>
         </p>
             </div>
      
     <div className="image-container">
      <img
        src={imageSource}
        alt="Description"
        style={{ maxWidth: '100%', height: '100%' }}
      />
    </div>
     
</SwiperSlide>


<SwiperSlide style={{  boxSizing: 'border-box', display: 'flex', backgroundColor:'#f4f4f4' }}>

            
<div style={{paddingLeft: '120px', paddingTop:'50px',fontSize: '22px', color:'#12406f' }}>

  <h1 >Heading</h1>
  <p >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
  
    diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd
            <br/>
            <button className='button'>Know More <GoTriangleRight /></button>
         </p>
             </div>
      
     <div className="image-container">
      <img
        src={imageSource}
        alt="Description"
        style={{ maxWidth: '100%', height: '100%' }}
      />
    </div>
     
</SwiperSlide>

     
    </Swiper>
  );
};

export default Headsection;

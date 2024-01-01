import React from 'react';
import CountUp from 'react-countup';
import './Information.css';

const Information = () => {
  return (
    <div className="info-container">
      <div className="info-border">
        <p>Lorem ipsum</p>
        <h1 style={{fontSize : '70px'}}>
          <CountUp end={123} duration={4} />+
        </h1>
        <p>Lorem ipsum dolor sit amet,   </p>
        <p>consetetur sadipscing elitr, sed diam</p>
        <p>nonumy eirmod tempor invidunt ut</p>
        <p>labore et dolore magna aliquyam erat</p>
      </div>

      <div className="info-border">
        <p>Lorem ipsum</p>
        <h1 style={{fontSize : '70px'}}>
          <CountUp end={12} duration={4} />+
        </h1>
        <p>Lorem ipsum dolor sit amet,   </p>
        <p>consetetur sadipscing elitr, sed diam</p>
        <p>nonumy eirmod tempor invidunt ut</p>
        <p>labore et dolore magna aliquyam erat</p>
      </div>

      <div className="info-border">
        <p>Lorem ipsum</p>
        <h1 style={{fontSize : '70px'}}>
          <CountUp end={12} duration={4} />+
        </h1>
        <p>Lorem ipsum dolor sit amet,   </p>
        <p>consetetur sadipscing elitr, sed diam</p>
        <p>nonumy eirmod tempor invidunt ut</p>
        <p>labore et dolore magna aliquyam erat</p>
      </div>

      <div className="info-border">
        <p>Lorem ipsum</p>
        <h1 style={{fontSize : '70px'}}>
          <CountUp end={123} duration={4} />+
        </h1>
        <p>Lorem ipsum dolor sit amet,   </p>
        <p>consetetur sadipscing elitr, sed diam</p>
        <p>nonumy eirmod tempor invidunt ut</p>
        <p>labore et dolore magna aliquyam erat</p>
      </div>
    </div>
  );
};

export default Information;

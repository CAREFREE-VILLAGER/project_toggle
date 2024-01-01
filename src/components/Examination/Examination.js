import React from 'react';

import { TbCalendarTime } from 'react-icons/tb';
import './Examination.css'; 

const Examinations = () => {
  return (
    <div className="examinations-container">
      <div className="exam-item">
        <h2>
           Upcoming Examinations
        </h2>
        <p>Enquire about the examination & register for the exams</p>
      </div>

      <div className="exam-border">
        <h2>
          <TbCalendarTime />02th October 2014
        </h2>
        <p>Level 1 exam</p>
      </div>

      <div className="exam-border">
        <h2>
          <TbCalendarTime />  Nov-Dec 2016
        </h2>
        <p>
          Level 2
          <br />
          Lorem Ipsum
          <br />
          Lorem Ipsum
        </p>
      </div>

      <div className="exam-border">
        <h2>
          <TbCalendarTime /> Ongoing this year
        </h2>
        <p>Level 3 (Grad)</p>
      </div>
    </div>
  );
};

export default Examinations;

import React from "react";
import "./_DateCounter.sass";

const DateCounter = () => {
  // пиздилка інпутів
  // повертає дату

  return (
    <div className="block">
      <div className="block__inputs">
        <div className="error">
          <label htmlFor="day">Day</label>
          <input type="number" placeholder="DD" id="day" />
          <p>Catch a Error</p>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <input type="number" placeholder="MM" id="month" />
          <p>Catch a Error</p>
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input type="number" placeholder="YYYY" id="year" />
          <p>Catch a Error</p>
        </div>
      </div>
      <div className="block__divisor">
        <div className="line"></div>
        <button type="button"></button>
      </div>
      <ul className="block__results">
        <li className="denomination">
          <span>- -</span>
          <div>years</div>
        </li>
        <li className="denomination">
          <span>- -</span>
          <div>months</div>
        </li>
        <li className="denomination">
          <span>- -</span>
          <div>days</div>
        </li>
      </ul>
    </div>
  );
};

export default DateCounter;

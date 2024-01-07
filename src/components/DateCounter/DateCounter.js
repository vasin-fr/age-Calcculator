import React, { useState } from "react";
import "./_DateCounter.sass";

const DateCounter = ({
  takeTagetDate,
  targetDate,
  resultsCount,
  resultsDate,
}) => {
  const [hasError, setHasError] = useState(false);

  const validationInputs = () => {
    if (
      +targetDate.days > 31 ||
      +targetDate.months > 12 ||
      +targetDate.years > new Date().getFullYear()
    ) {
      setHasError(true);
    } else {
      setHasError(false);
      resultsCount(targetDate);
    }
    if (
      targetDate.days === undefined ||
      targetDate.months === undefined ||
      targetDate.years === undefined
    ) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return (
    <div className="block animate__animated animate__zoomInRight">
      <div className="block__inputs">
        <div className={hasError || +targetDate.days > 31 ? "error" : ""}>
          <label htmlFor="days">Day</label>
          <input
            type="number"
            placeholder="DD"
            id="days"
            onChange={(e) => takeTagetDate(e.target.value, "days")}
            value={targetDate.days}
          />
          <p>Must be a valid day</p>
        </div>
        <div className={hasError || +targetDate.months > 12 ? "error" : ""}>
          <label htmlFor="months">Month</label>
          <input
            type="number"
            placeholder="MM"
            id="months"
            value={targetDate.months}
            onChange={(e) => takeTagetDate(e.target.value, "months")}
          />
          <p>Must be a valid month</p>
        </div>
        <div
          className={
            hasError || +targetDate.years > new Date().getFullYear()
              ? "error"
              : ""
          }
        >
          <label htmlFor="years">Year</label>
          <input
            type="number"
            placeholder="YYYY"
            id="years"
            value={targetDate.years}
            onChange={(e) => takeTagetDate(e.target.value, "years")}
          />
          <p>Must be in the past</p>
        </div>
      </div>
      <div className="block__divisor">
        <div className="line"></div>
        <button
          type="button"
          onClick={validationInputs}
          onTouchEnd={validationInputs}
          className={
            targetDate.days !== undefined &&
            targetDate.days !== "" &&
            targetDate.months !== undefined &&
            targetDate.months !== "" &&
            targetDate.years !== undefined &&
            targetDate.years !== ""
              ? "shadow"
              : hasError === true
              ? "error"
              : ""
          }
        ></button>
        <div className="line"></div>
      </div>
      <ul className={hasError ? "block__results--error" : "block__results"}>
        <li className="denomination">
          {resultsDate?.years !== undefined ? (
            <span>{resultsDate?.years}</span>
          ) : (
            <span>- -</span>
          )}
          <div>years</div>
        </li>
        <li className="denomination">
          {resultsDate?.months !== undefined ? (
            <span>{resultsDate?.months}</span>
          ) : (
            <span>- -</span>
          )}
          <div>months</div>
        </li>
        <li className="denomination">
          {resultsDate?.days !== undefined ? (
            <span>{resultsDate?.days}</span>
          ) : (
            <span>- -</span>
          )}
          <div>days</div>
        </li>
      </ul>
    </div>
  );
};

export default DateCounter;

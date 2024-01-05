import React, { useState } from "react";
import "./Primary.sass";
import DateCounter from "../../components/DateCounter/DateCounter";
import { differenceInCalendarYears } from "date-fns";

function Primary() {
  // console.log(differenceInCalendarYears(new Date(), new Date("2004-10-14")));
  const [targetDate, setTargetDate] = useState({});

  const takeTagetDate = (value, type) => {
    setTargetDate((el) => {
      return {
        ...el,
        [type]: value,
      };
    });
  };

  console.log(targetDate);

  return (
    <div className="App">
      <DateCounter
        takeTagetDate={(value, type) => takeTagetDate(value, type)}
        targetDate={targetDate}
      />
    </div>
  );
}

export default Primary;

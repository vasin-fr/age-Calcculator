import React, { useState } from "react";
import "./Primary.sass";
import DateCounter from "../../components/DateCounter/DateCounter";

function Primary() {
  const [targetDate, setTargetDate] = useState({});
  const [diferenceDate, setDiferenceDate] = useState({});

  const takeTagetDate = (value, type) => {
    switch (type) {
      case "years":
        setTargetDate((el) => {
          return {
            ...el,
            [type]: value.split("").slice(0, 4).join(""),
          };
        });
        break;
      default:
        setTargetDate((el) => {
          return {
            ...el,
            [type]: value.split("").slice(0, 2).join(""),
          };
        });
    }
  };

  const differenceInDate = ({ years, months, days }) => {
    const currentDate = new Date();
    const targetDate = new Date(years, +months - 1, days);
    console.log(targetDate.toLocaleString());

    if (years && months && days) {
      years = currentDate.getFullYear() - targetDate.getFullYear();
      months = currentDate.getMonth() - targetDate.getMonth();
      days = currentDate.getDate() - targetDate.getDate();

      if (months < 0) {
        years--;
        months += 12;
      }
      if (days < 0) {
        months--;
        days += 31;
      }

      return setDiferenceDate({
        years: years,
        months: months,
        days: days,
      });
    }
  };

  return (
    <div className="App">
      <DateCounter
        takeTagetDate={(value, type) => takeTagetDate(value, type)}
        targetDate={targetDate}
        resultsCount={(targetDate) => differenceInDate(targetDate)}
        resultsDate={diferenceDate}
      />
    </div>
  );
}

export default Primary;

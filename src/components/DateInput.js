import { useState, useEffect, useRef, useMemo } from "react";

import getDaysInMonth from "../utils/getDaysInMonth";
import formatDate from "../utils/formatDate";
import useClickOutside from "../hooks/useClickOutside";
import DateInputPopup from "./DateInputPopup";
import DateItem from "./DateItem";

function getDateSlots(currentMonth, currentYear) {
  const dateArray = getDaysInMonth(currentMonth, currentYear);
  const slotSkipCount = new Date(dateArray[0]).getDay();

  for (let i = 0; i < slotSkipCount; i++) {
    dateArray.unshift(null);
  }

  return dateArray;
}

function DateInput(props) {
  const popupRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useClickOutside(popupRef, () => {
    setShowPopup(false);
  });
  const dateArray = useMemo(() => getDateSlots(currentMonth, currentYear), [
    currentMonth,
    currentYear
  ]);

  useEffect(() => {
    if (props.value) {
      const dateObj = new Date(props.value);

      setSelectedDate(formatDate(dateObj));
      setCurrentMonth(dateObj.getMonth());
      setCurrentYear(dateObj.getFullYear());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function togglePopupHandler() {
    setShowPopup((currentShowPopup) => {
      return !currentShowPopup;
    });
  }

  function navigateMonthHandler(navigateBy = 1) {
    if (currentMonth + navigateBy === 12) {
      setCurrentMonth(0);
      setCurrentYear((currentState) => {
        return currentState + 1;
      });
    } else if (currentMonth + navigateBy === -1) {
      setCurrentMonth(11);
      setCurrentYear((currentState) => {
        return currentState - 1;
      });
    } else {
      setCurrentMonth((currentState) => {
        return currentState + navigateBy;
      });
    }
  }

  function selectDateHandler(date) {
    props.onChange(new Date(date));
    setSelectedDate(date);
    setShowPopup(false);
  }

  return (
    <span ref={popupRef}>
      <input defaultValue={selectedDate} onFocus={togglePopupHandler} />

      {showPopup && (
        <DateInputPopup
          currentMonth={currentMonth}
          currentYear={currentYear}
          navigateMonth={navigateMonthHandler}
        >
          {dateArray.map((dateText, index) => {
            return (
              <DateItem
                key={index}
                dateObj={dateText ? new Date(dateText) : null}
                selected={selectedDate === dateText}
                onClick={() => selectDateHandler(dateText)}
              />
            );
          })}
        </DateInputPopup>
      )}
    </span>
  );
}

export default DateInput;

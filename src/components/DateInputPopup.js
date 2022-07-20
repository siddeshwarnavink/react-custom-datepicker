import DateInputControl from "./DateInputControl";

function DateInputPopup(props) {
  return (
    <div className="date-popup">
      <div className="year">{props.currentYear}</div>
      <DateInputControl
        currentMonth={props.currentMonth}
        navigateToNextMonth={() => props.navigateMonth(1)}
        navigateToPrevMonth={() => props.navigateMonth(-1)}
      />
      <div className="date-popup__grid">
        <span className="week-code">S</span>
        <span className="week-code">M</span>
        <span className="week-code">T</span>
        <span className="week-code">W</span>
        <span className="week-code">T</span>
        <span className="week-code">F</span>
        <span className="week-code">S</span>
        {props.children}
      </div>
    </div>
  );
}

export default DateInputPopup;

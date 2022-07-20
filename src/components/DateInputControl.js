const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function DateInputControl(props) {
  return (
    <div className="date-control">
      <button className="btn" type="button" onClick={props.navigateToPrevMonth}>
        prev.
      </button>
      <span>{monthNames[props.currentMonth]}</span>
      <button className="btn" type="button" onClick={props.navigateToNextMonth}>
        next
      </button>
    </div>
  );
}

export default DateInputControl;

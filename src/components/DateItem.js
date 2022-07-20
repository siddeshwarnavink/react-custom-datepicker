function DateItem(props) {
  if (!props.dateObj) {
    return <button className="empty-date-item"> </button>;
  }

  const displayDate = props.dateObj.getDate();
  const cssClasses = ["date-item"];

  if (props.selected) {
    cssClasses.push("selected");
  }

  return (
    <button onClick={props.onClick} className={cssClasses.join(" ")}>
      {displayDate}
    </button>
  );
}

export default DateItem;

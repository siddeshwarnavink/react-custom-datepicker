import { useState } from "react";

import "./styles.css";
import DateInput from "./components/DateInput";

export default function App() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(null);

  function onSubmitHandler(event) {
    event.preventDefault();

    const holidayData = {
      from: fromDate,
      to: toDate
    };

    console.log("holiday data", holidayData);
  }

  return (
    <main>
      <h3>Apply for holiday</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-field">
          <label>From</label>
          <DateInput value={fromDate} onChange={setFromDate} />
        </div>

        <div className="form-field">
          <label>To:</label>
          <DateInput value={toDate} onChange={setToDate} />
        </div>

        <div className="form-field">
          <button type="submit" className="btn">
            Apply
          </button>
        </div>
      </form>
    </main>
  );
}

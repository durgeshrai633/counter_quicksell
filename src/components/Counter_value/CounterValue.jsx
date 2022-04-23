import React from "react";
import "./CounterValue.css";
function CounterValue({ counter }) {
  return <div className="counter_value">Counter Value : {counter}</div>;
}

export default CounterValue;

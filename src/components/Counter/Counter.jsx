import React, { useEffect, useState } from "react";
import CounterValue from "../Counter_value/CounterValue";
import "./Counter.css";
import { GET_URL, PUT_URL } from "../../api/API_URL";
import Loader from "../Loader/Loader";

const MAX_VALUA = process.env.REACT_APP_MAX_VALUE || 1000;

function Counter() {
  // state for the counter
  const [counter, setCounter] = useState();

  // state for the update phase
  const [loading, setLoading] = useState(false);

  // api "PUT" request call when user changes the counter
  const updateCounterApi = (counter) => {
    // set loading state to true
    if (counter <= MAX_VALUA) {
      setLoading(true);
      fetch(PUT_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ durgesh: counter }),
      }).then((res) => {
        if (res.status === 200) {
          // get the latest counter value
          getCounterApi();

          // set the loading state to false
          setLoading(false);
        }
      });
    } else {
      alert("You reached at maximum point");
    }
  };

  // handler for the button click
  const handleCounter = (value) => {
    updateCounterApi(counter + value);
  };

  // handler for the input change
  const handleCounterInput = (e) => {
    updateCounterApi(+e.target.value);
  };

  // api "GET" request call to get the latest counter value
  const getCounterApi = () => {
    fetch(GET_URL)
      .then((res) => res.json())
      .then((res) => setCounter(res !== null ? res : 1));
  };

  useEffect(() => {
    getCounterApi();
  }, []);
  return (
    <div className='container'>
      {/* loader component */}
      <Loader visibility={loading}></Loader>
      <div className='flex'>
        {/* decreament button */}
        <button
          className='flex-item'
          id='decrease'
          onClick={() => handleCounter(-1)}
        >
          <span>-</span>
        </button>

        {/* input field for the counter */}
        <input
          type='text'
          onChange={handleCounterInput}
          name='counter'
          id='counter'
          value={counter}
          className='flex-item'
        />

        {/* increament button  */}
        <button
          id='increase'
          className='flex-item'
          onClick={() => handleCounter(1)}
        >
          <span>+</span>
        </button>
      </div>

      {/* counter value component */}
      <CounterValue counter={counter}></CounterValue>
    </div>
  );
}

export default Counter;

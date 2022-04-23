import React from "react";
import "./Loader.css";
function Loader({ visibility }) {
  return (
    <div
      className='update_span'
      style={{ visibility: visibility ? "visible" : "hidden" }}
    >
      {" "}
      <div className='sk-chase'>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
      </div>{" "}
      Saving counter value
    </div>
  );
}

export default Loader;

import React from "react";

import "./index.css";
import buffering from "../../assets/img/loading-buffering.gif";

function Loading() {
  return (
    <div className="loading wrapper d-flex align-center just-center">
      <img src={buffering} alt="Page Loading" />
    </div>
  );
}

export default Loading;

import React from "react";

import "./index.css";
import loading from "../../assets/img/marvel-loading.gif";

function Loading() {
  return (
    <div className="loading wrapper d-flex align-center just-center">
      <img src={loading} alt="Page Loading" />
    </div>
  );
}

export default Loading;

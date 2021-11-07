import React from "react";
import "./Sidedrawer.css";


const Sidedrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>Gmail</li>
        <li>Images</li>
        
      </ul>
    </div>
  );
};

export default Sidedrawer;

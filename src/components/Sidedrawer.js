import React from "react";
import "./Sidedrawer.css";
import { Link } from "react-router-dom";

const Sidedrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
          <Link className="item" to="/about">About us</Link>
          <Link className="item" to="/store">Store</Link>
          <Link className="item" to="/gmail">Gmail</Link>
          <Link className="item" to="/images">Images</Link>
          
        {/* <li>About us</li>
        <li>Store</li>
        <li>Gmail</li>
        <li>Images</li> */}
        
      </ul>
    </div>
  );
};

export default Sidedrawer;
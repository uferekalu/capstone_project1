import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="country">Nigeria</div>
      <div className="settings">
        <div>
          <span className="settingsText">About</span>
          <span className="settingsText">Advertising</span>
          <span className="settingsText">Business</span>
          <span className="settingsText">How Search Works</span>
        </div>
        <div>
          <span className="settingsText">Carbon neutral since 2007</span>
        </div>
        <div>
          <span className="settingsText">Privacy</span>
          <span className="settingsText">Terms</span>
          <span className="settingsText">Settings</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

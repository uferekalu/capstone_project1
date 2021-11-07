import React from "react";
import "./Header.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <span>Gmail</span>
      <span>Images</span>
      <IconButton>
        <AppsIcon className="icon" sx={{ fontSize: 30 }}/>
      </IconButton>
      <IconButton>
        <AccountCircleIcon className="icon" sx={{ fontSize: 30 }}/>
      </IconButton>
    </div>
  );
}

export default Header;

import React from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./style.css";
const TopRightIcon = () => {
  return (
    <div className="top_right_icons">
      <IconButton aria-label="Settings" size="large">
        <SettingsIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Notifications" size="large">
        <NotificationsIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default TopRightIcon;

import React, { useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { AppBar, IconButton, SvgIcon, Toolbar } from "@mui/material";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";

function WelcomePageTopBar() {
  const componentRef = useRef();

  useEffect(() => {
    const newWidth = componentRef.current.clientWidth;
    const newHeight = componentRef.current.clientHeight;

    console.log(newWidth);
    console.log(newHeight);
  }, []);

  return (
    <AppBar
      ref={componentRef}
      color="inherit"
      position="sticky"
      sx={{ minHeight: 60, justifyContent: "center" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton color="primary" aria-label="menu" edge="start">
          <MenuIcon />
        </IconButton>
        <SvgIcon fontSize="large">
          <Logo />
        </SvgIcon>
        <IconButton color="primary" aria-label="search" edge="end">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default WelcomePageTopBar;

import React, { Fragment, useState } from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import { NavLink } from "react-router-dom";

const MyBottomNavigationAction = styled(BottomNavigationAction)({
  marginLeft: -11,
  marginRight: -11,
  whiteSpace: "nowrap",
});

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

const LoggedInBottomNav = (props) => (
  <BottomNavigation
    showLabels
    value={props.value}
    onChange={(event, newValue) => {
      props.setValue(newValue);
    }}
  >
    <MyBottomNavigationAction
      component={NavLink}
      to="/"
      disableRipple
      label="Pretraži"
      icon={<SearchIcon />}
    />
    <MyBottomNavigationAction
      component={NavLink}
      to="/favoriti"
      disableRipple
      label="Favoriti"
      icon={<FavoriteIcon />}
    />
    <MyBottomNavigationAction
      component={NavLink}
      to="/mojeture"
      disableRipple
      label="Moje ture"
      icon={<DirectionsRunIcon />}
    />
    <MyBottomNavigationAction
      component={NavLink}
      to="/poruke"
      disableRipple
      label="Poruke"
      icon={<ChatBubbleOutlineIcon />}
    />
    <MyBottomNavigationAction
      component={NavLink}
      to="/profil"
      disableRipple
      label="Profil"
      icon={<PersonOutlineIcon />}
    />
  </BottomNavigation>
);

const NotLoggedInBottomNav = (props) => (
  <BottomNavigation
    showLabels
    value={props.value}
    onChange={(event, newValue) => {
      props.setValue(newValue);
    }}
  >
    <MyBottomNavigationAction
      component={NavLink}
      to="/"
      disableRipple
      label="Pretraži"
      icon={<SearchIcon />}
    />
    <MyBottomNavigationAction
      component={NavLink}
      to="/favoriti"
      disableRipple
      label="Favoriti"
      icon={<FavoriteIcon />}
    />
    <MyBottomNavigationAction
      component={NavLink}
      to="/login"
      disableRipple
      label="Login"
      icon={<PersonOutlineIcon />}
    />
  </BottomNavigation>
);

function BottomNav(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          {loggedIn && <LoggedInBottomNav value={value} setValue={setValue} />}
          {!loggedIn && (
            <NotLoggedInBottomNav value={value} setValue={setValue} />
          )}
        </Paper>
      </HideOnScroll>
    </Fragment>
  );
}

export default BottomNav;

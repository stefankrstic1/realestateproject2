import React, { Fragment } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

// PROMENITI SLIKU U NEKI BUDUCI LOGO

import classes from "./TopBar.module.css";

function TopBar() {
  return (
    <Fragment>
      <AppBar color="inherit" position="sticky">
        <Toolbar  sx={{ justifyContent: "space-between" }}>
          <IconButton color="primary" aria-label="menu" edge="start">
            <MenuIcon />
          </IconButton>
          <SvgIcon fontSize="large">
            <Logo/>
          </SvgIcon>
          <IconButton color="primary" aria-label="search" edge="end">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <AppBar position="sticky">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton disabled size='large'>
            <Box>
              <img src={logo} alt="logo" className={classes.img} />
            </Box>
          </IconButton>
          <Button variant="contained" size="small">
            <SearchIcon></SearchIcon>
            <Typography variant="body2">Where to?</Typography>
            <IconButton color="inherit">
              <TuneIcon></TuneIcon>
            </IconButton>
          </Button>
          <IconButton color="inherit" size='large'>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      {/* <Box>
        <AppBar
          position="sticky"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src={logo} alt="logo" className={classes.img} />
            </Box>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              aria-label="login"
              edge="end"
            >
              <LoginButton />
            </IconButton>
          </Toolbar>
        </AppBar>
        <AppBar position="sticky" sx={{ display: { xs: "none", sm: "block" } }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ textAlign: "center" }}>
                <img src={logo} alt="logo" className={classes.img} />
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button variant="outlined" color="inherit">
                Postavi oglas
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button variant="text" color="inherit">
                Login
              </Button>
              <Button variant="contained" color="secondary">
                Registracija
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box> */}
    </Fragment>
  );
}

export default TopBar;

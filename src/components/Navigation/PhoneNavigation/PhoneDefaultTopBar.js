import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MapIcon from "@mui/icons-material/Map";
import ViewStreamIcon from "@mui/icons-material/ViewStream";

import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button,
  ButtonBase,
  Icon,
  IconButton,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { useAtom } from "jotai";
import { usingMapAtom } from "../../../atoms";

const MyButton = styled(Button)(({ theme }) => ({
  
}));

function PhoneDefaultTopBar(props) {
  const [usingMap, setUsingMap] = useAtom(usingMapAtom);

  return (
    <AppBar
      color="inherit"
      position="sticky"
      sx={{ minHeight: 60, justifyContent: "center" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <SvgIcon
          component={NavLink}
          to="/"
          sx={{ marginLeft: -1, marginRight: 1 }}
          fontSize="large"
          edge="start"
        >
          <Logo />
        </SvgIcon>
        <MyButton
          sx={{ borderRadius: "50px", maxHeight: "40px", minWidth: "220px" }}
          variant="contained"
          disableElevation
          disableRipple
          disableFocusRipple
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <SearchIcon fontSize="small" />
            <Typography variant="body2">Pronađi dom</Typography>
            {/* PROMENI DA NIJE BUTTON UNUTAR BUTTONA !!!!!!!!!!!!!!!!!!!!!*/}
            {/* <IconButton edge="end" color='primary'> */}
            <TuneIcon fontSize="small" />
            {/* </IconButton> */}
          </Stack>
        </MyButton>

        <IconButton
          color="primary"
          aria-label="search"
          edge="end"
          onClick={() => {
            props.toggleDrawer()
          }}
        >
        <MenuIcon />
          {/* {!usingMap && <MapIcon />}
          {usingMap && <ViewStreamIcon />} */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default PhoneDefaultTopBar;

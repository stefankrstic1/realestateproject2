import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIconFilled from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIconFilled from "@mui/icons-material/Favorite";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { NavLink } from "react-router-dom";

const MyBottomNavigationAction = styled(BottomNavigationAction)({
  // marginLeft: 0,
  // marginRight: 0,
  whiteSpace: "nowrap",
  padding: 0,
  margin: 0,
  width: "80px",
});

const MyButtonIcon = styled(IconButton)({
  // marginLeft: 16,
  // marginRight: 16,
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  width: "80px",
});

function PhoneBottomNav(props) {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        //NEMOJ DA BUDE FIKSIRANA VELICINA
        minHeight: 60,
        justifyContent: "center",
      }}
      //showLabels
      value={value}
    >
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <MyBottomNavigationAction
            component={NavLink}
            to="/pretraga"
            disableRipple
            onClick={() => {
              setValue(0);
            }}
            //label="Pretraži"
            icon={
              <Fragment>
                {value === 0 && <ExploreIconFilled fontSize="large" color='primary'/>}
                {value !== 0 && <ExploreOutlinedIcon color='primary'/>}
              </Fragment>
            }
          />
        </Grid>
        <Grid item>
          <MyBottomNavigationAction
            component={NavLink}
            to="/favoriti"
            disableRipple
            //label="Favoriti"
            onClick={() => {
              setValue(1);
            }}
            icon={
              <Fragment>
                {value === 1 && (
                  <FavoriteIconFilled fontSize="large" color="primary" />
                )}
                {value !== 1 && <FavoriteIcon color="primary" />}
              </Fragment>
            }
          />
        </Grid>
        <Grid item>
          <MyButtonIcon
            disableFocusRipple
            disableRipple
            onClick={props.toggleDrawer}
            color='primary'
          >
            <PersonOutlineIcon />
          </MyButtonIcon>
        </Grid>

        {/* <MyBottomNavigationAction
        onClick={props.toggleDrawer}
        disableRipple
        label="Login"
        icon={}
      /> */}
      </Grid>
    </BottomNavigation>
  );
}

export default PhoneBottomNav;

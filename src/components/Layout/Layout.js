import { AppBar, Box, colors, styled, useThemeProps } from "@mui/material";
import React, { Fragment } from "react";
import TopBar from "../Navigation/TopBar";
import BottomNav from "../Navigation/BottomNav";
import PhoneLayout from "./PhoneLayout/PhoneLayout";
import DesktopLayout from "./DesktopLayout/DesktopLayout";

const MyBoxBackground = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
}));

function Layout(props) {
  return (
    <Fragment>
      <MyBoxBackground
        sx={{
          display: { xs: "block", sm: "none" },
          height: "100vh",
          width: "100vw",
        }}
      >
        <PhoneLayout toggleDrawer={props.toggleDrawer}>
          {props.children}
        </PhoneLayout>
      </MyBoxBackground>
      <MyBoxBackground
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100vh",
          width: "100vw",
        }}
      >
        <DesktopLayout toggleDrawer={props.toggleDrawer}>
          {props.children}
        </DesktopLayout>
      </MyBoxBackground>

      {/* <TopBar></TopBar>
      {props.children} */}
      {/* <TopBar></TopBar>
      {props.children}
      <Box sx={{display: {sm: 'none'}}}>
        <BottomNav></BottomNav>
      </Box> */}
    </Fragment>
  );
}

export default Layout;

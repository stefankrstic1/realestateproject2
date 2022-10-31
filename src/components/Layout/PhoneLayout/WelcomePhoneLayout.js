import { AppBar, IconButton, SvgIcon, Toolbar } from "@mui/material";
import React, { Fragment } from "react";
import WelcomePageTopBar from "../../Navigation/PhoneNavigation/PhoneWelcomeTopBar";
import Questionnaire from "../../Welcome/Questionnaire";

function WelcomePhoneLayout(props) {
  return (
    <Fragment>
      <WelcomePageTopBar/>
      {props.children}
    </Fragment>
  );
}

export default WelcomePhoneLayout;

import { SvgIcon } from "@mui/material";
import React from "react";

const ICON = `M25.13,68,45.05,38.45c5.61-9.85,5.12-21.67-1.12-29.58C37.19.33
,26.63,0,24.46,0,21.89,0,11.82.34,5.22,8.42c-6.31,7.71-7,19.44-1.57,29.35Z`;

const pinStyle = {
  cursor: "pointer",
  fill: "#D35A53",
  stroke: "none",
};

function Pin({ size = 20 }) {
  return (
    <SvgIcon
      height={size}
      viewBox="0 0 48.95 68.03"
      fontSize="large"
      style={pinStyle}
    >
      <path d={ICON} cx="24.48" cy="22.27" r="13.54"  />
    </SvgIcon>
  );
}

export default Pin;

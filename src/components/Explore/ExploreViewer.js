import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import TourViewer from "./TourViewer/PhoneTourViewer/TourViewer";
import { Provider, atom, useAtom } from "jotai";
import MapViewer from "./MapViewer/PhoneMapViewer/MapViewer";

import gestureShow from "../../assets/NarednaTura.png";

import { usingMapAtom } from "../../atoms.js";
import { usingSizeWindow } from "../../atoms.js";
import { Box, Button, Popover } from "@mui/material";

function ExploreViewer() {
  const [usingMap, setUsingMap] = useAtom(usingMapAtom);
  const [usingSize, setUsingSize] = useAtom(usingSizeWindow);
  const [gestureInfoShown, setGestureInfoShown] = useState(false);

  const onClickRemoveGestureInfo = () => {
    setGestureInfoShown(true);
  };

  const componentRef = useRef();

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function handleResize() {
    const size = getWindowDimensions();

    setWidth(size.width);
    setHeight(size.height);
  }

  useLayoutEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    // const newWidth = componentRef.current.clientWidth;
    // const newHeight = componentRef.current.clientHeight;

    // setWidth(newWidth);
    // setHeight(newHeight);

    // console.log(newWidth);
    // console.log(newHeight);

    handleResize();

    window.addEventListener("resize", handleResize);

    console.log(getWindowDimensions());
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <Fragment>
      <Box ref={componentRef}>
        {!usingMap && (
          <Fragment>
            <Box>
              {!gestureInfoShown && (
                <Button
                  sx={{
                    borderRadius: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "55px",
                    left: `${width / 2 - 180}` + "px",
                    zIndex: 2,

                    width: "360px",
                    height: "160px",
                  }}
                  disableRipple
                  onClick={onClickRemoveGestureInfo}
                >
                  <img src={gestureShow} style={{width: "100%", height: "100%", objectF: "contain"}}></img>
                </Button>
              )}

              <TourViewer height={height}></TourViewer>
            </Box>
          </Fragment>
        )}
        {usingMap && height && <MapViewer height={height}></MapViewer>}
      </Box>
    </Fragment>
  );
}

export default ExploreViewer;

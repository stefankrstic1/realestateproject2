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

import { usingMapAtom } from "../../atoms.js";
import { usingSizeWindow } from "../../atoms.js";
import { Box } from "@mui/material";

function ExploreViewer() {
  const [usingMap, setUsingMap] = useAtom(usingMapAtom);
  const [usingSize, setUsingSize] = useAtom(usingSizeWindow);

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
            <TourViewer height={height}></TourViewer>
          </Fragment>
        )}
        {usingMap && height && <MapViewer height={height}></MapViewer>}
      </Box>
    </Fragment>
  );
}

export default ExploreViewer;

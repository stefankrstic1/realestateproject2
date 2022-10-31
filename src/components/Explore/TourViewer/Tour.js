import React from "react";

function Tour(props) {
  return (
    <iframe
      //style="width: 100%; height: 640px; border: none; max-width: 100%;"
      width="100%"
      height={props.height}
      frameborder="0"
      allowFullScreen
      allow="xr-spatial-tracking; gyroscope; accelerometer"
      scrolling="no"
      webkitallowfullscreen="true"
      src={`https://kuula.co/share/collection/${props.tour}?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.5&thumbs=1&margin=10&alpha=0.85&inst=0&keys=0`}
    ></iframe>

    // <iframe
    //   class="ku-embed"
    //   frameborder="0"
    //   allow="xr-spatial-tracking; gyroscope; accelerometer"
    //   allowfullscreen
    //   scrolling="no"
    //   src="https://kuula.co/share/collection/7vBhD?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.3&thumbs=2&margin=10&alpha=0.85&inst=0&keys=0"
    // ></iframe>
  );
}

export default Tour;

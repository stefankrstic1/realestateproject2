import { Card, CardActionArea } from "@mui/material";
import React from "react";
import { Popup } from "react-map-gl";
import TourCard from "../../TourViewer/PhoneTourViewer/TourCard";
import Tour from "../../TourViewer/Tour";

function MapPopup(props) {
  return (
    <Popup
      longitude={props.longitude}
      latitude={props.latitude}
      anchor="bottom"
      onClose={() => props.setShowPopup(false)}
    >
      <Card>
        <CardActionArea>
          <TourCard
            ture={{
              tura: "7vBhD",
              cena: "500",
              kvadratura: "40",
              sobnost: "1.5",
              ulica: "Šumadijska",
              grad: "Novi Sad",
            }}
          />
        </CardActionArea>
      </Card>
    </Popup>
  );
}

export default MapPopup;

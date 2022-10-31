import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Map, { Layer, Marker, Source, SymbolLayer, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";

import CustomIcons from "../../../../customicons";

import { GEOJSONMARKERI } from "../../../../podaci";

import {
  clusterCountLayer,
  clusterLayer,
  unclusteredBuildingPointLayer,
  unclusteredHousePointLayer,
} from "./ClusterLayers";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import {
  Box,
  Button,
  Container,
  requirePropFactory,
  Typography,
} from "@mui/material";
import mapDrawn from "../../../../assets/mapDrawn.png";
import mapSatellite from "../../../../assets/mapSatellite.png";

import MenuIcon from "@mui/icons-material/Menu";

import { ReactMapboxGl } from "react-map-gl";
import { usingMapAtom } from "../../../../atoms";
import { useAtom } from "jotai";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3JzcGFrIiwiYSI6ImNsOW9iMzc0cDBnZjIzcG56bmt5dGJmNWUifQ.EiiLSVPEYLnOOMAPeedp2w";

const MARKERI = [
  {
    key: "1",
    longitude: 19.84276284924871,
    latitude: 45.243724967094934,
  },
  {
    key: "2",
    longitude: 19.82956052387837,
    latitude: 45.24941944692305,
  },
  {
    key: "3",
    longitude: 19.843094719685208,
    latitude: 45.25869069207811,
  },
  {
    key: "4",
    longitude: 19.8254031588982,
    latitude: 45.25691773693626,
  },
  {
    key: "5",
    latitude: 45.25653235163125,
    longitude: 19.822141690596712,
  },
];

function MapViewer(props) {
  const mapRef = useRef(null);
  const [styleMap, setStyleMap] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [usingMap, setUsingMap] = useAtom(usingMapAtom);

  const setNewStyle = (e) => {
    e.preventDefault();
    setStyleMap((current) => !current);
  };

  // useEffect(() => {
  //   setNewStyle();
  // }, [styleMap]);

  const [viewState, setViewState] = useState({
    longitude: 19.833549,
    latitude: 45.267136,
    zoom: 13,
  });

  const onSelectMarker = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 1500 });
  }, []);

  const markers = useMemo(() =>
    MARKERI.map((marker, index) => (
      <Marker
        key={marker.key}
        longitude={marker.longitude}
        latitude={marker.latitude}
        anchor="bottom"
        onClick={() => {
          onSelectMarker(marker);
        }}
      >
        <Pin />
      </Marker>
    ))
  );

  const InitializeLayoutMap = async (map) => {
    const result = await AddPinImages(map);

    let hoveredStateId = null;
    let hoveredStateHouseId = null;
    let hoveredStateBuildingId = null;

    map.addSource("homes", {
      type: "geojson",
      data: GEOJSONMARKERI,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 60,
    });

    map.addLayer(clusterLayer);
    map.addLayer(clusterCountLayer);
    map.addLayer(unclusteredHousePointLayer);
    map.addLayer(unclusteredBuildingPointLayer);
    map.on("click", "clusters", (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["clusters"],
      });

      const clusterId = features[0].properties.cluster_id;
      map.getSource("homes").getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;

        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
        });
      });
    });

    map.on("click", "unclustered-point-house", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      console.log(coordinates);

      map.flyTo({
        center: coordinates,
        duration: 1000,
      });
    });

    map.on("click", "unclustered-point-building", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      console.log(coordinates);

      map.flyTo({
        center: coordinates,
        duration: 1000,
      });

      setShowPopup(true);
    });

    map.on("mousemove", "clusters", (e) => {
      if (e.features.length > 0) {
        if (hoveredStateId !== null) {
          map.setFeatureState(
            { source: "homes", id: hoveredStateId },
            { hover: false }
          );
        }

        hoveredStateId = e.features[0].id;
        map.setFeatureState(
          { source: "homes", id: hoveredStateId },
          { hover: true }
        );

        map.getCanvas().style.cursor = "pointer";
      }
    });

    map.on("mouseleave", "clusters", () => {
      if (hoveredStateId !== null) {
        map.setFeatureState(
          { source: "homes", id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = null;
      map.getCanvas().style.cursor = "";
    });

    map.on("mousemove", "unclustered-point-house", (e) => {
      if (e.features.length > 0) {
        if (hoveredStateHouseId !== null) {
          map.setLayoutProperty("unclustered-point-house", "icon-image", [
            "match",
            ["get", "id"],
            0,
            "house-marker-hover",
            "house-marker",
          ]);
        }

        hoveredStateHouseId = e.features[0].id;
        map.setLayoutProperty("unclustered-point-house", "icon-image", [
          "match",
          ["get", "id"],
          e.features[0].properties.id,
          "house-marker-hover",
          "house-marker",
        ]);
        // if (hoveredStateHouseId !== null) {
        //   map.setFeatureState(
        //     { source: "homes", id: hoveredStateHouseId },
        //     { hover: false }
        //   );
        // }

        // hoveredStateHouseId = e.features[0].id;
        // map.setFeatureState(
        //   { source: "homes", id: hoveredStateHouseId },
        //   { hover: true }
        // );

        map.getCanvas().style.cursor = "pointer";
      }
    });

    map.on("mouseleave", "unclustered-point-house", () => {
      map.setLayoutProperty("unclustered-point-house", "icon-image", [
        "match",
        ["get", "id"],
        0,
        "house-marker-hover",
        "house-marker",
      ]);

      hoveredStateHouseId = null;
      // if (hoveredStateHouseId !== null) {
      //   map.setFeatureState(
      //     { source: "homes", id: hoveredStateHouseId },
      //     { hover: false }
      //   );
      // }
      // hoveredStateHouseId = null;
      map.getCanvas().style.cursor = "";
    });

    map.on("mousemove", "unclustered-point-building", (e) => {
      if (e.features.length > 0) {
        if (hoveredStateHouseId !== null) {
          map.setLayoutProperty("unclustered-point-building", "icon-image", [
            "match",
            ["get", "id"],
            0,
            "house-marker-hover",
            "house-marker",
          ]);
        }

        hoveredStateHouseId = e.features[0].id;
        map.setLayoutProperty("unclustered-point-building", "icon-image", [
          "match",
          ["get", "id"],
          e.features[0].properties.id,
          "building-marker-hover",
          "building-marker",
        ]);
        // if (hoveredStateHouseId !== null) {
        //   map.setFeatureState(
        //     { source: "homes", id: hoveredStateHouseId },
        //     { hover: false }
        //   );
        // }

        // hoveredStateHouseId = e.features[0].id;
        // map.setFeatureState(
        //   { source: "homes", id: hoveredStateHouseId },
        //   { hover: true }
        // );

        map.getCanvas().style.cursor = "pointer";
      }
    });

    map.on("mouseleave", "unclustered-point-building", () => {
      map.setLayoutProperty("unclustered-point-building", "icon-image", [
        "match",
        ["get", "id"],
        0,
        "building-marker-hover",
        "building-marker",
      ]);

      // if (hoveredStateHouseId !== null) {
      //   map.setFeatureState(
      //     { source: "homes", id: hoveredStateHouseId },
      //     { hover: false }
      //   );
      // }
      hoveredStateHouseId = null;
      map.getCanvas().style.cursor = "";
    });

    //console.log("AAAAAAAAAA");

    // map.on('click', 'unclustered-point-house' || 'unclustered-point-building', (e) => {
    //   const coordinates = e.features[0].geometry.coordinates.slice();
    //   const mag = e.features[0].properties.mag;

    // })
  };

  const AddPinImages = (map) => {
    CustomIcons.forEach((icon) => {
      const customIcon = new Image(35, 48);
      customIcon.onload = () => {
        map.updateImage(icon.name, customIcon);
        map.setLayoutProperty(clusterLayer.id, "visibility", "visible");
        map.setLayoutProperty(clusterCountLayer.id, "visibility", "visible");
        map.setLayoutProperty(
          unclusteredBuildingPointLayer.id,
          "visibility",
          "visible"
        );
        map.setLayoutProperty(
          unclusteredHousePointLayer.id,
          "visibility",
          "visible"
        );
        //map.flyTo({ center: [viewState.longitude, viewState.latitude] });
      };
      customIcon.src = icon.src;
      map.addImage(icon.name, customIcon);
    });
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: styleMap
        ? "mapbox://styles/krspak/cl9vcsar5004s14nx655jx2vx"
        : "mapbox://styles/krspak/cl9ob6im8002j15o36jdvls7e",
      center: [viewState.longitude, viewState.latitude],
      zoom: viewState.zoom,
      pitch: 30,
      // onMove: (evt) => {
      //   setViewState(evt.viewState);
      //   console.log(evt);
      // },
    });

    map.on("move", () => {
      setViewState({
        longitude: map.getCenter().lng,
        latitude: map.getCenter().lat,
        zoom: map.getZoom(),
      });
      //console.log(evt.viewState);
    });

    map.on("load", () => {
      InitializeLayoutMap(map);
    });

    return () => map.remove();
  }, [styleMap]);

  //   useEffect(() => {
  //     mapRef.current?.addImage("house-marker", HouseLogo);
  //     mapRef.current?.addImage("building-marker", BuildingLogo);
  //     mapRef.current?.addLayer(<Layer {...unclusteredPointLayer} />);
  //   }, []);

  return (
    <Fragment>
      <Box>
        <Box
          position="absolute"
          top="20"
          left="20"
          width="60"
          height="45"
          borderRadius="4px"
          paddingX={4}
          paddingY={3}
          zIndex={1}
          // sx={{
          //   backgroundImage: styleMap
          //     ? `url(${"../../../../assets/mapDrawn.png"})`
          //     : `url(${"../../../../assets/mapSatellite.png"})`,
          // }}
        >
          <Button
            onClick={() => {
              setStyleMap((current) => !current);
            }}
            variant="contained"
            sx={{ width: "100px" }}
          >
            {!styleMap ? "Satellite" : "Map"}
          </Button>
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom="3%"
          left="50%"
          boxSizing="border-box"
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "25px",
              textTransform: "capitalize",
              left: "-50%",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              setUsingMap(false);
            }}
          >
            <MenuIcon fontSize="small" sx={{ display: "inline-block" }} />
            <Typography variant="subtitle" sx={{ marginX: 0.5 }}>
              Lista
            </Typography>
          </Button>
        </Box>
        <div
          ref={mapRef}
          style={{
            width: "100vw",
            height: props.height - 60,
            textAlign: "center",
          }}
        >
        </div>
      </Box>
    </Fragment>
    // <Map
    //   {...viewState}
    //   onMove={(evt) => setViewState(evt.viewState)}
    //   //   SKLONI FIKSIRANU VREDNOST VISINE GORNJEG I DONJEG BARA (120)
    //   style={{ width: "100vw", height: props.height - 120 }}
    //   mapStyle="mapbox://styles/krspak/cl9ob6im8002j15o36jdvls7e"
    //   mapboxAccessToken="pk.eyJ1Ijoia3JzcGFrIiwiYSI6ImNsOW9iMzc0cDBnZjIzcG56bmt5dGJmNWUifQ.EiiLSVPEYLnOOMAPeedp2w"
    //   interactiveLayerIds={[clusterLayer.id]}
    //   onClick={onClusterClick}
    //   pitch={30}
    //   maxZoom={17}
    //   ref={mapRef}
    // >
    //   {/* <Source
    //     id="homes"
    //     type="geojson"
    //     data={GEOJSONMARKERI}
    //     cluster={true}
    //     clusterMaxZoom={14}
    //     clusterRadius={30}
    //   >
    //     <Layer {...clusterLayer} />
    //     <Layer {...clusterCountLayer} />
    //     <Layer {...unclusteredHousePointLayer} />
    //     <Layer {...unclusteredBuildingPointLayer} />
    //   </Source> */}
    // </Map>
  );
}

export default MapViewer;

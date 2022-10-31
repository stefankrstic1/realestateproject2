import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import Tour from "../Explore/TourViewer/Tour";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Container } from "@mui/system";

function TourViewer() {
  return (
    <Fragment>
      <Container sx={{ paddingTop: 1, paddingBottom: 1 }}>
        <Card>
          <CardMedia
            component="iframe"
            width="100%"
            height="500"
            frameborder="0"
            allowfullscreen="true"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            webkitallowfullscreen
            src={`https://kuula.co/share/collection/7vBhD?logo=1&info=1&fs=1&vr=0&autorotate=0.3&sd=1&gyro=0&thumbs=-1&inst=0`}
          />
          <CardActionArea>
            <CardContent>
              <Typography variant="h5">500e</Typography>
              <Typography></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>

      <Container sx={{ paddingTop: 1, paddingBottom: 1 }}>
        <Card>
          <CardMedia
            component="iframe"
            width="100%"
            height="600"
            frameborder="0"
            allowfullscreen="true"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            webkitallowfullscreen
            src={`https://kuula.co/share/collection/7vBhD?logo=1&info=1&fs=1&vr=0&autorotate=0.3&sd=1&gyro=0&thumbs=-1&inst=0`}
          />
          <CardActionArea>
            <CardContent>
              <Typography variant="h5">500e</Typography>
              <Typography></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>

      <Container sx={{ paddingTop: 1, paddingBottom: 1 }}>
        <Card>
          <CardMedia
            component="iframe"
            width="100%"
            height="300"
            frameborder="0"
            allowfullscreen="true"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            webkitallowfullscreen
            src={`https://kuula.co/share/collection/7vBhD?logo=1&info=1&fs=1&vr=0&autorotate=0.3&sd=1&gyro=0&thumbs=-1&inst=0`}
          />
          <CardActionArea>
            <CardContent>
              <Typography variant="h5">500e</Typography>
              <Typography></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>

      {/* <Grid   
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Grid item>
          <Button variant="contained" sx={{ width: "50%" }}>
            <ArrowUpwardIcon></ArrowUpwardIcon>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ width: "50%" }}>
            <ArrowDownwardIcon></ArrowDownwardIcon>
          </Button>
        </Grid>
      </Grid> */}
    </Fragment>
  );
}

export default TourViewer;

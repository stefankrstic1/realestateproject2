import {
  Box,
  Grid,
  IconButton,
  Paper,
  styled,
  Typography,
  Button,
  Card,
  CardActionArea,
  Popover,
} from "@mui/material";
import React, { Fragment } from "react";
import Tour from "../Tour";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { flexbox } from "@mui/system";

const TopAndBottomBarHeight = 120;
const TourInfoBar = 150;

const MyTypography = styled("div")(({ theme }) => ({
  display: "flex",
  margin: 3,
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(0),
  borderRadius: "25px",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "25px",
}));

const MyAgencyPaper = styled(Paper)(({ theme }) => ({
  border: "1px solid " + theme.palette.warning.main,
  backgroundColor: theme.palette.grey[300],
  color: theme.palette.warning.main,
  padding: 1,
  maxWidth: "50px",
  minWidth: "50px",
}));

const MyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
}));

const MyCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
}));

function TourCard(props) {
  return (
    <Fragment>
      <MyCard
        raised={false}
        elevation={0}
        sx={{
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", p: "0" }}>
          <Tour
            tour={props.ture.tura}
            height={props.height - (TourInfoBar + TopAndBottomBarHeight)}
          />
        </Box>
        <CardActionArea>
          <MyBox
            sx={{
              minHeight: "50px",
              textAlign: "center",
              justifyContent: "center",
              height: TourInfoBar,
            }}
            display="flex"
            alignItems="center"
          >          
            <Grid
              maxWidth={500}
              container
              spacing={3}
              direction="row"
              p={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={6}>
                    <MyTypography variant="h5">
                      {props.ture.cena} €
                    </MyTypography>
                  </Grid>
                  <Grid item xs={4}>
                    <MyTypography variant="h5">
                      {props.ture.kvadratura} m<sup>2</sup>
                    </MyTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MyTypography variant="h5">
                      {props.ture.sobnost}
                    </MyTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      {props.ture.ulica}, {props.ture.grad}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <MyAgencyPaper variant="outlined" elevation={0}>
                  <Typography
                    variant="body2"
                    align="center"
                  >{`Lider \ Winner`}</Typography>
                </MyAgencyPaper>
              </Grid>
              <Grid item xs={2}>
                {/* <IconButton> */}
                <FavoriteBorderIcon fontSize="large" />
                {/* </IconButton> */}
              </Grid>
              <Grid item>
                <MyTypography sx={{ paddingX: 2 }}>...</MyTypography>
              </Grid>
            </Grid>
          </MyBox>
        </CardActionArea>
      </MyCard>
    </Fragment>
  );
}

export default TourCard;

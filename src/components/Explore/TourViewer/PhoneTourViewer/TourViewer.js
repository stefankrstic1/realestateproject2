import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Slide,
  Stack,
  styled,
  SvgIcon,
  Typography,
} from "@mui/material";
import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";

import Tour from "../Tour";
import { textAlign } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import TourCard from "./TourCard";
import {
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectFade,
  EffectFlip,
  Pagination,
} from "swiper";

import { usingMapAtom } from "../../../../atoms";

import "swiper/css";
import classes from "./TourViewer.module.css";
import { useAtom } from "jotai";

const TURE_PODACI = [
  {
    tura: "7vBhD",
    cena: "500",
    kvadratura: "40",
    sobnost: "1.5",
    ulica: "Šumadijska",
    grad: "Novi Sad",
  },
  {
    tura: "7vr7H",
    cena: "600",
    kvadratura: "60",
    sobnost: "3.0",
    ulica: "Cara Dušana",
    grad: "Novi Sad",
  },
  {
    tura: "7vr7M",
    cena: "550",
    kvadratura: "45",
    sobnost: "2.5",
    ulica: "Bulevar Cara Lazara",
    grad: "Novi Sad",
  },
  {
    tura: "7l1x8",
    cena: "550",
    kvadratura: "45",
    sobnost: "2.5",
    ulica: "Bulevar Cara Lazara",
    grad: "Novi Sad",
  },
];

function TourViewer(props) {
  const [usingMap, setUsingMap] = useAtom(usingMapAtom);

  return (
    <Fragment>
      <Box sx={{ position: "relative" }}>
        <Swiper
          effect={"coverflow"}
          // creativeEffect={{
          //   prev: {
          //     shadow: true,
          //     translate: [0, 0, -400],
          //   },
          //   next: {
          //     translate: ["100%", 0, 0],
          //   },
          // }}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 90,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          loop={true}
          style={{ width: "100%", height: props.height - 120 }}
        >
          {TURE_PODACI.map((value, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "100%", height: props.height - 120 }}
            >
              <TourCard ture={value} height={props.height} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box
          sx={{
            width: "100vw",
            height: "60px",
            bottom: "0px",
            position: "fixed",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "60px" }}
          >
            <Grid item xs={6}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "25px",
                  minWidth: "45vw",
                  textTransform: "capitalize",
                  alignItems: "center",
                }}
              >
                <FavoriteIcon fontSize="small" />
                <Typography variant="body1" sx={{ marginX: 0.5 }}>
                  {" "}
                  Favoriti
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  minWidth: "45vw",
                  textTransform: "capitalize",
                  alignItems: "center",
                }}
                onClick={() => {
                  setUsingMap(true);
                }}
              >
                <MapIcon fontSize="small" />
                <Typography variant="body1" sx={{ marginX: 0.5 }}>
                  Mapa{" "}
                </Typography>
                {/* <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  spacing={1}
                >
                  <Grid item>
                    <MapIcon fontSize="small"/>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Mapa</Typography>
                  </Grid>
                </Grid> */}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Swiper className={classes.swiper}>
        <SwiperSlide className={classes["swiper-slide"]}>
          <TourCard ture={TURE_PODACI[0]} height={props.height}></TourCard>
        </SwiperSlide>
        <SwiperSlide className={classes["swiper-slide"]}>
          <TourCard ture={TURE_PODACI[1]} height={props.height}></TourCard>
        </SwiperSlide>
        <SwiperSlide className={classes["swiper-slide"]}>
          <TourCard ture={TURE_PODACI[2]} height={props.height}></TourCard>
        </SwiperSlide>
      </Swiper> */}
      {/* 
        <Swiper className={classes.swiper}>
          {TURE_PODACI.map((tourcard, index) => {
            <Slide key={index} className={classes["swiper-slide"]}>
              <TourCard ture={tourcard} height={height}></TourCard>
            </Slide>;
          })}
          {/* {TURE_PODACI.map((tourcard, index) => {
            <SwiperSlide key={index} className={classes["swiper-slide"]}>
              <TourCard ture={tourcard} height={height}></TourCard>
            </SwiperSlide>;
          })} 
        </Swiper> */}

      {/* <Box>
          <Stack
            sx={{ height: (height - 120) * 0.1 }}
            direction="row"
            justifyContent="center"
            spacing={2}
            padding={1}
          >
            <Button variant="contained" sx={{ width: "100%" }}>
              <KeyboardArrowUpRoundedIcon fontSize="large" />
            </Button>
            <Button variant="contained" sx={{ width: "100%" }}>
              <KeyboardArrowDownRoundedIcon fontSize="large" />
            </Button>
          </Stack>
        </Box> */}
      {/* <Box sx={{ height: height * 0.15 }}>
          <Stack
            direction="row"
            spacing={2}
            padding={1}
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction="column" spacing={1}>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <MyTypography
                  sx={{ p: 0.5, minWidth: "60px", minHeight: "35px", top: '50%', left: '50%' }}
                  noWrap
                >
                  500 €
                </MyTypography>
                <MyTypography
                  sx={{ p: 0.5, minWidth: "60px", minHeight: "35px" }}
                  noWrap
                >
                  40 m<sup>2</sup>
                </MyTypography>
                <MyTypography
                  sx={{ p: 0.5, minWidth: "60px", minHeight: "35px" }}
                  noWrap
                >
                  2.0
                </MyTypography>
              </Stack>
              <MyTypography sx={{ p: 0.5 }}>Šumadijska, Novi Sad</MyTypography>
            </Stack>
            <MyTypography
              sx={{ p: 0.5 }}
              align="center"
            >{`Lider \ Winner`}</MyTypography>
            <IconButton>
              <FavoriteBorderIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
        <Box sx={{ height: height * 0.1 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={2}
            padding={1}
          >
            <Button variant="contained" sx={{ width: "100%" }}>
              <KeyboardArrowUpRoundedIcon fontSize="large" />
            </Button>
            <Button variant="contained" sx={{ width: "100%" }}>
              <KeyboardArrowDownRoundedIcon fontSize="large" />
            </Button>
          </Stack> */}
      {/* </Box> */}
    </Fragment>
  );
}

export default TourViewer;

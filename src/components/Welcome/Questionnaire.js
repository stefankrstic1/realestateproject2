import {
  Box,
  Button,
  Stack,
  Container,
  IconButton,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import StoreIcon from "@mui/icons-material/Store";

import { NavLink } from "react-router-dom";

const MyIconToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  // "&&.Mui-selected + &&.Mui-selected": {
  //   borderLeft: `1px solid &{fade(theme.palette.action.active, 0.12)}`,
  //   borderLeft: 0,
  //   marginLeft: 0,
  // },

  "& .MuiToggleButtonGroup-grouped": {
    marginLeft: theme.spacing(3) + " !important",
    marginRight: theme.spacing(3) + " !important",
    border: "0px solid !important",
    borderRadius: "20px !important",
    color: theme.palette.primary.dark + " !important",
    backgroundColor: theme.palette.common.white + " !important",

    // "&:hover": {

    // },

    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.dark + " !important",
      color: theme.palette.common.white + " !important",
    },
    // "&:not(:first-of-type)": {},

    // "&:first-of-type": {},
    // "&:not(:last-of-type)": {},
  },
}));

const MyTextToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    marginLeft: theme.spacing(0.5) + " !important",
    marginRight: theme.spacing(0.5) + " !important",
    border: "0px solid !important",
    borderRadius: "25px !important",
    padding: 1,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.common.white,

    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },

    "&.Mui-disabled": {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.common.white,
    },

    // "&:last-of-type": {
    //   backgroundColor: theme.palette.primary.dark + " !important",
    //   color: theme.palette.common.white + " !important",
    // },

    // "&:hover": {
    //   backgroundColor: "transparent !important",
    // },
  },
}));

const MyCharacteristicsToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      marginLeft: theme.spacing(1) + " !important",
      marginRight: theme.spacing(1) + " !important",
      border: "0px solid !important",
      borderRadius: "25px !important",
      padding: 1,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[400],

      "&:hover": {
        // "@media (hover: none)": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[400],
        // }
      },

      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      },

      // "&:last-of-type": {
      //   backgroundColor: theme.palette.primary.dark + " !important",
      //   color: theme.palette.common.white + " !important",
      // },

      // "&:hover": {
      //   backgroundColor: "transparent !important",
      // },
    },
  })
);

const MyIconButton = styled(ToggleButton)({
  minWidth: 40,
  minHeight: 40,
});

const MyTextButton = styled(ToggleButton)(({ theme }) => ({
  textTransform: "initial",
  minWidth: 125,
  height: 30,
  justifyContent: "center",
}));

const MyCharacteristicsButton = styled(ToggleButton)({
  textTransform: "initial",
  minWidth: 60,
});

function Questionnaire() {
  const homeCharacteristic = [
    "namešten",
    "prazan",
    "miran kraj",
    "luksuzan",
    "pet friendly",
    "sa garažom",
    "blizu fakulteta",
    "odmah useljiv",
    "blizu centra",
    "svetao",
    "klima",
    "lift",
    "sa terasom",
  ];

  const [typeQuestionnareSelection, setTypeQuestionnareSelection] =
    useState(true);

  const [homeType, setHomeType] = useState(["house"]);
  const [serviceType, setServiceType] = useState(["izdavanje"]);
  const [city, setCity] = useState(["beograd"]);

  const [characteristics, setCharacteristics] = useState([]);

  const characteristicsHandleChange = (event, newCharacteristicsType) => {
    console.log(newCharacteristicsType);
    if (newCharacteristicsType.length < 6) {
      setCharacteristics(newCharacteristicsType);
    }
  };

  const homeTypeHandleChange = (event, newHomeType) => {
    if (newHomeType.length) {
      setHomeType(newHomeType);
    }
  };

  const serviceTypeHandleChange = (event, newServiceType) => {
    if (newServiceType !== null) {
      setServiceType(newServiceType);
    }
  };

  const cityHandleChange = (event, newCity) => {
    if (newCity !== null) {
      setCity(newCity);
    }
  };

  const typeSelectedHandler = () => {
    setTypeQuestionnareSelection(!typeQuestionnareSelection);
  };

  return (
    <Fragment>
      {typeQuestionnareSelection && (
        <Container>
          <Stack
            padding={4}
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ height: "90vh" }}
          >
            <Stack direction="row" spacing={2}>
              <MyIconToggleButtonGroup
                // sx={{
                //   gridTemplateColumns: "auto auto auto auto",
                //   gridGap: "25px",
                // }}
                color="primary"
                value={homeType}
                onChange={homeTypeHandleChange}
              >
                <MyIconButton value="house" aria-label="house">
                  <HomeRoundedIcon sx={{ width: "40px", height: "40px" }} />
                </MyIconButton>
                <MyIconButton value="flat" aria-label="flat">
                  <LocationCityOutlinedIcon
                    sx={{ width: "40px", height: "40px" }}
                  />
                </MyIconButton>
              </MyIconToggleButtonGroup>
            </Stack>
            <Stack direction="row" spacing={2}>
              <MyTextToggleButtonGroup
                color="primary"
                value={serviceType}
                exclusive
                onChange={serviceTypeHandleChange}
              >
                <MyTextButton value="izdavanje">Izdavanje</MyTextButton>
                <MyTextButton value="prodaja">Prodaja</MyTextButton>
              </MyTextToggleButtonGroup>
            </Stack>
            <Stack direction="row" spacing={2}>
              <MyTextToggleButtonGroup
                color="primary"
                value={city}
                exclusive
                onChange={cityHandleChange}
              >
                <MyTextButton value="beograd">Beograd</MyTextButton>
                <MyTextButton value="novi sad">Novi Sad</MyTextButton>
              </MyTextToggleButtonGroup>
            </Stack>
            <Divider flexItem></Divider>
            <Box paddingY={3}>
              <Button
                sx={{ minWidth: "110px" }}
                variant="contained"
                onClick={typeSelectedHandler}
              >
                Nastavi
              </Button>
            </Box>
          </Stack>
        </Container>
      )}
      {!typeQuestionnareSelection && (
        <Container maxWidth="xs" sx={{ p: 2 }}>
          <IconButton
            variant="outlined"
            color="primary"
            onClick={typeSelectedHandler}
          >
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ height: "60vh" }}
          >
            <Container>
              <Stack direction="row">
                <Container>
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Karakteristike
                  </Typography>
                  <Typography variant="body2" color="primary">
                    Odaberite ključne karakteristike vašeg novog doma
                  </Typography>
                </Container>
              </Stack>
            </Container>
            <Grid container spacing={2}>
              <MyCharacteristicsToggleButtonGroup
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "left",
                  padding: 1,
                  marginLeft: 3,
                  marginRight: 2,
                }}
                color="primary"
                value={characteristics}
                onChange={characteristicsHandleChange}
              >
                {homeCharacteristic.map((val) => {
                  return (
                    <MyCharacteristicsButton
                      sx={{ m: 0.5 }}
                      value={val}
                      size="small"
                      key={val}
                    >
                        <Box sx={{ paddingX: 1 }}>{val}</Box>
                    </MyCharacteristicsButton>
                  );
                })}
              </MyCharacteristicsToggleButtonGroup>
            </Grid>
            <Divider flexItem></Divider>
            <Box paddingY={2}>
              <Button
                component={NavLink}
                to="/pretraga"
                disableRipple
                label="Pretraži"
                variant="contained"
                sx={{ minWidth: "150px" }}
              >
                {`Pretraži ${characteristics.length}/5`}
              </Button>
            </Box>
          </Stack>
        </Container>
      )}
    </Fragment>
  );
}

export default Questionnaire;

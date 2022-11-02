import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./components/Layout/Layout";
import {
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Box,
} from "@mui/material";
import FavoritesPage from "./pages/FavoritesPage";
import MyToursPage from "./pages/MyToursPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";
import { useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik"],
  },

  palette: {
    white: "#ffffff",
  },
});

function App() {
  const [drawerState, setDrawerState] = useState(false);

  const list = () => {
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Milos Milosevic" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Izdavanje" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Prodaja" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Novogradnja" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Info" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>;
  };

  const toggleDrawer = () => {
    console.log("KLIKNUO");
    setDrawerState(!drawerState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout toggleDrawer={toggleDrawer}>
        <Drawer anchor="right" open={drawerState} onClose={toggleDrawer}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Milos Milosevic" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Izdavanje" />
                <ChevronRightRoundedIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Prodaja" />
                <ChevronRightRoundedIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Novogradnja" />
                <ChevronRightRoundedIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Info" />
                <ChevronRightRoundedIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/pretraga" element={<ExplorePage />} />
          <Route path="/favoriti" element={<FavoritesPage />} />
          <Route path="/mojeture" element={<MyToursPage />} />
          <Route path="/poruke" element={<MessagesPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

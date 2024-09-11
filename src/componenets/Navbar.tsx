import darkLogo from "../assets/dark_logo.svg";
import lightLogo from "../assets/light_logo.svg";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { useState } from "react";
import Switch from "@mui/material/Switch";

import SearchBar from "./SearchBar";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{ py: 2, boxShadow: 3 }}>
          <header>
            <Container>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid size={3}>
                  <Box
                    component="img"
                    src={theme.palette.mode === "dark" ? lightLogo : darkLogo}
                    alt="Logo"
                    sx={{ width: 200 }} // Width in pixels
                  />
                </Grid>
                <Grid size={5}>
                  <SearchBar />
                </Grid>
                <Grid size={4} sx={{ textAlign: "right" }}>
                  <Switch onChange={() => setDarkMode(!darkMode)} />
                </Grid>
              </Grid>
            </Container>
          </header>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Navbar;

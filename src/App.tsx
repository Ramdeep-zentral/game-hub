import "./App.css";
import Navbar from "./componenets/Navbar";
import "./App.css";
import GameGrid from "./componenets/GameGrid";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import GenreList from "./componenets/GenreList";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={2} sx={{ py: 3 }}>
          <Grid size={2}>
            <GenreList></GenreList>
          </Grid>
          <Grid size={10}>
            <GameGrid></GameGrid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

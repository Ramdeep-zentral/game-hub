import Grid from "@mui/material/Grid2";
import { TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <div>
      <Grid>
        <TextField fullWidth placeholder="Search..." variant="outlined" />
      </Grid>
    </div>
  );
};

export default SearchBar;

import Grid from "@mui/material/Grid2";
import useGames from "../hooks/useGames";
import Typography from "@mui/material/Typography";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  // Use a dynamic number of skeletons based on the number of games (default 6)
  const SkeletonCount = data.length > 0 ? data.length : 9;
  const Skeletons = Array.from({ length: SkeletonCount }, (_, index) => index);

  return (
    <div>
      {error && <Typography variant="h5">{error}</Typography>}

      <Grid spacing={1} container>
        {isLoading &&
          Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <Grid
            key={game.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 4,
            }}
          >
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GameGrid;

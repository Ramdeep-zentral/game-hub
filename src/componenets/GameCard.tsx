import { CardContent, CardMedia, Grid2, Typography } from "@mui/material";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import getCropedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <CardContent
        sx={{
          borderRadius: 3,
          boxShadow: "10px 10px 10px #eee",
          border: "1px solid #eee",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={getCropedImageUrl(game.background_image)}
          alt="My Image"
          sx={{
            mb: 1,
          }}
        />
        <Typography variant="subtitle2">{game.name}</Typography>
        <Grid2 container spacing={2} alignItems={"center"} sx={{ mt: 1 }}>
          <Grid2 size={9}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
          </Grid2>
          <Grid2 size={3}>
            <GameScore score={game.metacritic} />
          </Grid2>
        </Grid2>
      </CardContent>
    </div>
  );
};

export default GameCard;

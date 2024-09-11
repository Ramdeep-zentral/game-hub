import { Box } from "@mui/material";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <div>
      <Box
        sx={{
          backgroundColor: color,
          color: "white",
          textAlign: "center",
          borderRadius: 1,
        }}
      >
        {score}
      </Box>
    </div>
  );
};

export default GameScore;

import { Skeleton, Stack } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Stack spacing={0} sx={{ borderRadius: 3 }}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rectangular" width={310} height={140} />
      <Skeleton variant="text" sx={{ fontSize: "1rem", width: 90 }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

export default GameCardSkeleton;

import { Skeleton } from "@mui/material";

const ResultLoadingSkeleton = () => {
  return (
    <div>
      <Skeleton variant="text" width={190} sx={{ marginLeft: "0.85rem" }} />
      <Skeleton
        variant="rectangular"
        width={190}
        height={190}
        sx={{ margin: "0.85rem" }}
      />
      <Skeleton variant="text" width={190} sx={{ margin: "0.85rem" }} />
    </div>
  );
};

export default ResultLoadingSkeleton;

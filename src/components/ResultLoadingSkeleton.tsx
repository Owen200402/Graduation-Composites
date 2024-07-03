import { Skeleton } from '@mui/material';

const ResultLoadingSkeleton = () => {
  return (
    <div>
      <Skeleton variant="text" width={190} />
      <Skeleton
        variant="rectangular"
        width={190}
        height={190}
      />
      <Skeleton variant="text" width={190} />
    </div>
  );
};

export default ResultLoadingSkeleton;

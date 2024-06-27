import { Skeleton } from '@mui/material';

const ResultLoadingSkeleton = () => {
  return (
    <div>
      <Skeleton variant="text" width={100} sx={{ margin: '1rem' }} />
      <Skeleton
        variant="rectangular"
        width={190}
        height={190}
        sx={{ margin: '1rem' }}
      />
      <Skeleton variant="text" width={190} />
    </div>
  );
};

export default ResultLoadingSkeleton;

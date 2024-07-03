import { Skeleton } from "@mui/material";

const LoadingSkeleton = () => {
    return <div>
        <Skeleton
            variant="rectangular"
            width={190}
            height={190}
            sx={{ margin: '1rem' }}
          />
          <Skeleton
            variant="text"
            width={190}
            sx={{ margin: '0.5rem' }}
          />
    </div>
}

export default LoadingSkeleton;
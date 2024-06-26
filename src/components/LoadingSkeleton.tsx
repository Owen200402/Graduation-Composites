import { Skeleton } from "@mui/material"

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
          />
    </div>
}

export default LoadingSkeleton;
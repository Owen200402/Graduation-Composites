import { Skeleton } from "@mui/material"

const LoadingSkeleton = () => {
    return <div>
        <Skeleton
            variant="rectangular"
            width={180}
            height={180}
            sx={{ margin: '1rem' }}
          />
          <Skeleton
            variant="text"
            width={180}
            sx={{ fontSize: '1rem', margin: '1rem' }}
          />
    </div>
}

export default LoadingSkeleton;
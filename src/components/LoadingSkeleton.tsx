import { Skeleton } from "@mui/material"

const LoadingSkeleton = () => {
    return <div>
        <Skeleton
            variant="rectangular"
            width={170}
            height={170}
            sx={{ margin: '0.8rem' }}
          />
          <Skeleton
            variant="text"
            width={170}
            sx={{ fontSize: '1rem', margin: '0.8rem' }}
          />
    </div>
}

export default LoadingSkeleton;
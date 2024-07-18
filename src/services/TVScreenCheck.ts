import { useMediaQuery } from "@mui/material";

const TVScreenCheck = () => {
    return useMediaQuery('(min-width:3000px)');
}

export default TVScreenCheck;

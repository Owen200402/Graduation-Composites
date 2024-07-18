import { useMediaQuery } from "@mui/material";

const checkTVScreen = () => {
    return useMediaQuery('(min-width:3000px)');
}

export default checkTVScreen;

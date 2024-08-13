import { useMediaQuery } from "@mui/material";

const checkTVScreen = () => {
    return useMediaQuery('(min-width:3000px)'); // 4k screen: 3840 * 1440
}

export default checkTVScreen;

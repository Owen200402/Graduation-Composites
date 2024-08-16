import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import { Divider, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import TVScreenCheck from "../services/checkTVScreen";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CompositeDialog = () => {
  const theme = useTheme();
  const is4KScreen = TVScreenCheck();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <DescriptionIcon
          onClick={handleClickOpen}
          sx={{
            cursor: "pointer",
            fontSize: is4KScreen ? 50 : 40,
            pl: 1.2,
            mt: 1.2,
            color: theme.palette.mode === "dark" ? "#f1f2f3" : "#0055b7",
          }}
        ></DescriptionIcon>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.mode === "dark" ? "#f1f2f3" : "#023266",
              textAlign: "center",
              mt: 1,
              mr: 2,
              fontSize: is4KScreen ? 22 : 15,
            }}
          >
            About
          </Typography>
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "#0055B7" }}
          id="customized-dialog-title"
        >
          <Typography variant="h5">Graduation Composite</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Typography variant="h5" gutterBottom margin={0.2} color="secondary.dark">
            Intro: 
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;The Digital Graduation Composites Gallery
            features alumni from 1930 to 2020 in the UBC Electrical and Computer
            Engineering Department. You can filter cohort composites by year and
            search by name. The original framed composites are displayed
            throughout the MCLD building, at the specific floor indicated in
            this gallery.
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;For the years 1930 to 1969, individual
            pictures can be enlarged and animated. The animations were created
            using an AI thin-plate motion model.
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;For all years you can choose from four music
            genres to play in the background while viewing the composites.
          </Typography>
          <Divider sx={{ bgcolor: "black" }} />
          <Typography variant="h5" gutterBottom margin={0.2} color="red">
            Disclaimer: 
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;All music used in this project remains the
            property of its respective copyright owners and is utilized solely
            for educational and non-commercial purposes. Reproduction rights are
            covered under a [license to be specified].
          </Typography>
          <Divider sx={{ bgcolor: "black" }} />
          <Typography variant="h5" gutterBottom margin={0.2} color="green">
            Credit: 
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;All software for this digital signage
            project is owned by UBC ECE. We would like to acknowledge Owen
            Zheng, our 2024 Co-op student from UBC Computer Science, for his
            implementation of this project..
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Done
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default CompositeDialog;

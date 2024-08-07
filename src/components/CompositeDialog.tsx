import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "@mui/material";
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
            fontSize: 40,
            pl: 1,
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
              mt: is4KScreen ? 0 : 1,
              mr: 2,
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
        <DialogTitle sx={{ m: 0, p: 2, color: "#0055B7" }} id="customized-dialog-title">
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
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;The graduation composite features past
            graduates from 1970 to 2020 in UBC's electrical and computer
            engineering department.
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;This website (also used for digital signage
            project) showcases a collection of graduated student photos which is
            filterable by years. As a user, you can also click on people's faces
            to enlarge them, or search the their names in the search bar at the
            bottom of the page.
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;We use AI thin-plate model to animate photos
            from 1930 to 1969 given the permission of the department. We also
            incorporated audios of the years from four genres of which you
            can choose to play on the side while viewing the composites.
          </Typography>
          <Typography variant="h6" gutterBottom>
            &nbsp;&nbsp;&nbsp;&nbsp;All software used for this project is owned
            by ECE, and the development of this website gives credit for Owen
            Zheng, our 2024 summer Co-op student, who is currently studying BSc
            Computer Science at the University of British Columbia.
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

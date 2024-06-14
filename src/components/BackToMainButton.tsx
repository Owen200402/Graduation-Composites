import { Button, Typography } from "@mui/material";

interface Props {
  onClickBackToMain: () => void;
}

const BackToMainButton = ({ onClickBackToMain }: Props) => {
  return (
    <Button
      variant="text"
      color="secondary"
      onClick={() => onClickBackToMain()}
    >
      <Typography variant="caption">Pick Another Year</Typography>
    </Button>
  );
};

export default BackToMainButton;

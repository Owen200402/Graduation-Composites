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
      <Typography variant="caption">Other Years</Typography>
    </Button>
  );
};

export default BackToMainButton;

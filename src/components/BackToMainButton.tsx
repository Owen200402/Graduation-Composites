import { Button } from "@mui/material";

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
      Select From Another Year
    </Button>
  );
};

export default BackToMainButton;

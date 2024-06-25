import { ArrowLeft } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

interface Props {
  onClickBackToMain: () => void;
}

const BackToMainButton = ({ onClickBackToMain }: Props) => {
  return (
    <Button
      variant="outlined"
      color="error"
      startIcon={<ArrowLeft />}
      onClick={() => onClickBackToMain()}
      size="small"
    >
      Back
    </Button>
  );
};

export default BackToMainButton;

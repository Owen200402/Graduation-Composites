import { ArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';

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
      Back to Main
    </Button>
  );
};

export default BackToMainButton;

import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';

interface Props {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const MainPagination = ({ currentPage, totalPages, onNext, onPrev }: Props) => {
  return (
    <div className="m-2">
      <Button
        variant="contained"
        size="small"
        disabled={currentPage === 1 ? true : false}
        onClick={() => onPrev()}
        startIcon={<ArrowLeft />}
      >
        Prev
      </Button>
      <Button
        className="ms-3"
        variant="contained"
        size="small"
        disabled={currentPage === totalPages ? true : false}
        onClick={() => onNext()}
        endIcon={<ArrowRight />}
      >
        Next
      </Button>
    </div>
  );
};

export default MainPagination;

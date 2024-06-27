import { Button } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

interface Props {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const PhotoPagination = ({ currentPage, totalPages, onNext, onPrev }: Props) => {
  return (
    <div className="m-3">
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

export default PhotoPagination;

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ArrowUp = () => {
  const scrollUp = () => {
    document
      .getElementById('front-page')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <KeyboardDoubleArrowUpIcon
        sx={{ animation: 'moveUp 3s infinite', cursor: 'pointer' }}
        onClick={scrollUp}
      ></KeyboardDoubleArrowUpIcon>
    </div>
  );
};

export default ArrowUp;

import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { Alert, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { photoData } from '../data/photoData';

const SearchIcon = styled(ScreenSearchDesktopIcon)`
  animation: zoomInAndOut 2s infinite;
`;

interface PhotoList {
  id: number;
  first_name: string;
  last_name: string;
  year: number;
  path: string;
}

interface Props {
  first_names: string[];
  last_names: string[];
  to_show: (photolist: PhotoList[], input: string) => void;
  themeColor: string;
}

const SearchBar = ({ first_names, last_names, themeColor, to_show }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [warning, setWarning] = useState('');
  const [photos, setPhotos] = useState(photoData);
  const photosToBeDisplayed = photos;

  const clickToExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
      setWarning('');
    }, 20000);
  };

  const searchPhoto = () => {
    if (inputRef.current === null) {
      return;
    }

    const inputValue = inputRef.current.value.toLowerCase();

    if (inputValue === '') {
      setWarning('The name cannot be blank!');
    } else if (
      photosToBeDisplayed.filter(
        (photo) =>
          inputValue.includes(
            (photo.first_name + ' ' + photo.last_name).toLowerCase()
          ) ||
          (photo.first_name + ' ' + photo.last_name)
            .toLowerCase()
            .includes(inputValue)
      ).length === 0
    ) {
      setWarning('Name not found!');
    } else {
      to_show(
        photosToBeDisplayed.filter(
          (photo) =>
            inputValue.includes(
              (photo.first_name + ' ' + photo.last_name).toLowerCase()
            ) ||
            (photo.first_name + ' ' + photo.last_name)
              .toLowerCase()
              .includes(inputValue)
        ),
        inputValue
      );
      setWarning('');
      inputRef.current.value = '';
    }
  };

  return (
    <div style={{ color: themeColor }}>
      {!isExpanded && (
        <SearchIcon
          className="m-2 mt-2"
          fontSize="large"
          onClick={clickToExpand}
          style={{ cursor: 'pointer' }}
        ></SearchIcon>
      )}
      {isExpanded && (
        <div className="input-group animate__animated animate__fadeInUp">
          <TextField
            className="form-control mt-3"
            label="Advanced Search for Grad"
            variant="outlined"
            size="small"
            sx={{
              maxWidth: '60pch',
              '& input': {
                color: themeColor === 'light' ? 'black' : 'white',
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: themeColor === 'light' ? 'white' : '#807a7a',
                borderRadius: '0px',
              },
            }}
            inputRef={inputRef}
            onChange={() => {
              setWarning('');
            }}
            inputProps={{
              size: 24,
            }}
            InputLabelProps={{
              sx: {
                color: themeColor === 'light' ? 'black' : 'white',
              },
            }}
          />
          <div className="input-group-append m-2 mt-3">
            <button
              className={
                themeColor === 'light'
                  ? 'btn btn-outline-primary'
                  : 'btn btn-outline-info'
              }
              type="button"
              onClick={searchPhoto}
            >
              Go
            </button>
          </div>
        </div>
      )}
      {warning && (
        <Alert severity="error" sx={{width: "280px"}}>{warning}</Alert>
      )}
    </div>
  );
};

export default SearchBar;

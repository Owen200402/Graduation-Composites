import SearchResultList from "./SearchResultList";
import PhotoPagination from "./PhotoPagination";
import MainPageYearSelection from "./MainPageYearSelection";
import { ArrowLeft } from "@mui/icons-material";
import { Button, Typography, useTheme } from "@mui/material";
import PhotoSet, { Photo } from "./PhotoSet";
import years from "../data/years";

interface Props {
  isAtMainScreen: boolean;
  searchResult: Photo[] | undefined;
  searchedInput: string;
  photosToBeDisplayed: Photo[];
  selectedYear: number | undefined;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onSearchBack: () => void;
  onYearSelect: (year: number) => void;
  onPageChange: (page: number) => void;
}

const MainDisplay = ({
  isAtMainScreen,
  searchResult,
  searchedInput,
  photosToBeDisplayed,
  selectedYear,
  currentPage,
  totalPages,
  itemsPerPage,
  onSearchBack,
  onYearSelect,
  onPageChange,
}: Props) => {
  const theme = useTheme();
  const textStyle = {
    color: theme.palette.mode === "dark" ? "white" : "black",
  };
  const currentItem = currentPage * itemsPerPage - itemsPerPage;

  return (
    <>
      {searchResult ? (
        <div
          style={{
            color: textStyle.color,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            className="p-2 m-2"
            sx={{ textAlign: "center", color: "#002145" }}
          >
            Search results for {searchedInput}:
          </Typography>
          <div className="photo_container">
            {searchResult
              .map((photo) => (
                <div key={photo.id}>
                  <SearchResultList {...photo} />
                </div>
              ))
              .slice(currentItem, currentItem + 12)}
          </div>
          <PhotoPagination
            currentPage={currentPage}
            totalPages={Math.ceil(searchResult.length / itemsPerPage)}
            onNext={() => {
              onPageChange(currentPage + 1);
            }}
            onPrev={() => onPageChange(currentPage - 1)}
          ></PhotoPagination>
          <div style={{ display: "flex", justifyContent: "left" }}>
            {selectedYear && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                startIcon={<ArrowLeft />}
                onClick={() => {
                  onSearchBack();
                }}
                className="m-2"
                style={{
                  position: "absolute",
                  left: "0%",
                  transform: "translate(100px, -30px)",
                }}
              >
                Back to Your Search: {selectedYear}
              </Button>
            )}
          </div>
        </div>
      ) : !isAtMainScreen ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
          <div
            className="photo_container m-4"
            style={{ color: textStyle.color }}
          >
            {photosToBeDisplayed
              .filter((photo) => photo.year === selectedYear)
              .map((photo) => (
                <div key={photo.id}>
                  <PhotoSet {...photo} />
                </div>
              ))
              .slice(currentItem, currentItem + 12)}
          </div>
          <div className="m-2">
            <Typography variant="body2">
              Page: {currentPage}/{totalPages}
            </Typography>
          </div>
          <PhotoPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={() => onPageChange(currentPage + 1)}
            onPrev={() => onPageChange(currentPage - 1)}
          ></PhotoPagination>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MainPageYearSelection
            years={years.slice(currentItem, currentItem + 12)}
            onSelectYear={onYearSelect}
          ></MainPageYearSelection>
          <PhotoPagination
            currentPage={currentPage}
            totalPages={Math.ceil(years.length / itemsPerPage)}
            onNext={() => {
              onPageChange(currentPage + 1);
            }}
            onPrev={() => onPageChange(currentPage - 1)}
          ></PhotoPagination>
        </div>
      )}
    </>
  );
};

export default MainDisplay;

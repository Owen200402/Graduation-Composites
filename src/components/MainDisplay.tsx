import SearchResultList from "./SearchResultList";
import PhotoPagination from "./PhotoPagination";
import MainPageYearSelection from "./MainPageYearSelection";
import { ArrowLeft } from "@mui/icons-material";
import { Button, Typography, useTheme } from "@mui/material";
import PhotoSet from "./PhotoSet";
import years from "../data/years";
import useNavigationStore from "../stores/navigationStore";
import usePaginationStore from "../stores/paginationStore";
import { photoData } from "../data/photoData";
import MainPagination from "./MainPagination";
import TVScreenCheck from "../services/checkTVScreen";

interface Props {
  onSearchBack: () => void;
  onYearSelect: (year: number) => void;
  onPageChange: (page: number) => void;
}

const MainDisplay = ({ onSearchBack, onYearSelect, onPageChange }: Props) => {
  const { selectedYear, searchResult, searchedInput, isAtMainScreen } =
    useNavigationStore();
  const { currentPage, itemsPerPage, totalPages, currentMainPage, setCurrentMainPage } = usePaginationStore();

  const photosToBeDisplayed = photoData;

  const theme = useTheme();
  const textStyle = {
    color: theme.palette.mode === "dark" ? "white" : "black",
  };
  const currentItem = currentPage * itemsPerPage - itemsPerPage;
  const currentItemMainPage = currentMainPage * itemsPerPage - itemsPerPage;

  const is4KScreen = TVScreenCheck();

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
              .filter((photo) => photo.path !== "")
              .map((photo) => (
                <div key={photo.id}>
                  <SearchResultList {...photo} />
                </div>
              ))
              .slice(currentItem, currentItem + 12)}
            {searchResult
              .filter((photo) => photo.path === "")
              .map((photo) => (
                <div key={photo.id}>
                  <SearchResultList
                    id={photo.id}
                    year={photo.year}
                    first_name={photo.first_name}
                    last_name={photo.last_name}
                    path={`assets/displayedOnCover/ECE${photo.year}.webp`}
                  />
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
                Back to Search Result: {selectedYear}
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
          {selectedYear! < 1970 ? (
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
          ) : (
            <div className="mt-2">
              <img
                src={`assets/displayedOnCover/ECE${selectedYear}.webp`}
                alt={`ECE${selectedYear}`}
                width={is4KScreen? "1100px" : "900px"}
              />
            </div>
          )}
          {selectedYear! < 1970 && (
            <div className="m-2">
              <Typography variant="body2">
                Page: {currentPage}/{totalPages(selectedYear)}
              </Typography>
            </div>
          )}
          {selectedYear! < 1970 && (
            <PhotoPagination
              currentPage={currentPage}
              totalPages={totalPages(selectedYear)}
              onNext={() => onPageChange(currentPage + 1)}
              onPrev={() => onPageChange(currentPage - 1)}
            ></PhotoPagination>
          )}
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
            years={years.slice(currentItemMainPage, currentItemMainPage + 12)}
            onSelectYear={onYearSelect}
          ></MainPageYearSelection>
          <MainPagination
            currentPage={currentMainPage}
            totalPages={Math.ceil(years.length / itemsPerPage)}
            onNext={() => {
              onPageChange(currentMainPage + 1);
            }}
            onPrev={() => onPageChange(currentMainPage - 1)}
          ></MainPagination>
        </div>
      )}
    </>
  );
};

export default MainDisplay;

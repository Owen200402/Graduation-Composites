import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Typography, useMediaQuery } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaMusic } from "react-icons/fa6";
import useAudioStore from "../stores/audioStore";
import useNavigationStore from "../stores/navigationStore";
import audioData from "../data/audioData";

interface Props {
  onClickSelect: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const SideAudio = ({ onClickSelect }: Props) => {
  const { selectedYear } = useNavigationStore();
  const { type } = useAudioStore();
  const isScreenLarge = useMediaQuery("(min-width:1024px)");
  const decade =
    selectedYear !== undefined ? Math.floor(selectedYear / 10) * 10 : null;

  const currentSong = audioData.filter(
    (audio) => audio.year === decade && audio.type === type
  );

  if (selectedYear === undefined) {
    return <div></div>;
  }

  return isScreenLarge ? (
    <div>
      <Card
        sx={{
          width: 190,
          position: "absolute",
          top: "20%",
          animation: "fadeInLeft 1s ease-in-out;",
          backgroundColor: "#FAFAFA",
        }}
      >
        <FaMusic
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            fontSize: "22px",
            color: "#f5770a",
          }}
        />
        <div>
          <Typography variant="h5">Play Music: {decade}</Typography>
          <div className="btn-group dropend">
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle btn-sm mt-2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {type}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  onClick={onClickSelect}
                  style={{ cursor: "pointer" }}
                >
                  Cinematic
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={onClickSelect}
                  style={{ cursor: "pointer" }}
                >
                  Canadian
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={onClickSelect}
                  style={{ cursor: "pointer" }}
                >
                  Dance
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={onClickSelect}
                  style={{ cursor: "pointer" }}
                >
                  Romantic
                </a>
              </li>
            </ul>
          </div>
        </div>
        <AspectRatio minHeight="160px" maxHeight="210px">
          <img src={`assets/displayOnAudioPlayer/${decade}.webp`} />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1" textAlign="center" marginBottom={1} color="grey">
              {currentSong.map((audio) => audio.title)}
            </Typography>
            <Typography component="p" textAlign="center" marginBottom={1} color="grey">
              {currentSong.map((audio) => audio.singer)}
            </Typography>
            <AudioPlayer
              src={`assets/audios/${decade}${type}.mp3`}
              className="custom-audio-player"
              style={{
                width: "auto",
                zoom: 0.7,
              }}
            ></AudioPlayer>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : (
    <ReactAudioPlayer
      src={`assets/audios/${decade}${type}.mp3`}
      controls
      style={{
        position: "fixed",
        bottom: "0",
        width: "20%",
        height: "20px",
      }}
    ></ReactAudioPlayer>
  );
};

export default SideAudio;

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useMediaQuery } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaMusic } from 'react-icons/fa6';
import useAudioStore from '../stores/audioStore';
import useNavigationStore from '../stores/navigationStore';

interface Props {
  onClickSelect: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const SideAudio = ({ onClickSelect }: Props) => {
   // All hooks must be called unconditionally at the top level
   const { selectedYear } = useNavigationStore();
   const { type } = useAudioStore();
   const isScreenLarge = useMediaQuery('(min-width:1024px)');
   const is4kScreen = useMediaQuery('(min-width:2000px)');
   const decade = selectedYear !== undefined ? Math.floor(selectedYear / 10) * 10 : null;
 
   // Conditional rendering based on selectedYear
   if (selectedYear === undefined) {
     return <div></div>;
   }

  return isScreenLarge ? (
    <div>
      <Card
        sx={{
          width: 190,
          position: 'absolute',
          top: "20%",
          animation: 'fadeInLeft 1s ease-in-out;',
          backgroundColor: '#FAFAFA',
        }}
      >
        <FaMusic
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            fontSize: '22px',
            color: '#f5770a',
          }}
        />
        <div>
          <Typography level="title-lg">Play {decade}'s Music</Typography>
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
                  style={{ cursor: 'pointer' }}
                >
                  Classical
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={onClickSelect}
                  style={{ cursor: 'pointer' }}
                >
                  Groovy
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={onClickSelect}
                  style={{ cursor: 'pointer' }}
                >
                  Dance
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={onClickSelect} style={{paddingRight: "60px"}}>
                  Jazz
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={onClickSelect}
                  style={{ cursor: 'pointer' }}
                >
                  Rock
                </a>
              </li>
            </ul>
          </div>
        </div>
        <AspectRatio minHeight="160px" maxHeight="210px">
          <img src={`assets/displayOnAudioPlayer/${decade}.webp`} />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <AudioPlayer
            src="assets/videos/Midnight-the-Stars-and-You.mp3" // Make it more dynamic for every decade (5 * 10 = 50) // naming for videos: 1930Rock so I can use ${decade}${type} for accessing it
            className="custom-audio-player"
            style={{
              width: 'auto',
              zoom: 0.7,
            }}
          ></AudioPlayer>
        </CardContent>
      </Card>
    </div>
  ) : (
    <ReactAudioPlayer
      src="assets/videos/Midnight-the-Stars-and-You.mp3"
      controls
      style={{
        position: 'fixed',
        bottom: '0',
        width: '20%',
        height: '20px',
      }}
    ></ReactAudioPlayer>
  );
};

export default SideAudio;

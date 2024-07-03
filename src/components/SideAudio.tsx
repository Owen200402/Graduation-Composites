import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useMediaQuery } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaMusic } from "react-icons/fa6";


interface Props {
  year: number | undefined;
}

const SideAudio = ({ year }: Props) => {
  if (year === undefined) {
    return <div></div>;
  }

  const isScreenLarge = useMediaQuery('(min-width:1024px)');
  const is4kScreen = useMediaQuery('(min-width:2000px)');
  const decade = Math.floor(year / 10) * 10;
  console.log(decade);

  return isScreenLarge ? (
    <div >
      
      <Card
        sx={{
          width: 190,
          position: 'absolute',
          top: is4kScreen ? '18%' : '30%',
          animation: 'fadeInLeft 1s ease-in-out;',
        }}
      >
        <FaMusic style={{position: "absolute", right: 0, top: 0, fontSize: "22px", color: "#f5770a"}} />
        <div>
          <Typography level="title-lg">Play {decade}'s Music</Typography>
          <Typography level="body-sm">Type: Jazz</Typography>
        </div>
        <AspectRatio minHeight="160px" maxHeight="210px">
          <img src={`assets/displayOnAudioPlayer/${decade}.webp`} />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <AudioPlayer
            src="assets/videos/Midnight-the-Stars-and-You.mp3"
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

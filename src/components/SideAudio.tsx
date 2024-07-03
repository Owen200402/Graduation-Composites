import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useMediaQuery } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SideAudio = () => {
  const isScreenLarge = useMediaQuery('(min-width:1024px)');
  const is4kScreen = useMediaQuery('(min-width:2000px)');

  return isScreenLarge ? (
    <Card sx={{ width: 210, position: 'absolute', top: is4kScreen? "18%": "30%" }}>
      <div>
        <Typography level="title-lg">Play Music of 1950s</Typography>
        <Typography level="body-sm">Type: Jazz</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="210px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <AudioPlayer
          src="assets/videos/Midnight-the-Stars-and-You.mp3"
          className="custom-audio-player"
          style={{
            width: 'auto',
            zoom: 0.8
          }}
        ></AudioPlayer>
      </CardContent>
    </Card>
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

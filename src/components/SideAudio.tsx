import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SideAudio = () => {
  return (
    <Card sx={{ width: 250, position: 'absolute', top: '30%' }}>
      <div>
        <Typography level="title-lg">Play Music of 1950s</Typography>
        <Typography level="body-sm">Type: Jazz</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="250px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <AudioPlayer
          src="assets/videos/Midnight-the-Stars-and-You.mp3"
          style={{
            width: "220px",
          }}
          
        ></AudioPlayer>
      </CardContent>
    </Card>
  );
};

export default SideAudio;

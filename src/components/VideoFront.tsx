import { useEffect, useState } from "react";


const VideoFront = () => {
const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoPlaying(false);
    }, 8000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  return (
    <video autoPlay muted id="background-video" style={{ width: '100vw', display: isVideoPlaying ? "block" : "none"}}>
      <source src="public/assets/8s.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default VideoFront;

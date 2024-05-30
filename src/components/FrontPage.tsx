import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Front = styled.div`
  background-image: url('images/front-page.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  animation: background-enter 2s ease-in-out;
`

interface Props {
    title: string;
    subtitle: string;
}

const FrontPage = ({title, subtitle}: Props) => {
    const [displayedSubtitle, setDisplayedSubtitle] = useState("");

    useEffect(() => {
        let index = -1;
        let prev = "";

        const interval = setInterval(() => {
            setDisplayedSubtitle(prev);
            index++;
            prev += subtitle.charAt(index)
            if (index >= subtitle.length) {
                clearInterval(interval); 
            }
        }, 50)
        return () => clearInterval(interval);
    }, [])


    const scrollDown = () => {
        window.scrollBy({
          top: window.innerHeight * 1.2,
          behavior: 'smooth',
        });
      };
    return (
    <>
        <Front>
            <div><Typography variant="h4" sx={{color: "white", animation:"fadeIn 1.5s ease-in-out;"}}>{title}</Typography></div>
            <div style={{maxWidth: "500px"}}><Typography component="p" sx={{color: "whitesmoke", animation:"fadeIn 2.5s ease-in-out;"}}>{displayedSubtitle}</Typography></div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{marginTop: "20px"}}><Button color="secondary" variant="outlined" sx={{animation: "fadeIn 8s ease-in-out"}} onClick={scrollDown}>Explore</Button></div>
        </div>
        </Front>
        
    </>
    );
}

export default FrontPage;
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

const SloganL = styled.div `
    position: absolute;
    left: 0;
    margin: 2rem;
    color: #00A7E1;
    max-width: 600px;
    word-wrap: break-word;
`

const Sub = styled.div `
    position: absolute;
    left: 0;
    top: 5rem;
    margin: 2rem;
    color: #6EC4E8;
    max-width: 400px;
    word-wrap: break-word;
`

interface Props {
    title: string;
    subtitle: string;
    slogan: string;
    subTitle: string;
}

const FrontPage = ({title, subtitle, slogan, subTitle}: Props) => {
    const [displayedSubtitle, setDisplayedSubtitle] = useState("");
    const [displayedSlogan, setDisplayedSlogan] = useState("");


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

    useEffect(() => {
        let index = -1;
        let prev = "";

        const interval = setInterval(() => {
            setDisplayedSlogan(prev);
            index++;
            prev += slogan.charAt(index)
            if (index >= slogan.length) {
                clearInterval(interval); 
            }
        }, 300)
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
        <SloganL><Typography variant="h2">{displayedSlogan}</Typography></SloganL>
        <Sub><Typography variant="h3" sx={{animation:"fadeIn 12s ease-in-out;"}}>{subTitle}</Typography></Sub>

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
// A child component of PhotoList

import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { useState } from "react";
import TVScreenCheck from "../services/checkTVScreen";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  z-index: 1000;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

// Overlay defines the background of the modal
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  first_name: string;
  last_name: string;
  year: number;
}

const ImageModal = ({
  isOpen,
  onClose,
  imageUrl,
  first_name,
  last_name,
  year,
}: Props) => {
  if (!isOpen) return null;

  const is4KScreen = TVScreenCheck();
  const videoUrl = imageUrl.slice(0, -3) + "mp4";
  const [isImage, setIsImage] = useState(true);

  return (
    <>
      <Overlay>
        <Modal>
          {isImage ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <img
                src={imageUrl}
                alt="Enlarged"
                style={{
                  maxWidth:
                    year < 1970 ? (is4KScreen ? "100%" : "100%") : "70%",
                  maxHeight:
                    year < 1970 ? (is4KScreen ? "30vh" : "70vh") : "100%",
                  paddingBottom: "3px",
                }}
              />
              {year < 1970 && (
                <button
                  className="btn btn-outline-info btn-sm animate__animated animate__fadeIn"
                  onClick={() => setIsImage(!isImage)}
                >
                  Animate
                </button>
              )}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <video
                width="490px"
                height="490px"
                controls
                style={{ margin: "3px" }}
                preload="auto"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
              <button
                className="btn btn-outline-info btn-sm animate__animated animate__fadeIn "
                onClick={() => setIsImage(!isImage)}
              >
                Static Image
              </button>
            </div>
          )}
          <Typography
            variant="h4"
            style={{ color: "#FFD700" }}
            className="animate__animated animate__fadeInUp"
          >
            {first_name} {last_name}
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#696969" }}
            className="animate__animated animate__fadeIn"
          >
            ECE Class of {year}
          </Typography>
          <CloseIcon
            onClick={() => {
              onClose();
              setIsImage(true);
            }}
            style={{
              position: "absolute",
              right:
                year < 1970
                  ? is4KScreen
                    ? isImage
                      ? 220
                      : 234
                    : isImage
                      ? 165
                      : 234
                  : is4KScreen
                    ? 460
                    : 340,
              bottom: -25,
              fontSize: "2.5rem",
              color: "red",
              cursor: "pointer",
            }}
          ></CloseIcon>
        </Modal>
      </Overlay>
    </>
  );
};

export default ImageModal;

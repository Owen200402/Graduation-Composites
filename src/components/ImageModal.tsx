// A child component of PhotoList

import { Typography } from "@mui/material";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  z-index: 1000;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
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
  last_name: string
}

const ImageModal = ({ isOpen, onClose, imageUrl, first_name, last_name }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay>
        <Modal>
          <img
            src={imageUrl}
            alt="Enlarged"
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              paddingBottom: "5px",
            }}
          />
          <Typography variant="h4" style={{color: "#696969"}} className="animate__animated animate__fadeInUp">{first_name} {last_name}</Typography>
          <button
            onClick={onClose}
            className="btn-close btn-close-white"
            style={{
              position: "absolute",
              right: 10,
              fontSize: "1.5rem",
              color: "white",
            }}
          ></button>
        </Modal>
        
      </Overlay>
    </>
  );
};

export default ImageModal;

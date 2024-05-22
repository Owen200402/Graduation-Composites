import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 6.5rem;
  object-fit: cover;
  margin: 0.8rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBanner = () => {
  return (
    <Div>
      <Image src="assets/ubc-logo-2018-fullsig-blue-rgb72.jpg" alt="UBC Logo" />
      <Image src="assets/ECE-Logo.png" alt="ECE Logo" />
    </Div>
  );
};

export default TopBanner;

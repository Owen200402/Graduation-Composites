import styled from "styled-components"

const Banner = styled.div`
  background-image: url('images/bottom-banner.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  min-width: 100%;
  height: 13rem;
`

const BottomBanner = () => {
    return <Banner></Banner>;
}

export default BottomBanner;
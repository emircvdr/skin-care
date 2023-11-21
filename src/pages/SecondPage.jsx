import styled from "styled-components";
import leftdevam from "../assets/images/leftdevam.png";
import secleft1 from "../assets/images/secleft1.png";
import secleft2 from "../assets/images/secleft2.png";
import secondpageimage2 from "../assets/images/secondpageimage2.png";
import secondpageimage1 from "../assets/images/secondpageimage1.png";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const StyledSecondPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  width: 100%;
  height: 100vh;
  background-color: #f5d8dc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .left {
    background-image: url(${secleft1});
    width: 50%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    background-image: url(${secleft2});
    width: 50%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leftdevam {
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: screen;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .info h1 {
    font-family: "Poppins", sans-serif;
    margin-bottom: 40px;
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 11.600000381469727px rgba(0, 0, 0, 0.5);
    font-family: LEMON MILK;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 84.199%;
  }
  .info p {
    width: 300px;
    color: #fff;
    text-shadow: 0px 3px 13px #000;
    font-family: League Spartan;
    font-size: 1.3rem;
    font-style: normal;
    font-family: "Poppins", sans-serif;
    margin-bottom: 100px;
  }
  .layer {
    aspect-ratio: 1/0.9;
  }
`;

const SecondPage = () => {
  return (
    <StyledSecondPage>
      <img src={leftdevam} alt="" className="leftdevam" />
      <div className="left">
        <div className="info">
          <h1>PRODUCT INFO</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ParallaxBanner className="layer">
            <ParallaxBannerLayer image={secondpageimage2} speed={-10} />
          </ParallaxBanner>
        </div>
      </div>
      <div className="right">
        <ParallaxBanner className="layer">
          <ParallaxBannerLayer image={secondpageimage1} speed={-10} />
        </ParallaxBanner>
      </div>
    </StyledSecondPage>
  );
};

export default SecondPage;

import styled from "styled-components";
import logo from "../assets/images/skincare.png";
import leftcircle from "../assets/images/leftcircle.png";
import rightcircle from "../assets/images/rightcircle.png";
const StayledMainPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5d8dc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .circle1 {
    background-color: #dd001e;
    width: 235px;
    height: 235px;
    border-radius: 50%;
  }
  .circle2 {
    background-color: #d85567;
    width: 459px;
    height: 459px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle3 {
    background-color: #f89ca9;
    width: 720px;
    height: 720px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: blur(100px);
    position: absolute;
    z-index: 1;
  }
  .logo {
    z-index: 2;
  }
  .left {
    position: absolute;
    left: 0;
    bottom: 0;
    mix-blend-mode: screen;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    mix-blend-mode: screen;
    width: 400px;
  }
`;

const MainPage = () => {
  return (
    <StayledMainPage>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="circle3">
        <div className="circle2">
          <div className="circle1"></div>{" "}
        </div>
      </div>
      <img src={leftcircle} alt="" className="left" />
      <img src={rightcircle} alt="" className="right" />
    </StayledMainPage>
  );
};

export default MainPage;

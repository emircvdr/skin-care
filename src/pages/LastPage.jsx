import styled from "styled-components";
import lastimg from "../assets/images/lastimg.png";

const StyledLastPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #efeae7;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle1 {
    width: 893px;
    height: 893px;
    border-radius: 50%;
    background-color: #f7aba5;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: blur(200px);
    z-index: 1;
    position: absolute;
  }
  .circle2 {
    background-color: #a83930;
    width: 625px;
    height: 625px;
    border-radius: 50%;
    filter: blur(200px);
  }
  .info {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  .infoL h1,
  .infoR h1 {
    color: #fff;
    text-shadow: 0px 8px 16.100000381469727px rgba(0, 0, 0, 0.3);
    font-family: "Poppins", sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 41.8px */
  }
  .infoL h1 {
    align-self: flex-start;
  }
`;

const LastPage = () => {
  return (
    <StyledLastPage>
      <div className="info">
        <div className="infoL">
          <h1>LEARN</h1>
          <h1>MORE</h1>
          <h1>ABOUT</h1>
          <h1>OUR</h1>
          <h1>PRODUCT</h1>
        </div>
        <div className="infoM">
          <img src={lastimg} alt="" />
        </div>
        <div className="infoR">
          <h1>NOW</h1>
          <h1>SHOP</h1>
          <h1>ONLINE</h1>
        </div>
      </div>
      <div className="circle1">
        <div className="circle2"></div>
      </div>
    </StyledLastPage>
  );
};

export default LastPage;

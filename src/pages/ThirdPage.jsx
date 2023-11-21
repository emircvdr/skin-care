import styled from "styled-components";
import bgimg from "../assets/images/bgimg.png";
import blurbg from "../assets/images/bluetupe.png";
import brush from "../assets/images/brush.png";
import tupe from "../assets/images/tupe.png";

const StyledThirdPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5d8dc;
  display: flex;
  justify-content: center;
  align-items: center;

  .first {
    width: 50%;
    background-size: cover;
  }
  .second {
    width: 50%;
    background-size: cover;
  }
  .bg {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
  }
  .container {
    width: 78%;
    height: 80%;

    display: flex;
    z-index: 1;
  }
  .contLeft {
    width: 50%;
    height: 100%;
    background-image: url(${bgimg});
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .contLeft h1 {
    font-family: "Poppins", sans-serif;
    color: #fff;
    text-shadow: 0px 4px 11.600000381469727px rgba(0, 0, 0, 0.5);
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 84.199%;
    align-self: center;
  }
  .contLeft p {
    color: #8c706d;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-style: normal;
    width: 40%;
    text-align: center;
    align-self: center;
    margin-top: 1rem;
  }
  .contRight {
    width: 50%;
    height: 100%;
    background-image: url(${tupe});
  }
  button {
    width: 200px;
    height: 40px;
    background-color: #eeeeee;
    border: none;
    border-radius: 10px;
    color: #8c706d;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 84.199%;
    align-self: center;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  button:hover {
    background-color: #8c706d;
    color: #eeeeee;
  }
`;

const ThirdPage = () => {
  return (
    <StyledThirdPage>
      <div className="bg">
        <img src={bgimg} alt="" className="first" />
        <img src={blurbg} alt="" className="second" />
      </div>
      <div className="container">
        <div className="contLeft">
          <img src={brush} alt="" />
          <h1>PRODUCT İNFO</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button>Join Now</button>
        </div>
        <div className="contRight"></div>
      </div>
    </StyledThirdPage>
  );
};

export default ThirdPage;

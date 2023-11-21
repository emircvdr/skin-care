import styled from "styled-components";
import boru from "../assets/images/boru.png";
import surup from "../assets/images/surup.png";

const StyledFourthPage = styled.div`
  width: 100%;
  height: 100vh;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .container-left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${boru});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .container-right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${surup});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .container-right h1 {
    color: #fff;
    text-shadow: 0px 4px 11.600000381469727px rgba(0, 0, 0, 0.5);
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 84.199%; /* 31.996px */
    margin-bottom: 1rem;
  }
  .container-right p {
    color: #fff;
    text-shadow: 0px 10px 8.600000381469727px rgba(0, 0, 0, 0.5);
    font-family: League Spartan;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 84.199%;
    width: 50%;
  }
`;

const FourthPage = () => {
  return (
    <StyledFourthPage>
      <div className="container">
        <div className="container-left"></div>
        <div className="container-right">
          <div className="info">
            <h1>PRODUCT INFO</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </StyledFourthPage>
  );
};

export default FourthPage;

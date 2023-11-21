import styled from "styled-components";

const StyledNavbar = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Forum&display=swap");
  position: fixed;
  z-index: 100;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;

  ul {
    display: flex;
    gap: 20px;
  }
  ul li a {
    font-size: 1.4rem;
    color: #eb7a8a;
    padding: 10px 20px;
    font-family: "Forum";
    text-shadow: 2px 3px 4.699999809265137px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
  }
    ul li a:hover {
        color: #f5d8dc;
        text-shadow: 2px 3px 4.699999809265137px rgba(0, 0, 0, 0.5);
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">INFO</a>
        </li>
        <li>
          <a href="/">PRODUCTS</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

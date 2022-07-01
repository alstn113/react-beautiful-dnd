import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/task-list">Task List</MenuLink>
        <MenuLink to="/model-view">Model View</MenuLink>
      </NavbarContainer>
    </Nav>
  );
};

const Nav = styled("nav")`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavbarContainer = styled("div")`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #e38b06;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }
`;

export default Navbar;

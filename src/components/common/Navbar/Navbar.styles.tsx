import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled("nav")`
  font-size: 18px;
  width: 100%;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavbarContainer = styled("div")`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 0.5rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #4ac7d2;
  }
`;

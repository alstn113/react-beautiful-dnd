import { MenuLink, NavbarContainer, Nav } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/task-list">Task List</MenuLink>
        <MenuLink to="/waf">WAF</MenuLink>
        <MenuLink to="/model-view">Model View</MenuLink>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Nav>
      <S.NavbarContainer>
        <S.MenuLink to="/">Home</S.MenuLink>
        <S.MenuLink to="/task-list">Task List</S.MenuLink>
        <S.MenuLink to="/model-view">Model View</S.MenuLink>
      </S.NavbarContainer>
    </S.Nav>
  );
};

export default Navbar;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: navy;
  display: block;
  padding: 10px;
  margin-left: 20px;
  color: black;

  &.active {
    color: blue;
  }
`;
export const NavStyled = styled.nav`
  display: flex;
  align-items: center; 
  border-bottom: 1px solid black ;
`;


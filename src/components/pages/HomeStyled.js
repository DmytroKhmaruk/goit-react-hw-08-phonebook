import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeStyled = styled.div`  
  width: 300px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 24px;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: gray;
  transition: color 250ms linear;
  &:hover {
    color: blue;
  }
`;

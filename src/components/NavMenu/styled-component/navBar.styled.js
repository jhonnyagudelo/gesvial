import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavSection = styled.nav``;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  border: 1px solid var(--negro);
  padding: 1em;
  border-radius: 2em;
`;

export const NavLi = styled.li``;
export const NavIcon = styled(Link)`
  text-decoration: none;
  margin-left: 1em;
  color: var(--negro);
`;

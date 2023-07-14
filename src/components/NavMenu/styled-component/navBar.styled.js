import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavSection = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  border: 1px solid var(--negro);
  border-radius: 0.8em;
  background: linear-gradient(to bottom, var(--plata3), var(--plata2));
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const NavLi = styled.li`
  padding: 0.5em 1em;
  &:hover {
    background-color: var(--gris);
    &:first-child {
      border-top-left-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
    }
    &:last-child {
      border-top-right-radius: 0.5em;
      border-bottom-right-radius: 0.5em;
    }
  }
`;
export const NavIcon = styled(Link)`
  text-decoration: none;
  color: var(--negro);
  font-size: 2em;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: var(--dorado);
  }
`;

export const Separator = styled.span`
  align-items: center;
  color: var(--negro);
  display: flex;
  font-size: 2em;
`;

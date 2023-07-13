import React from 'react';
import { SubNavData } from '../SubNavData';
import { NavIcon, NavSection, NavUl } from './styled-component';

export const NavMenu = () => {
  return (
    <NavSection>
      <NavUl>
        {SubNavData.map((item) => (
          <li key={item?.id}>
            <NavIcon to={item?.path}>{item?.title}</NavIcon>
          </li>
        ))}
      </NavUl>
    </NavSection>
  );
};

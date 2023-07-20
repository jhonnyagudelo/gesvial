import React, { Fragment } from 'react';
import { SubNavData } from '../SubNavData';
import {
  NavIcon,
  NavLi,
  NavSection,
  NavUl,
  Separator,
} from './styled-component';

export const NavMenu = () => {
  return (
    <NavSection>
      <NavUl>
        {SubNavData.map((item, index) => (
          <Fragment key={item?.id}>
            {index !== 0 && <Separator>|</Separator>}
            <NavLi>
              <NavIcon to={item?.path}>{item?.title}</NavIcon>
            </NavLi>
          </Fragment>
        ))}
      </NavUl>
    </NavSection>
  );
};

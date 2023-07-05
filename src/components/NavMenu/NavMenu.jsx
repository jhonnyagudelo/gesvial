import React from 'react';
import { SubNavData } from '../SubNavData';

export const NavMenu = () => {
  return (
    <ul>
      {SubNavData.map((item) => (
        <li key={item?.id}>
          <a href={item?.path}>{item?.title}</a>
        </li>
      ))}
    </ul>
  );
};

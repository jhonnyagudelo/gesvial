import React from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import imgLogo from '../../assets/images/logogesvial/GESVIAL APROBADO sticker.png';
import { HeaderStyled } from './styled-component/header.styled';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <figure>
          <img src={imgLogo} alt="logo" width="83" />
        </figure>
        <NavMenu />
      </HeaderStyled>
    </>
  );
};

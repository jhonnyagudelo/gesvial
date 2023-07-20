import React from 'react';
import { Scrollbar } from '../../components/Scrollbar/Scrollbar';
import logoHome from '../../assets/images/logogesvial/GESVIAL APROBADO4.png';
import team from '../../assets/images/team1.jpeg';
import imgBanner1 from '../../assets/images/banner/Banner página Gesvial.png';
import imgBanner2 from '../../assets/images/banner/Banner página Gesvial2.png';
import imgBanner3 from '../../assets/images/banner/Banner página Gesvial3.png';
import imgBanner4 from '../../assets/images/banner/Banner página Gesvial4.png';
import imgBanner5 from '../../assets/images/banner/Banner página Gesvial5.png';
import bhl from '../../assets/images/logoEmpresarial/bhl.png';
import cda from '../../assets/images/logoEmpresarial/cda.jpg';
import cdav from '../../assets/images/logoEmpresarial/cdav.png';
import rotras from '../../assets/images/logoEmpresarial/rotras.png';
import t from '../../assets/images/logoEmpresarial/t.jpg';
import serviagro from '../../assets/images/logoEmpresarial/serviagrosas-logo.png';
import semillas from '../../assets/images/logoEmpresarial/Logo semillas del Valle.png';
import tdm from '../../assets/images/logoEmpresarial/logo TDM.png';
import { TestimonialCarousel } from '../../components/TestimonialCarousel/TestimonialCarousel';
import {
  ContentLogo,
  ContentRoadSafety,
  ContentTitle,
  FigureTrust,
  ImgRoadSatefy,
  ParragraphRoadSatefy,
  SectionTrust,
  TitleRoadSafety,
  TitleTrust,
} from './styled-components';

export const Home = () => {
  const bannerImages = [
    imgBanner1,
    imgBanner2,
    imgBanner3,
    imgBanner4,
    imgBanner5,
  ];

  return (
    <>
      <ContentLogo>
        <figure>
          <img src={logoHome} alt="Logo-home" width={600} />
        </figure>
      </ContentLogo>
      <Scrollbar
        content={bannerImages.map((src) => ({
          type: 'image',
          src: src,
        }))}
      />
      <ContentRoadSafety>
        <figure>
          <ImgRoadSatefy src={team} alt="equipo" width={500} />
        </figure>
        <ContentTitle>
          <TitleRoadSafety>Seguridad vial</TitleRoadSafety>
        </ContentTitle>
        <ParragraphRoadSatefy>
          Se refiere a las medidas adoptadas para reducir en la máxima expresión
          posible el riesgo de lesiones y muertes causadas por el tránsito. Por
          tal motivo, a través de la colaboración y coordinación intersectorial,
          puede crearse un entorno más seguro, accesible, y sostenible para los
          sistemas de transporte, usuarios y peatones.
        </ParragraphRoadSatefy>
      </ContentRoadSafety>
      <SectionTrust>
        <TitleTrust>Ellos confiaron en nosotros</TitleTrust>
        <article>
          <TestimonialCarousel />
          <FigureTrust>
            <img src={semillas} alt="" width={200} />
            <img src={tdm} alt="" width={200} />
            <img src={t} alt="" width={200} />
            <img src={cdav} alt="" width={200} />
            <img src={bhl} alt="" width={200} />
            <img src={cda} alt="" width={200} />
            <img src={serviagro} alt="" width={500} />
            <img src={rotras} alt="" width={500} />
          </FigureTrust>
        </article>
      </SectionTrust>
    </>
  );
};

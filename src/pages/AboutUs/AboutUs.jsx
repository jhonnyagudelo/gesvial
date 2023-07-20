import React from 'react';
import nosotros from '../../assets/images/equipo.jpeg';
import {
  ContentAboutUs,
  ContentParragraph,
  ContentSpan,
  ContentSubTitle,
  ContentTitle,
  SloganTitle,
  TitleWeExit,
} from './styled-components';

export const AboutUs = () => {
  return (
    <>
      <ContentAboutUs>
        <ContentTitle>
          <TitleWeExit>¡Existimos!</TitleWeExit>
          <SloganTitle>Por y para usted, por que...</SloganTitle>
        </ContentTitle>
        <ContentParragraph>
          <ContentSpan>
            GESVIAL es una empresa que nace el 3 de marzo del 2021 con la
            finalidad de contribuir de manera integral a la sociedad colombiana
          </ContentSpan>
          con una movilidad más segura y preventiva, desde la capacitación,
          formación y educación para ayudar a la preservación de la vida de las
          personas en el escenario via, hasta la consecución de justicia por
          parte de las personas que se hayan visto afectadas por un siniestro de
          tránsito y con los cuales buscamos brindar un acompañamiento integral
          y hacer justicia con los afectados. GESVIAL está conformado por un
          grupo de personas especializadas en tránsito y transporte altamente
          capacitadas, quienes por medio de sus conocimientos, experiencias y
          estrategias, busca crear conciencia vial ciudadana a nivel individual
          y colectivo, como también en el entorno organizacional y empresarial,
          a través de programas y campañas de sensibilización, capacitación y
          actualización en materia de seguridad vial que involucra a todos los
          actores de la viales, tal como lo determina la Ley 769 de 2002 (Código
          Nacional de Tránsito) y sus respectivas modificaciones.
        </ContentParragraph>
        <ContentSubTitle>Mision:</ContentSubTitle>
        <ContentParragraph>
          GESVIAL está dedicada a la promoción en todos los sectores sociales, a
          través de la formación integral en la prevención de las conductas de
          riesgo, infracciones y siniestros de tránsito y transporte, utilizando
          la educación y la cultura vial como principales recursos para la
          protección de la vida de las personas, gracias a la basta y ámplia
          experiencia que poseen cada uno de los componentes del equipo de
          porfesionales en siniestralidad vial.
        </ContentParragraph>
        <ContentSubTitle>Visión:</ContentSubTitle>
        <ContentParragraph>
          GESVIAL será reconocida a nivel nacional por la eficiencia y calidad
          de todos sus servicios de orevención, formación, atención y
          acompañamiento en todos los hámbitos relacionados con la el transporte
          y tránsito en Colombia para el 2030. Seremos la primera referencia en
          el país de cultura vial soportada en un acompañamiento y apoyo
          continuo a todos los actores del tránsito, empresas públicas, privadas
          y ciudadanos del común.
        </ContentParragraph>
        <figure>
          <img src={nosotros} alt="nosotros" width={700} />
        </figure>
      </ContentAboutUs>
    </>
  );
};

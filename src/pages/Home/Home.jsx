import React from 'react';
import { Scrollbar } from '../../components/Scrollbar/Scrollbar';
import logoHome from '../../assets/images/logogesvial/GESVIAL APROBADO4.png';
import team from '../../assets/images/team1.jpeg';
import imgBanner1 from '../../assets/images/banner/Banner página Gesvial.png';
import imgBanner2 from '../../assets/images/banner/Banner página Gesvial2.png';
import imgBanner3 from '../../assets/images/banner/Banner página Gesvial3.png';
import imgBanner4 from '../../assets/images/banner/Banner página Gesvial4.png';
import imgBanner5 from '../../assets/images/banner/Banner página Gesvial5.png';
export const Home = () => {
  const bannerImages = [
    imgBanner1,
    imgBanner2,
    imgBanner3,
    imgBanner4,
    imgBanner5,
  ];
  const textRowsContent = [
    {
      type: 'textRows',
      comment: 'Excelente trabajo en el diseño web',
      author: 'Juan Pérez',
    },
    {
      type: 'textRows',
      comment: 'Me encanta la funcionalidad del sitio',
      author: 'María Gómez',
    },
    {
      type: 'textRows',
      comment: 'Felicidades por el increíble diseño',
      author: 'Luis Hernández',
    },
    {
      type: 'textRows',
      comment: 'Muy buen uso de colores y tipografías',
      author: 'Ana Rodríguez',
    },
    {
      type: 'textRows',
      comment: 'El sitio es muy intuitivo y fácil de navegar',
      author: 'Pedro Martínez',
    },
    {
      type: 'textRows',
      comment: 'Impresionante atención al detalle en el diseño',
      author: 'Laura Torres',
    },
    {
      type: 'textRows',
      comment: 'Me gusta cómo se destaca la usabilidad del sitio',
      author: 'Roberto Sánchez',
    },
    {
      type: 'textRows',
      comment: 'El diseño responsive funciona perfectamente',
      author: 'Isabel Mendoza',
    },
    {
      type: 'textRows',
      comment: 'Gran trabajo en la arquitectura de la información',
      author: 'Carlos López',
    },
    {
      type: 'textRows',
      comment: 'Los efectos de animación son impresionantes',
      author: 'Sofía Ramírez',
    },
  ];
  return (
    <>
      <section>
        <figure>
          <img src={logoHome} alt="Logo-home" width={600} />
        </figure>
      </section>
      <Scrollbar
        content={bannerImages.map((src) => ({
          type: 'image',
          src: src,
        }))}
      />
      <section>
        <figure>
          <img src={team} alt="equipo" width={500} />
        </figure>
        <h1>Seguridad vial</h1>
        <p>
          Se refiere a las medidas adoptadas para reducir en la máxima expresión
          posible el riesgo de lesiones y muertes causadas por el tránsito. Por
          tal motivo, a través de la colaboración y coordinación intersectorial,
          puede crearse un entorno más seguro, accesible, y sostenible para los
          sistemas de transporte, usuarios y peatones.
        </p>
      </section>
      <section>
        <article>
          <Scrollbar content={textRowsContent} />
        </article>
      </section>
      );
    </>
  );
};

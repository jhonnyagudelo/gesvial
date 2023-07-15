import React, { useState } from 'react';
import {
  NavigationDot,
  TestimonialAuthor,
  TestimonialCarouselContainer,
  TestimonialContainer,
  TestimonialNavigation,
  TestimonialText,
} from './styled-component';
export const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const testimonials = [
    {
      id: 1,
      text: 'Excelente trabajo en el diseño web',
      author: 'Juan Pérez',
    },
    {
      id: 2,
      text: 'Me encanta la funcionalidad del sitio',
      author: 'María Gómez',
    },
    {
      id: 3,
      text: 'Felicidades por el increíble diseño',
      author: 'Luis Hernández',
    },
    {
      id: 4,
      text: 'Muy buen uso de colores y tipografías',
      author: 'Ana Rodríguez',
    },
    {
      id: 5,
      text: 'El sitio es muy intuitivo y fácil de navegar',
      author: 'Pedro Martínez',
    },
    {
      id: 6,
      text: 'Impresionante atención al detalle en el diseño',
      author: 'Laura Torres',
    },
    {
      id: 7,
      text: 'Me gusta cómo se destaca la usabilidad del sitio',
      author: 'Roberto Sánchez',
    },
    {
      id: 8,
      text: 'El diseño responsive funciona perfectamente',
      author: 'Isabel Mendoza',
    },
    {
      id: 9,
      text: 'Gran trabajo en la arquitectura de la información',
      author: 'Carlos López',
    },
    {
      id: 10,
      text: 'Los efectos de animación son impresionantes',
      author: 'Sofía Ramírez',
    },
  ];

  return (
    <TestimonialCarouselContainer>
      {testimonials.map((testimonial, index) => (
        <TestimonialContainer
          key={testimonial.id}
          style={{ display: index === activeIndex ? 'block' : 'none' }}
        >
          <TestimonialText>{testimonial.text}</TestimonialText>
          <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
        </TestimonialContainer>
      ))}
      <TestimonialNavigation>
        {testimonials.map((_, index) => (
          <NavigationDot
            key={index}
            data-active={index === activeIndex ? 'true' : 'false'}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </TestimonialNavigation>
    </TestimonialCarouselContainer>
  );
};

import React, { useEffect, useState } from 'react';

import {
  ArticleScrollbar,
  ImgScrollbar,
  SectionScrollbar,
} from './styled-component';
export const Scrollbar = ({ content }) => {
  const repeatedContent = [...content, ...content];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % repeatedContent.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [content]);

  const renderContent = () => {
    return repeatedContent.map((item, index) => {
      if (typeof item === 'object' && item.type === 'image') {
        return <ImgScrollbar key={index} src={item.src} alt={item.alt} />;
      }
      return null;
    });
  };
  return (
    <SectionScrollbar>
      <ArticleScrollbar
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {renderContent()}
      </ArticleScrollbar>
    </SectionScrollbar>
  );
};

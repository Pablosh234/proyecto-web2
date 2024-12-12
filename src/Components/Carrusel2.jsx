import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/f90227fc-4cca-4245-8d96-d1c14f5dcc9a/11-Raphinha-M.jpg?width=470&height=470',
    altText: 'Slide 1',
    caption: 'Rafhina',
    key: 1,
  },
  {
    src: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/0d46bf0d-5149-4908-9187-35813907233d/20-Olmo-M.jpg?width=470&height=470',
    altText: 'Slide 2',
    caption: ' Dani Olmo',
    key: 2,
  },
  {
    src: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/b666059e-1d0a-493f-a7e5-dd7a258d8165/09-Lewandowski-M.jpg?width=470&height=470',
    altText: 'Slide 3',
    caption: 'Robert Lewandowski',
    key: 3,
  },
  {
    src: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/2b17db58-6bb5-40fb-b978-65b2fea50db1/21-De_Jong-M.jpg?width=470&height=470',
    altText: 'Slide 4',
    caption: 'Frenkie de Jong',
    key: 4,
  },
];

export default function Carrusel2(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}


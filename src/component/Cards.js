import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Card = ({ imageUrl, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const animateCard = () => {
      const card = cardRef.current;
      anime({
        targets: card,
        scale: [1, 1.05],
        duration: 1000,
        loop: true,
        direction: index % 2 === 0 ? 'reverse' : 'alternate',
        easing: 'easeInOutSine',
      });
    };

    animateCard();
  }, [index]);

  return (
    <CardContainer ref={cardRef}>
      <CardImage src={imageUrl.image} alt="Card" />
      <CardContent>
        <CardTitle>{imageUrl.description}</CardTitle>
        {/* <CardDescription>{}</CardDescription> */}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
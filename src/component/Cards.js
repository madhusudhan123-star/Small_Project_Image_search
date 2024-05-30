import React, { useEffect, useRef,useState } from 'react';
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
  cursor: pointer;
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
  margin-top: 30px;
  font-size: 14px;
  color: #666;
`;

const Card = ({ imageUrl, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const animateCard = () => {
      const card = cardRef.current;
      animationRef.current = anime({
        targets: card,
        scale: [1, 1.05],
        duration: 1000,
        loop: true,
        direction: index % 2 === 0 ? 'reverse' : 'alternate',
        easing: 'easeInOutSine',
        autoplay: !isHovered,
      });
    };

    animateCard();
  }, [index, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    animationRef.current.pause();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animationRef.current.play();
  };


  return (
    <CardContainer ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardImage src={imageUrl.image} alt="Card" />
      <CardContent>
        <CardTitle>{imageUrl.description}</CardTitle>
        <div className='flex justify-between'>
          <CardDescription>{imageUrl.download ? <a className='py-2 px-2 rounded border border-2 border-gray-900' href={imageUrl.download}>download</a> : '' } </CardDescription>
          <CardDescription>{imageUrl.source ? <a className='py-2 px-2 rounded border border-2 border-gray-900' href={imageUrl.source}>Source</a> : '' } </CardDescription>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, CtaPrimary, UiScreenshots, UiScreenshot } from '../styles/StyledComponents';

// Стилизованные компоненты
const TitleSlideWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 20px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vtc-dark);
  background-image: 
      radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 30%),
      radial-gradient(circle at 90% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 35%),
      radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 40%);
  background-attachment: fixed;
  overflow: hidden;
`;

const TitleContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(1.6rem, 4vw, 3.5rem);
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 15px;
  background: var(--vtc-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  padding: 0 10px;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  color: var(--text-secondary);
  margin-bottom: 20px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 4vw, 1.2rem);
    max-width: 100%;
  }
`;

const VtcEmoji = styled.span`
  font-size: 2rem;
  margin: 0 5px;
  vertical-align: middle;
  display: inline-block;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const Particle = styled.div`
  position: absolute;
  border-radius: ${props => props.isRound ? '50%' : '30%'};
  background-color: ${props => props.color};
  box-shadow: 0 0 ${props => props.size / 2}px ${props => props.color};
  opacity: ${props => props.opacity};
  animation: floatParticle ${props => props.duration}s linear infinite;
  animation-delay: -${props => props.delay}s;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
`;

// Обновленный компонент UiScreenshot с внешними размерами
const CustomUiScreenshot = styled(motion.img)`
  width: 45%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  margin: 15px;
  box-shadow: var(--vtc-shadow);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
  }
`;

// Основной компонент
const TitleSlide = () => {
  const particlesContainerRef = useRef(null);
  
  // Анимационные варианты для элементов
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: 'easeOut' }
    }
  };
  
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, delay: 0.8, ease: 'easeOut' }
    }
  };
  
  const screenshotVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 1, ease: 'easeOut' }
    },
    hover: {
      y: -10,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3 }
    }
  };
  
  // Обработчик движения мыши для эффекта 3D
  const handleMouseMove = (e) => {
    if (!particlesContainerRef.current) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    particlesContainerRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
    // Перемещение частиц при движении мыши
    const particles = document.querySelectorAll('.ai-particle');
    particles.forEach(particle => {
      const size = parseFloat(particle.style.width || '10');
      const speed = size / 10;
      const xMove = xAxis * speed;
      const yMove = yAxis * speed;
      particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
  };
  
  // Возврат в исходное положение при выходе мыши
  const handleMouseLeave = () => {
    if (!particlesContainerRef.current) return;
    
    particlesContainerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    
    const particles = document.querySelectorAll('.ai-particle');
    particles.forEach(particle => {
      particle.style.transform = 'translate(0px, 0px)';
    });
  };
  
  // Создание AI-частиц на заднем фоне
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 50;
    const particleColors = [
      'rgba(59, 130, 246, 0.6)', // Синий
      'rgba(16, 185, 129, 0.6)', // Зеленый
      'rgba(99, 102, 241, 0.6)', // Индиго
      'rgba(14, 165, 233, 0.6)'  // Голубой
    ];
    
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 15 + 5;
      const colorIndex = Math.floor(Math.random() * particleColors.length);
      const isRound = Math.random() > 0.5;
      const duration = Math.random() * 30 + 20;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.7 + 0.3;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      particles.push({
        id: i,
        size,
        color: particleColors[colorIndex],
        isRound,
        duration,
        delay,
        opacity,
        left,
        top
      });
    }
    
    setParticles(particles);
  }, []);
  
  // Состояние для частиц
  const [particles, setParticles] = React.useState([]);
  
  return (
    <TitleSlideWrapper 
      id="title-slide"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ParticlesContainer ref={particlesContainerRef}>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            className="ai-particle"
            size={particle.size}
            color={particle.color}
            isRound={particle.isRound}
            duration={particle.duration}
            delay={particle.delay}
            opacity={particle.opacity}
            left={particle.left}
            top={particle.top}
          />
        ))}
      </ParticlesContainer>
      
      <TitleContent>
        <HeroTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Виртуальный Торговый Центр <VtcEmoji>🛒</VtcEmoji>
        </HeroTitle>
        
        <HeroSubtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Создание 3D-платформы для аренды виртуальных магазинов, навигации, общения и покупок товаров в интерактивном пространстве
        </HeroSubtitle>
        
        <UiScreenshots>
          <CustomUiScreenshot 
            src="/ui2.png" 
            alt="UI Виртуального торгового центра" 
            variants={screenshotVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
          <CustomUiScreenshot 
            src="/vtc-ui-2.png" 
            alt="Интерфейс виртуального магазина" 
            variants={screenshotVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
        </UiScreenshots>
        
        <CtaPrimary 
          href="https://t.me/sapientweb" 
          target="_blank"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ y: -2 }}
        >
          Начать сотрудничество
        </CtaPrimary>
      </TitleContent>
    </TitleSlideWrapper>
  );
};

export default TitleSlide; 
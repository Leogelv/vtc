import styled from 'styled-components';
import { motion } from 'framer-motion';

// Общие компоненты
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Slide = styled.section`
  padding: 60px 0;
  
  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 30px;
  position: relative;
  
  h2 {
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    margin-bottom: 15px;
    font-weight: 700;
  }
`;

export const SectionLine = styled.div`
  height: 4px;
  width: 60px;
  background: var(--vtc-gradient);
  border-radius: 2px;
`;

// Заголовки секций
export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--vtc-text-primary);
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Unbounded', sans-serif;
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--vtc-text-secondary);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

// Карточки
export const GlassCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: var(--glass-shadow);
  border: var(--glass-border);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 576px) {
    padding: 20px;
  }
  
  @media (max-width: 400px) {
    padding: 15px;
  }
`;

export const FeatureCard = styled(GlassCard)`
  margin-bottom: 30px;
`;

export const FeatureIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: inline-block;
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const FeatureTitle = styled.h3`
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--text-primary);
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

// Кнопки и CTA
export const CtaPrimary = styled(motion.a)`
  display: inline-block;
  background: var(--vtc-gradient);
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  margin-top: 10px;
  
  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(30deg);
    animation: shineEffect 4s infinite;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 8px 20px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 400px) {
    width: 80%;
  }
`;

// Блоки выделения
export const HighlightBox = styled.div`
  background: rgba(59, 130, 246, 0.1);
  border-left: 4px solid var(--vtc-primary);
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 0 10px 10px 0;
`;

export const HighlightText = styled.span`
  font-weight: 600;
  color: var(--vtc-primary);
`;

// Блоки преимуществ
export const BenefitsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

export const BenefitItem = styled(motion.div)`
  padding: 20px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 15px;
  box-shadow: var(--glass-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const BenefitTitle = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const BenefitIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
`;

// Таймлайн
export const TimelineSection = styled.div`
  margin-top: 80px;
  position: relative;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--vtc-gradient);
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
  }
  
  @media (max-width: 992px) {
    &:before {
      left: 30px;
    }
  }
`;

export const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 50px;
`;

export const TimelineContent = styled.div`
  position: relative;
  width: 45%;
  padding: 20px 30px;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: var(--glass-shadow);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  ${TimelineItem}:nth-child(even) & {
    margin-left: auto;
  }
  
  @media (max-width: 992px) {
    width: calc(100% - 60px);
    margin-left: 60px !important;
  }
`;

export const TimelineDate = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background: var(--vtc-accent);
  border-radius: 20px;
  color: white;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const TimelineTitle = styled.h3`
  font-family: 'Unbounded', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--vtc-accent);
  border-radius: 50%;
  top: 30px;
  left: 50%;
  margin-left: -10px;
  z-index: 1;
  
  @media (max-width: 992px) {
    left: 30px;
    margin-left: -10px;
  }
`;

// Цены и метрики
export const PriceTag = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vtc-accent);
  margin: 10px 0;
`;

export const PriceOld = styled.p`
  font-size: 1.8rem;
  text-decoration: line-through;
  color: var(--text-secondary);
  margin: 10px 0;
`;

// Скриншоты UI
export const UiScreenshots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 2rem auto;
  flex-wrap: wrap;
  max-width: 95%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UiScreenshot = styled(motion.img)`
  max-width: 35%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    max-width: 80%;
    margin-bottom: 15px;
  }
  
  @media (max-width: 576px) {
    max-width: 95%;
  }
  
  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

// Технологический стек
export const StackItem = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background: rgba(59, 130, 246, 0.15);
  color: var(--vtc-primary);
  border-radius: 20px;
  margin: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.25);
    transform: translateY(-2px);
  }
`; 
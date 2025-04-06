import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Slide, 
  Container, 
  SectionHeader, 
  SectionLine, 
  GlassCard,
  HighlightText,
  PriceTag,
  PriceOld
} from '../styles/StyledComponents';

// Стилизованные компоненты для раздела цен
const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled(motion.div)`
  padding: 25px;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateY(-5px);
  }
`;

const PricingTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

const PricingFeature = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PricingIcon = styled.span`
  margin-right: 8px;
  color: var(--vtc-accent);
`;

const InvestmentBlock = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const PricingSection = () => {
  // Настройка IntersectionObserver для анимаций при скролле
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Анимационные варианты
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Slide id="pricing">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            💰 Бюджет проекта
          </motion.h2>
          <SectionLine />
        </SectionHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <GlassCard as={motion.div} variants={itemVariants}>
            <motion.p variants={itemVariants}>
              Инвестиции в создание Альфа-версии виртуального торгового центра:
            </motion.p>
            
            <InvestmentBlock as={motion.div} variants={itemVariants}>
              <PriceOld>9 000 000 ₽</PriceOld>
              <PriceTag>6 500 000 ₽</PriceTag>
              <motion.p variants={itemVariants}>
                <HighlightText>Экономия 2 500 000 ₽</HighlightText> при передаче проекта в наш R&D-отдел
              </motion.p>
            </InvestmentBlock>
            
            <PricingGrid>
              <PricingCard as={motion.div} variants={itemVariants} whileHover={{ y: -10 }}>
                <PricingTitle>40%</PricingTitle>
                <PricingFeature>
                  <PricingIcon>💸</PricingIcon> Старт разработки
                </PricingFeature>
              </PricingCard>
              
              <PricingCard as={motion.div} variants={itemVariants} whileHover={{ y: -10 }}>
                <PricingTitle>30%</PricingTitle>
                <PricingFeature>
                  <PricingIcon>💻</PricingIcon> После демо версии
                </PricingFeature>
              </PricingCard>
              
              <PricingCard as={motion.div} variants={itemVariants} whileHover={{ y: -10 }}>
                <PricingTitle>30%</PricingTitle>
                <PricingFeature>
                  <PricingIcon>🚀</PricingIcon> После сдачи проекта
                </PricingFeature>
              </PricingCard>
            </PricingGrid>
            
            <motion.div variants={itemVariants} style={{ marginTop: '30px' }}>
              <p>
                <HighlightText>При передаче проекта в наш R&D-отдел вы получаете:</HighlightText>
              </p>
              <ul style={{ marginTop: '15px', textAlign: 'left', paddingLeft: '20px' }}>
                <li>Более быстрые сроки реализации</li>
                <li>Применение передовых методов ИИ и веб-графики</li>
                <li>Вовлечение в креативный процесс разработки</li>
                <li>Экономию в размере 2 500 000 ₽</li>
              </ul>
            </motion.div>
          </GlassCard>
        </motion.div>
      </Container>
    </Slide>
  );
};

export default PricingSection; 
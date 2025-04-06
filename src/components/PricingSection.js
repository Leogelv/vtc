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
              <PriceOld>1,400,000 ₽</PriceOld>
              <PriceTag>980,000 ₽</PriceTag>
              <motion.p variants={itemVariants}>
                <HighlightText>Скидка 30%</HighlightText> при запуске до конца квартала
              </motion.p>
            </InvestmentBlock>
            
            <PricingGrid>
              <PricingCard as={motion.div} variants={itemVariants} whileHover={{ y: -10 }}>
                <PricingTitle>Разработка</PricingTitle>
                <ul>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> Full-stack команда
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> Front-end / Back-end
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> 3D моделлеры
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> AI специалист
                  </PricingFeature>
                </ul>
              </PricingCard>
              
              <PricingCard as={motion.div} variants={itemVariants} whileHover={{ y: -10 }}>
                <PricingTitle>Инфраструктура</PricingTitle>
                <ul>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> Хостинг и домен
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> CDN для ассетов
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> Базы данных
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> WebSocket сервера
                  </PricingFeature>
                </ul>
              </PricingCard>
              
              <PricingCard as={motion.div} variants={itemVariants} whileHover={{ y: -10 }}>
                <PricingTitle>Поддержка</PricingTitle>
                <ul>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> 3 месяца после запуска
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> Исправление багов
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> Техническая поддержка
                  </PricingFeature>
                  <PricingFeature>
                    <PricingIcon>✓</PricingIcon> Мониторинг системы
                  </PricingFeature>
                </ul>
              </PricingCard>
            </PricingGrid>
          </GlassCard>
        </motion.div>
      </Container>
    </Slide>
  );
};

export default PricingSection; 
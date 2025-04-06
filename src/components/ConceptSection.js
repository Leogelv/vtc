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
  HighlightBox,
  HighlightText,
  BenefitsBox,
  BenefitItem,
  BenefitTitle,
  BenefitIcon
} from '../styles/StyledComponents';

const ConceptSection = () => {
  // Настройка IntersectionObserver для анимаций при скролле
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Варианты анимации для контейнера
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

  // Варианты анимации для дочерних элементов
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Варианты анимации для карточек преимуществ
  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1
      }
    })
  };

  return (
    <Slide id="concept">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            🔥 Концепция проекта
          </motion.h2>
          <SectionLine />
        </SectionHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <GlassCard
            as={motion.div}
            variants={itemVariants}
          >
            <HighlightBox as={motion.div} variants={itemVariants}>
              <p><HighlightText>Это не просто онлайн-магазин.</HighlightText> Это новая форма цифровой торговли с душой метавселенной, но без перегруза, красиво, удобно, в браузере, без VR-гарнитур.</p>
            </HighlightBox>
            
            <motion.p variants={itemVariants}>В нашем виртуальном торговом центре:</motion.p>
            <motion.ul variants={itemVariants}>
              <li>Пользователь персонажем входит в 3D-мир</li>
              <li>Прогуливается по этажам виртуального центра</li>
              <li>Общается с другими в реальном времени</li>
              <li>Заходит в магазины, рассматривает товары на стенах</li>
              <li>Взаимодействует с ИИ-консультантами</li>
              <li>Оформляет покупку, как в игре — но с реальными товарами и реальной доставкой</li>
            </motion.ul>
            
            <BenefitsBox>
              <BenefitItem 
                as={motion.div} 
                variants={benefitVariants}
                custom={0}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <BenefitTitle>
                  <BenefitIcon>🎮</BenefitIcon> Интерактивность
                </BenefitTitle>
                <p>Полное погружение в процесс покупок через игровые механики и 3D-взаимодействие</p>
              </BenefitItem>
              
              <BenefitItem 
                as={motion.div} 
                variants={benefitVariants}
                custom={1}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <BenefitTitle>
                  <BenefitIcon>👥</BenefitIcon> Социальный опыт
                </BenefitTitle>
                <p>Общение с другими покупателями и продавцами в реальном времени</p>
              </BenefitItem>
              
              <BenefitItem 
                as={motion.div} 
                variants={benefitVariants}
                custom={2}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <BenefitTitle>
                  <BenefitIcon>🤖</BenefitIcon> ИИ-поддержка
                </BenefitTitle>
                <p>Виртуальные консультанты помогают с навигацией и подбором товаров</p>
              </BenefitItem>
              
              <BenefitItem 
                as={motion.div} 
                variants={benefitVariants}
                custom={3}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <BenefitTitle>
                  <BenefitIcon>💻</BenefitIcon> Кроссплатформенность
                </BenefitTitle>
                <p>Доступ через браузер и мобильные приложения без сложных требований</p>
              </BenefitItem>
            </BenefitsBox>
          </GlassCard>
        </motion.div>
      </Container>
    </Slide>
  );
};

export default ConceptSection; 
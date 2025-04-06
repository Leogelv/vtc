import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Slide, 
  Container, 
  SectionHeader, 
  SectionLine, 
  GlassCard,
  BenefitsBox,
  BenefitItem,
  BenefitTitle,
  BenefitIcon
} from '../styles/StyledComponents';

const WowFeaturesSection = () => {
  // Настройка IntersectionObserver для анимаций при скролле
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Функция для создания вау-фич
  const wowFeatures = [
    {
      icon: '🎭',
      title: 'Режим "невидимки"',
      description: 'Тайный посетитель (например, для владельцев магазинов)'
    },
    {
      icon: '🧠',
      title: 'ИИ-консультант',
      description: 'Внутри магазина (по описанию товара)'
    },
    {
      icon: '🛍',
      title: 'Комнаты интересов',
      description: 'Неформальные локации внутри ТЦ'
    },
    {
      icon: '🖼',
      title: 'Живая стена желаний',
      description: 'Можно написать, что ищешь'
    },
    {
      icon: '🎤',
      title: 'ИИ-опросы от NPC',
      description: 'Сбор данных о поведении и желаниях пользователей'
    },
    {
      icon: '🧬',
      title: 'Кастомизация аватара',
      description: 'Позже — примерка одежды'
    }
  ];

  return (
    <Slide id="wow-features">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            💡 Дополнительные вау-фичи
          </motion.h2>
          <SectionLine />
        </SectionHeader>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard>
            <BenefitsBox>
              {wowFeatures.map((feature, index) => (
                <BenefitItem 
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <BenefitTitle>
                    <BenefitIcon>{feature.icon}</BenefitIcon> {feature.title}
                  </BenefitTitle>
                  <p>{feature.description}</p>
                </BenefitItem>
              ))}
            </BenefitsBox>
          </GlassCard>
        </motion.div>
      </Container>
    </Slide>
  );
};

export default WowFeaturesSection; 
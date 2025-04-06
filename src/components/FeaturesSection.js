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
} from '../styles/StyledComponents';

// Стилизованные компоненты
const FeatureBlock = styled(motion.div)`
  margin-bottom: 30px;
`;

const FeatureTitle = styled(motion.h3)`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FeatureList = styled(motion.ul)`
  margin-left: 20px;
  margin-bottom: 20px;
`;

const FeatureItem = styled(motion.li)`
  margin-bottom: 8px;
  position: relative;
  
  &:before {
    content: "•";
    color: var(--vtc-primary);
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: -15px;
  }
`;

const FeaturesSection = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  // Варианты анимации для блоков
  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Варианты анимации для элементов списка
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.3,
        delay: custom * 0.05
      }
    })
  };

  return (
    <Slide id="features">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            ⚙️ Что входит в Альфа-версию
          </motion.h2>
          <SectionLine />
        </SectionHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <GlassCard as={motion.div} variants={blockVariants}>
            <motion.p 
              className="highlight-text" 
              style={{ marginBottom: '20px' }}
              variants={blockVariants}
            >
              <HighlightText>Реализация за 4 месяца:</HighlightText>
            </motion.p>
            
            <FeatureBlock variants={blockVariants}>
              <FeatureTitle variants={blockVariants}>🧱 1. Базовая архитектура</FeatureTitle>
              <FeatureList>
                <FeatureItem variants={listItemVariants} custom={0}>Стартовая сцена: «Круг новичков» + террариум</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={1}>1 этаж торгового центра</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={2}>4 магазина (2 по 5 товаров, 2 по 10)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={3}>Аватары (муж/жен)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={4}>Система авторизации и регистрации</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={5}>Хостинг + CDN + оптимизация загрузки ассетов</FeatureItem>
              </FeatureList>
            </FeatureBlock>
            
            <FeatureBlock variants={blockVariants}>
              <FeatureTitle variants={blockVariants}>🕹 2. Навигация и взаимодействие</FeatureTitle>
              <FeatureList>
                <FeatureItem variants={listItemVariants} custom={0}>Перемещение по этажу (WASD / свайпы)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={1}>Вход в здание</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={2}>Заход в магазины</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={3}>Общий чат</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={4}>Синхронизация аватаров (WebSocket мультиплеер)</FeatureItem>
              </FeatureList>
            </FeatureBlock>
            
            <FeatureBlock variants={blockVariants}>
              <FeatureTitle variants={blockVariants}>📦 3. Магазины и товары</FeatureTitle>
              <FeatureList>
                <FeatureItem variants={listItemVariants} custom={0}>Упрощенная система аренды (выбор свободного магазина)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={1}>Загрузка товаров: 250x250 изображение + описание</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={2}>Отображение на стенах</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={3}>Ресайз фото, если превышает размер</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={4}>Ошибка, если меньше допустимого</FeatureItem>
              </FeatureList>
            </FeatureBlock>
            
            <FeatureBlock variants={blockVariants}>
              <FeatureTitle variants={blockVariants}>🤖 4. ИИ-агенты (NPC)</FeatureTitle>
              <FeatureList>
                <FeatureItem variants={listItemVariants} custom={0}>NPS на этаже у стойки</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={1}>Отвечает на вопросы о локации товаров</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={2}>Может подсказать написать в поиск</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={3}>Основа — RAG-система без внешней интеграции (своя база данных + диалоговая логика)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={4}>Реалистичный внешний вид (если нужно — Audio2Face, TTS, STT)</FeatureItem>
              </FeatureList>
            </FeatureBlock>
            
            <FeatureBlock variants={blockVariants}>
              <FeatureTitle variants={blockVariants}>🔎 5. Поиск</FeatureTitle>
              <FeatureList>
                <FeatureItem variants={listItemVariants} custom={0}>Поиск по товарам по ключевому слову</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={1}>Телепортация к нужному магазину/комнате</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={2}>Позже можно расширить на голосовой поиск</FeatureItem>
              </FeatureList>
            </FeatureBlock>
            
            <FeatureBlock variants={blockVariants}>
              <FeatureTitle variants={blockVariants}>📱 6. Платформы</FeatureTitle>
              <FeatureList>
                <FeatureItem variants={listItemVariants} custom={0}>Web (основа, максимальная совместимость)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={1}>Обёртки под Android/iOS (Capacitor или PWA)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={2}>Возможность быстро масштабировать под нативные платформы</FeatureItem>
              </FeatureList>
            </FeatureBlock>
            
            <FeatureBlock variants={blockVariants}>
              <FeatureTitle variants={blockVariants}>🎨 7. Графика</FeatureTitle>
              <FeatureList>
                <FeatureItem variants={listItemVariants} custom={0}>Ультрасовременный визуал на WebGL (Three.js / Babylon.js)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={1}>PBR-материалы, свет, отражения, реалистичные текстуры</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={2}>Быстрая загрузка через подгрузку зон (lazy loading)</FeatureItem>
                <FeatureItem variants={listItemVariants} custom={3}>Поддержка слабых устройств через оптимизацию</FeatureItem>
              </FeatureList>
            </FeatureBlock>
          </GlassCard>
        </motion.div>
      </Container>
    </Slide>
  );
};

export default FeaturesSection; 
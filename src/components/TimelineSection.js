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
  TimelineSection as StyledTimelineSection,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDate,
  TimelineTitle,
  TimelineDot
} from '../styles/StyledComponents';

const TimelineSection = () => {
  // Настройка IntersectionObserver для анимаций при скролле
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Данные для таймлайна
  const timelineData = [
    {
      date: '1–2 неделя',
      title: 'Старт проекта',
      content: 'UI, 3D-сцена, перемещение'
    },
    {
      date: '3–6 неделя',
      title: 'Основной функционал',
      content: 'Мультиплеер, магазины, товары'
    },
    {
      date: '7–10 неделя',
      title: 'Расширенный функционал',
      content: 'NPC, загрузка, чат, база'
    },
    {
      date: '11–16 неделя',
      title: 'Финальный этап',
      content: 'Тесты, адаптация, оптимизация'
    }
  ];

  // Анимационные варианты для таймлайна
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut"
      }
    }
  };

  return (
    <Slide id="timeline">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            📅 Сроки
          </motion.h2>
          <SectionLine />
        </SectionHeader>
        
        <GlassCard>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Полная реализация Альфа-версии: <HighlightText>4 месяца</HighlightText>
          </motion.p>
          
          <StyledTimelineSection>
            <Timeline
              as={motion.div}
              ref={ref}
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  as={motion.div}
                  variants={timelineItemVariants}
                  custom={index}
                >
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <p>{item.content}</p>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </StyledTimelineSection>
        </GlassCard>
      </Container>
    </Slide>
  );
};

export default TimelineSection; 
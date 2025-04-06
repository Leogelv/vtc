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
  StackItem
} from '../styles/StyledComponents';

// Стилизованные компоненты
const StackContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 30px;
`;

const TechStackSection = () => {
  // Настройка IntersectionObserver для анимаций при скролле
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Технологии для стека
  const techStack = [
    'Three.js / Babylon.js',
    'React',
    'Node.js',
    'Supabase / Firebase',
    'PostgreSQL / Firestore',
    'WebSocket',
    'RAG-подсистема',
    'TTS/STT'
  ];

  return (
    <Slide id="tech-stack">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            👨‍💻 Технологический стек
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
            <StackContainer>
              {techStack.map((tech, index) => (
                <StackItem
                  key={index}
                  as={motion.span}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(59, 130, 246, 0.25)',
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </StackItem>
              ))}
            </StackContainer>
            
            <HighlightBox
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p>Наша архитектура обеспечивает плавное взаимодействие пользователей в 3D-пространстве с минимальной задержкой и максимальной производительностью даже на устройствах среднего класса.</p>
            </HighlightBox>
          </GlassCard>
        </motion.div>
      </Container>
    </Slide>
  );
};

export default TechStackSection; 
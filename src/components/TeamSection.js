import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle, SectionSubtitle, GlassCard } from '../styles/StyledComponents';

const TeamSection = () => {
  const teamMembers = [
    {
      role: 'Project Manager',
      description: 'Опытный руководитель проектов с 8-летним стажем в e-commerce. Успешно запустил 5+ крупных торговых площадок.',
      icon: 'fas fa-tasks'
    },
    {
      role: 'Lead UX/UI Designer',
      description: 'Дизайнер с фокусом на e-commerce платформы. Создает интуитивные интерфейсы, повышающие конверсию.',
      icon: 'fas fa-paint-brush'
    },
    {
      role: 'Lead Frontend Developer',
      description: 'Full-stack разработчик с глубокой экспертизой в React и современных веб-технологиях.',
      icon: 'fas fa-code'
    },
    {
      role: 'Backend Team Lead',
      description: 'Архитектор высоконагруженных систем. Эксперт по масштабируемым микросервисным архитектурам.',
      icon: 'fas fa-database'
    },
    {
      role: 'DevOps Engineer',
      description: 'Специалист по автоматизации и CI/CD. Обеспечивает бесперебойную работу инфраструктуры.',
      icon: 'fas fa-server'
    },
    {
      role: 'Business Analyst',
      description: 'Эксперт по анализу бизнес-процессов в e-commerce. Помогает оптимизировать работу платформы.',
      icon: 'fas fa-chart-line'
    }
  ];

  return (
    <TeamSectionWrapper>
      <SectionTitle>Команда проекта</SectionTitle>
      <SectionSubtitle>
        Профессионалы с опытом реализации крупных e-commerce проектов
      </SectionSubtitle>
      
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <RoleIcon>
              <i className={member.icon} />
            </RoleIcon>
            <MemberInfo>
              <MemberRole>{member.role}</MemberRole>
              <MemberDescription>{member.description}</MemberDescription>
            </MemberInfo>
          </TeamMemberCard>
        ))}
      </TeamGrid>
    </TeamSectionWrapper>
  );
};

const TeamSectionWrapper = styled.section`
  padding: 80px 20px;
  background: var(--vtc-bg-secondary);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
`;

const TeamMemberCard = styled(GlassCard)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const RoleIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  background: var(--vtc-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberRole = styled.h4`
  font-family: 'Unbounded', sans-serif;
  font-size: 1.1rem;
  color: var(--vtc-text-primary);
  margin: 0 0 10px;
  font-weight: 600;
`;

const MemberDescription = styled.p`
  font-size: 0.9rem;
  color: var(--vtc-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

export default TeamSection; 
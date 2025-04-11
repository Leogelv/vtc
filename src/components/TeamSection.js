import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle, SectionSubtitle } from '../styles/StyledComponents';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Александр Петров',
      role: 'Project Manager',
      description: 'Опытный руководитель проектов с 8-летним стажем в e-commerce. Успешно запустил 5+ крупных торговых площадок.',
      image: '/team/pm.jpg'
    },
    {
      name: 'Мария Иванова',
      role: 'Lead UX/UI Designer',
      description: 'Дизайнер с фокусом на e-commerce платформы. Создает интуитивные интерфейсы, повышающие конверсию.',
      image: '/team/designer.jpg'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Lead Frontend Developer',
      description: 'Full-stack разработчик с глубокой экспертизой в React и современных веб-технологиях.',
      image: '/team/frontend.jpg'
    },
    {
      name: 'Елена Козлова',
      role: 'Backend Team Lead',
      description: 'Архитектор высоконагруженных систем. Эксперт по масштабируемым микросервисным архитектурам.',
      image: '/team/backend.jpg'
    },
    {
      name: 'Игорь Волков',
      role: 'DevOps Engineer',
      description: 'Специалист по автоматизации и CI/CD. Обеспечивает бесперебойную работу инфраструктуры.',
      image: '/team/devops.jpg'
    },
    {
      name: 'Анна Соколова',
      role: 'Business Analyst',
      description: 'Эксперт по анализу бизнес-процессов в e-commerce. Помогает оптимизировать работу платформы.',
      image: '/team/analyst.jpg'
    }
  ];

  return (
    <TeamSectionWrapper>
      <SectionTitle>Наша команда</SectionTitle>
      <SectionSubtitle>
        Профессионалы, которые воплотят ваш проект в реальность
      </SectionSubtitle>
      
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
`;

const TeamMemberCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--vtc-shadow);
  transition: transform 0.3s ease;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  padding: 20px;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: var(--vtc-text-primary);
  margin: 0 0 5px;
`;

const MemberRole = styled.h4`
  font-size: 1rem;
  color: var(--vtc-accent);
  margin: 0 0 15px;
  font-weight: 500;
`;

const MemberDescription = styled.p`
  font-size: 0.9rem;
  color: var(--vtc-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

export default TeamSection; 
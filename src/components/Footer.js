import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../styles/StyledComponents';

// Стилизованные компоненты
const FooterWrapper = styled.footer`
  background-color: rgba(15, 23, 42, 0.8);
  padding: 40px 0 20px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: var(--text-primary);
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 3px;
      background: var(--vtc-gradient);
      border-radius: 2px;
    }
    
    @media (max-width: 576px) {
      &:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 10px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: var(--vtc-primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ContactLink = styled.a`
  color: var(--vtc-primary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--vtc-accent);
    text-decoration: underline;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterColumn>
            <h4>О проекте</h4>
            <p>Виртуальный торговый центр — это новая форма цифровой торговли с душой метавселенной, удобная для пользователей и выгодная для продавцов.</p>
          </FooterColumn>
          
          <FooterColumn>
            <h4>Контакты</h4>
            <p>Телеграм: <ContactLink href="https://t.me/nikmcfly" target="_blank">@nikmcfly</ContactLink></p>
            <p>Email: <ContactLink href="mailto:dev@vtc.market">dev@vtc.market</ContactLink></p>
          </FooterColumn>
          
          <FooterColumn>
            <h4>Социальные сети</h4>
            <SocialLinks>
              <SocialLink 
                href="https://t.me/sapientweb" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-telegram-plane"></i>
              </SocialLink>
              <SocialLink 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-twitter"></i>
              </SocialLink>
              <SocialLink 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </SocialLink>
              <SocialLink 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i>
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          <p>&copy; {currentYear} Virtual Trade Center. Все права защищены.</p>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 
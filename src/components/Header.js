import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../styles/StyledComponents';

// Стилизованные компоненты
const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: ${props => props.scrolled 
    ? 'rgba(15, 23, 42, 0.9)'
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '12px 0' : '20px 0'};
  box-shadow: ${props => props.scrolled 
    ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
    : 'none'};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--vtc-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  
  span {
    font-size: 1.7rem;
    margin-right: 5px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: var(--text-primary);
  text-decoration: none;
  margin-left: 25px;
  position: relative;
  font-weight: 500;
  
  &:hover {
    color: var(--vtc-primary);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--vtc-gradient);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  padding: 5px;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 20px;
`;

const MobileNavLink = styled(motion.a)`
  color: var(--text-primary);
  text-decoration: none;
  margin: 15px 0;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--vtc-gradient);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Обработчик скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Отключение скролла при открытом мобильном меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);
  
  // Анимация для навигационных ссылок
  const navLinkVariants = {
    hover: {
      y: -2,
      color: '#3B82F6',
      transition: { duration: 0.2 }
    }
  };
  
  // Анимация для мобильного меню
  const mobileMenuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };
  
  // Анимация для ссылок в мобильном меню
  const mobileNavLinkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };
  
  return (
    <HeaderWrapper
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderContainer>
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>🛒</span> VTC
        </Logo>
        
        <Nav>
          <NavLink 
            href="#concept"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Концепция
          </NavLink>
          <NavLink 
            href="#features"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Возможности
          </NavLink>
          <NavLink 
            href="#tech-stack"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Технологии
          </NavLink>
          <NavLink 
            href="#timeline"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Сроки
          </NavLink>
          <NavLink 
            href="#pricing"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Бюджет
          </NavLink>
        </Nav>
        
        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <MobileNavLink
                href="#concept"
                variants={mobileNavLinkVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                Концепция
              </MobileNavLink>
              <MobileNavLink
                href="#features"
                variants={mobileNavLinkVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                Возможности
              </MobileNavLink>
              <MobileNavLink
                href="#wow-features"
                variants={mobileNavLinkVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                Вау-фичи
              </MobileNavLink>
              <MobileNavLink
                href="#tech-stack"
                variants={mobileNavLinkVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                Технологии
              </MobileNavLink>
              <MobileNavLink
                href="#timeline"
                variants={mobileNavLinkVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                Сроки
              </MobileNavLink>
              <MobileNavLink
                href="#pricing"
                variants={mobileNavLinkVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                Бюджет
              </MobileNavLink>
            </MobileMenu>
          )}
        </AnimatePresence>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header; 
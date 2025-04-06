import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --vtc-primary: #3B82F6;
    --vtc-secondary: #1D4ED8;
    --vtc-accent: #10B981;
    --vtc-dark: #0F172A;
    --vtc-light: #F8FAFC;
    --vtc-gradient: linear-gradient(to right, #3B82F6, #10B981);
    --vtc-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
    
    /* Добавленные переменные из styles-dealai.css */
    --bg-primary: var(--vtc-dark);
    --text-primary: #FFFFFF;
    --text-secondary: #94A3B8;
    --glass-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --glass-border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Базовые стили */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--vtc-dark);
    color: var(--text-primary);
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Unbounded', sans-serif;
    margin-top: 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  /* Анимации */
  @keyframes titleAnimation {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes shineEffect {
    0% {
      left: -50%;
    }
    100% {
      left: 150%;
    }
  }
  
  @keyframes floatParticle {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    25% {
      transform: translate3d(50px, 50px, 0) rotate(90deg);
    }
    50% {
      transform: translate3d(100px, 100px, 0) rotate(180deg);
    }
    75% {
      transform: translate3d(50px, 50px, 0) rotate(270deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(360deg);
    }
  }
`;

export default GlobalStyles; 
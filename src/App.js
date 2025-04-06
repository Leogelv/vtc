import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/GlobalStyles';

// Импорт компонентов
import TitleSlide from './components/TitleSlide';
import ConceptSection from './components/ConceptSection';
import FeaturesSection from './components/FeaturesSection';
import WowFeaturesSection from './components/WowFeaturesSection';
import TechStackSection from './components/TechStackSection';
import TimelineSection from './components/TimelineSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Виртуальный Торговый Центр - Коммерческое предложение</title>
        <meta name="description" content="Коммерческое предложение по созданию Виртуального Торгового Центра - 3D-платформы для торговли товарами в интерактивном пространстве." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>
      
      <GlobalStyles />
      
      <TitleSlide />
      <ConceptSection />
      <FeaturesSection />
      <WowFeaturesSection />
      <TechStackSection />
      <TimelineSection />
      <PricingSection />
      <Footer />
    </>
  );
}

export default App;

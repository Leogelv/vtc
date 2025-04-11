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
import TeamSection from './components/TeamSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>VTC - Виртуальный Торговый Центр | Коммерческое предложение</title>
        <meta name="description" content="Инновационная 3D-платформа для онлайн-торговли. Создаем виртуальные торговые центры с эффектом полного присутствия и интерактивным шопингом." />
        <meta name="keywords" content="виртуальный торговый центр, 3D шопинг, e-commerce, онлайн торговля, VR торговля, интерактивный шопинг" />
        <meta property="og:title" content="VTC - Виртуальный Торговый Центр" />
        <meta property="og:description" content="Инновационная 3D-платформа для онлайн-торговли. Создаем виртуальные торговые центры с эффектом полного присутствия." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1E293B" />
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
      <TeamSection />
      <PricingSection />
      <Footer />
    </>
  );
}

export default App;

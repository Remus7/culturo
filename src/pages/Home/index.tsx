import React from 'react';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import DashboardPreview from './DashboardPreview';
import FeaturesSection from './FeaturesSection';
import AppsSection from './AppsSection';
import TransparencySection from './TransparencySection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import CommunitySection from './CommunitySection';
import NewsSection from './NewsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="pt-[88px]">
        <HeroSection />
        {/*<DashboardPreview />*/}
        <FeaturesSection />
        {/*<AppsSection />
        <TransparencySection />*/}
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
        {/*<CommunitySection />
        <NewsSection />*/}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
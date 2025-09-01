import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Header from '../../components/common/Header';
import ContactSection from '../Home/ContactSection';

const Error: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts with a small delay to ensure DOM is ready
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);

    return () => clearTimeout(scrollTimer);
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Add Header/Navbar */}
      <Header />
      
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Error Content - Add top padding to account for fixed header */}
        <div className="pt-[150px] sm:pt-[170px] md:pt-[200px] pb-[50px] sm:pb-[60px] md:pb-[80px]">
          <div className="flex flex-col items-center gap-[20px] sm:gap-[30px] md:gap-[40px] text-center">
            {/* Title */}
            <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-satoshi font-bold leading-[44px] sm:leading-[58px] md:leading-[74px] lg:leading-[87px] bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
              Sorry, something went wrong
            </h1>
            
            {/* Subtitle */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-inter font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] text-secondary max-w-[600px]">
              We're experiencing some technical difficulties. Please try again later or contact us for assistance.
            </p>
            
            {/* Return Home Button */}
            <Button
              onClick={handleGoHome}
              variant="primary"
              size="large"
              className="bg-lightblue text-primary font-satoshi font-medium rounded-[22px] px-[30px] py-[12px] hover:bg-opacity-90 transition-all duration-200"
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
};

export default Error;
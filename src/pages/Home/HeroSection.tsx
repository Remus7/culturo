import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleGetDemo = () => {
    navigate('/error');
  };

  const handleViewPricing = () => {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="w-full bg-primary relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_hero_bg_color_blur.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[33px] sm:py-[50px] md:py-[66px]">
          <div className="flex flex-col lg:flex-row items-center gap-[25px] sm:gap-[35px] md:gap-[50px]">
            {/* Hero Content */}
            <div className="flex flex-col items-center lg:items-start gap-[15px] sm:gap-[20px] md:gap-[30px] w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start gap-[4px] sm:gap-[6px] md:gap-[8px] w-full">
                <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-satoshi font-bold leading-[44px] sm:leading-[58px] md:leading-[74px] lg:leading-[87px] text-center lg:text-left bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
                  Find the Perfect Culture Fit Every Time
                </h1>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[26px] text-center lg:text-left text-secondary max-w-full">
                  Culturo helps companies filter candidates based on culture fit during hiring. Our AI-powered platform ensures you build teams that align with your company values and work seamlessly together.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[15px] sm:gap-[20px] md:gap-[30px] w-full sm:w-auto">
                <Button 
                  onClick={handleGetDemo}
                  className="w-full sm:w-auto bg-lightblue text-primary font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] hover:bg-opacity-90 transition-all duration-200"
                >
                  Get a demo
                </Button>
                <Button 
                  onClick={handleViewPricing}
                  variant="outline"
                  className="w-full sm:w-auto border border-accent text-light font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] bg-gradient-to-br from-[#15183484] via-[#15183414] to-[#1518347c] hover:bg-opacity-90 transition-all duration-200"
                >
                  View pricing
                </Button>
              </div>
            </div>

            {/* Hero Image - Updated to Handshake */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px]">
                <img 
                  src="/assets/images/Handshake-1756673172974.png" 
                  alt="Professional handshake representing successful culture fit hiring"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
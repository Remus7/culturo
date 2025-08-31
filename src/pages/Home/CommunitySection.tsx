import React from 'react';
import Button from '../../components/ui/Button';

const CommunitySection: React.FC = () => {
  return (
    <section className="w-full bg-primary py-[34px] sm:py-[51px] md:py-[68px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-8 sm:px-12 md:px-[56px]">
          <div className="relative bg-secondary border border-accent rounded-[10px] w-full max-w-[900px] sm:max-w-[1000px] md:max-w-[1016px] h-[350px] sm:h-[400px] md:h-[450px] mx-auto overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-[280px] sm:top-[320px] md:top-[336px] right-[80px] sm:right-[90px] md:right-[100px] w-[90px] sm:w-[105px] md:w-[120px] h-[84px] sm:h-[98px] md:h-[112px] bg-[#5865f2] rounded-[45px] sm:rounded-[52px] md:rounded-[60px] shadow-[0px_4px_200px_#888888ff]"></div>
            <div className="absolute top-0 left-[12px] sm:left-[13px] md:left-[14px] w-[90px] sm:w-[105px] md:w-[120px] h-[90px] sm:h-[105px] md:h-[120px] bg-[#32cafd] rounded-[45px] sm:rounded-[52px] md:rounded-[60px] shadow-[0px_4px_250px_#888888ff]"></div>
            <div className="absolute top-0 right-0 w-[90px] sm:w-[105px] md:w-[120px] h-[90px] sm:h-[105px] md:h-[120px] bg-purple rounded-[45px] sm:rounded-[52px] md:rounded-[60px] shadow-[0px_4px_250px_#888888ff]"></div>

            {/* Content */}
            <div 
              className="relative z-10 flex items-center justify-center h-full p-8 sm:p-12 md:p-[90px] px-8 sm:px-12 md:px-[56px]"
              style={{
                backgroundImage: "url('/images/img_bg_shape_black_900.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="flex flex-col items-center gap-[14px] sm:gap-[21px] md:gap-[28px] w-full max-w-[400px] sm:max-w-[500px] md:max-w-[560px]">
                {/* Discord Logo */}
                <img 
                  src="/images/img_logo.svg" 
                  alt="Discord logo" 
                  className="w-[48px] sm:w-[56px] md:w-[64px] h-[38px] sm:h-[44px] md:h-[50px]"
                />

                {/* Content */}
                <div className="flex flex-col items-center gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
                  <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-satoshi font-bold leading-[32px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] text-center text-light">
                    Join the community
                  </h2>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-secondary">
                    Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.
                  </p>
                </div>

                {/* CTA Button */}
                <Button className="bg-[#5865f2] text-primary font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] hover:bg-opacity-90 transition-all duration-200">
                  Join Discord
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
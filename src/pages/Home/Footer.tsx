import React from 'react';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';

const Footer: React.FC = () => {
  const footerLinks = {
    pages: [
      'Home', 'About', 'Contact', 'Blog', 'Case Studies', 'Pricing', 'Culture Fit Assessment'
    ],
    features: [
      'Features', 'Careers', 'How it Works', 'Request a demo', 'Login', 'Sign Up'
    ],
    utility: [
      'Style guide', 'Privacy Policy', '404 Not found', 'Terms of Service', 'Changelog'
    ]
  };

  return (
    <footer className="w-full relative">
      {/* Main Footer */}
      <div className="w-full bg-primary relative overflow-hidden mt-[-3px] sm:mt-[-4px] md:mt-[-6px]">
        {/* Background decorative element */}
        <div className="absolute bottom-[49px] sm:bottom-[74px] md:bottom-[98px] left-1/2 transform -translate-x-1/2 w-[180px] sm:w-[211px] md:w-[242px] h-[180px] sm:h-[211px] md:h-[242px] bg-lightblue rounded-[90px] sm:rounded-[105px] md:rounded-[120px] shadow-[0px_4px_500px_#888888ff]"></div>
        
        <div className="relative z-10 py-[20px] sm:py-[30px] md:py-[40px]">
          <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-[21px] sm:gap-[32px] md:gap-[42px]">
              {/* Footer Content */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                {/* Newsletter Section */}
                <div className="flex flex-col gap-[17px] sm:gap-[26px] md:gap-[34px] w-full lg:w-auto">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-satoshi font-bold text-lightblue">
                      Culturo
                    </h3>
                  </div>
                  <div className="bg-secondary border border-accent rounded-[10px] p-6 sm:p-8 md:p-[36px] w-full lg:w-[70%]">
                    <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px]">
                      <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-satoshi font-bold leading-[24px] sm:leading-[28px] md:leading-[33px] text-white">
                        Subscribe to our newsletter
                      </h3>
                      <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px]">
                        <EditText
                          placeholder="Enter your email"
                          type="email"
                          className="w-full bg-primary border border-lightblue text-white placeholder-secondary"
                        />
                        <Button className="w-full bg-lightblue text-primary font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[28px] sm:px-[32px] md:px-[34px] py-[8px] sm:py-[9px] md:py-[10px] hover:bg-opacity-90 transition-all duration-200">
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 w-full lg:w-auto">
                  {/* Pages */}
                  <div className="flex flex-col gap-[14px] sm:gap-[21px] md:gap-[28px]">
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-satoshi font-medium leading-[22px] sm:leading-[24px] md:leading-[27px] text-secondary">
                      Pages
                    </h4>
                    <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px]">
                      {footerLinks.pages.map((link, index) => (
                        <a 
                          key={index}
                          href="#"
                          className="text-[14px] sm:text-[15px] md:text-[16px] font-satoshi font-medium leading-[19px] sm:leading-[20px] md:leading-[22px] text-white hover:text-lightblue transition-colors duration-200"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px]">
                    <div className="mt-[30px] sm:mt-[45px] md:mt-[60px]">
                      {footerLinks.features.map((link, index) => (
                        <a 
                          key={index}
                          href="#"
                          className="block text-[14px] sm:text-[15px] md:text-[16px] font-satoshi font-medium leading-[19px] sm:leading-[20px] md:leading-[22px] text-white hover:text-lightblue transition-colors duration-200 mb-[12px] sm:mb-[14px] md:mb-[16px]"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Utility Pages */}
                  <div className="flex flex-col gap-[15px] sm:flex-[22px] md:gap-[30px] self-center lg:self-start w-full sm:w-auto lg:w-[12%]">
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-satoshi font-medium leading-[22px] sm:leading-[24px] md:leading-[27px] text-secondary">
                      Utility Pages
                    </h4>
                    <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] mb-[35px] sm:mb-[52px] md:mb-[70px]">
                      {footerLinks.utility.map((link, index) => (
                        <a 
                          key={index}
                          href="#"
                          className="text-[14px] sm:text-[15px] md:text-[16px] font-satoshi font-medium leading-[19px] sm:leading-[20px] md:leading-[22px] text-white hover:text-lightblue transition-colors duration-200"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="flex flex-col gap-[14px] sm:gap-[21px] md:gap-[28px]">
                <div className="w-full h-[1px] bg-accent"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                  {/* Copyright */}
                  <div className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[17px] sm:leading-[18px] md:leading-[20px] text-left">
                    <span className="text-secondary">Copyright © 2024 </span>
                    <span className="text-light">Culturo</span>
                    <span className="text-secondary"> | Culture Fit Hiring Solutions</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-[10px] sm:gap-[12px] md:gap-[14px]">
                    {[
                      { icon: "/images/img_ri_facebook_fill.svg", alt: "Facebook" },
                      { icon: "/images/img_mdi_twitter.svg", alt: "Twitter" },
                      { icon: "/images/img_ri_linkedin_fill.svg", alt: "LinkedIn" },
                      { icon: "/images/img_social_link.svg", alt: "Social link" }
                    ].map((social, index) => (
                      <button 
                        key={index}
                        className="w-[28px] sm:w-[31px] md:w-[34px] h-[28px] sm:h-[31px] md:h-[34px] bg-primary border border-accent rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex items-center justify-center hover:bg-lightblue transition-colors duration-200"
                      >
                        <img 
                          src={social.icon} 
                          alt={social.alt}
                          className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
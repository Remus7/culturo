import React from 'react';
import Button from '../../components/ui/Button';

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      chart: "/images/img_frame_39.svg",
      icon: "/images/img_icon_green_a200.svg",
      title: "Product Mail is taking on Gmail by betting on privacy",
      description: "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023"
    },
    {
      chart: "/images/img_group_64.svg",
      icon: "/images/img_group_64.svg",
      title: "Wants You To Sign Out Of Google Workspace Forever",
      description: "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023"
    },
    {
      chart: "/images/img_group_64_indigo_a700.svg",
      icon: "/images/img_group_64_indigo_a700.svg",
      title: "The Best Email Encryption Services for 2023",
      description: "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023"
    }
  ];

  return (
    <section className="w-full bg-primary py-[30px] sm:py-[45px] md:py-[60px] mb-[-3px] sm:mb-[-4px] md:mb-[-6px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[23px] sm:gap-[35px] md:gap-[46px] mb-[39px] sm:mb-[59px] md:mb-[78px]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-satoshi font-bold leading-[54px] sm:leading-[64px] md:leading-[70px] lg:leading-[76px] text-left bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
              Product in the news
            </h2>
            <Button className="w-full sm:w-auto bg-purple text-primary font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] hover:bg-opacity-90 transition-all duration-200">
              Browse all news
            </Button>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-[24px]">
            {newsItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px]">
                {/* Chart/Stats Section */}
                <div className="bg-primary rounded-[4px] p-4 sm:p-5 md:p-[20px]">
                  <div className="flex justify-between items-center">
                    {/* Chart Area */}
                    <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[4px] w-[50%]">
                      <div className="flex items-end justify-center gap-1 sm:gap-1.5 md:gap-[4px] mb-2 sm:mb-2.5 md:mb-[24px]">
                        <img 
                          src={item.chart} 
                          alt="Chart" 
                          className="w-[28px] sm:w-[34px] md:w-[40px] h-[12px] sm:h-[15px] md:h-[18px] self-center"
                        />
                        <img 
                          src="/images/img_ellipse_23.png" 
                          alt="Indicator" 
                          className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] ml-3 sm:ml-4 md:ml-[14px]"
                        />
                        <div className="w-[20px] sm:w-[23px] md:w-[26px] h-[1.5px] sm:h-[1.7px] md:h-[2px] bg-secondary ml-1 sm:ml-1.5 md:ml-[3px] self-end"></div>
                      </div>
                      
                      <div className="flex items-end gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
                        <div className="flex flex-col items-start gap-[4px] sm:gap-[5px] md:gap-[6px] mb-[3px] sm:mb-[4px] md:mb-[6px]">
                          <span className="text-[10px] sm:text-[11px] md:text-[12px] font-satoshi font-bold leading-[14px] sm:leading-[15px] md:leading-[17px] text-secondary">2,100</span>
                          <div className="flex items-end gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
                            <div className="w-[16px] sm:w-[19px] md:w-[22px] h-[10px] sm:h-[12px] md:h-[14px] bg-purple rounded-[1.5px] sm:rounded-[1.7px] md:rounded-[2px] self-end"></div>
                            <div className="w-[18px] sm:w-[21px] md:w-[24px] h-[20px] sm:h-[24px] md:h-[28px] bg-purple rounded-[1.5px] sm:rounded-[1.7px] md:rounded-[2px]"></div>
                          </div>
                        </div>
                        <div className="w-[18px] sm:w-[21px] md:w-[24px] h-[30px] sm:h-[36px] md:h-[42px] bg-purple rounded-[1.5px] sm:rounded-[1.7px] md:rounded-[2px]"></div>
                        <div className="w-[20px] sm:w-[23px] md:w-[26px] h-[38px] sm:h-[46px] md:h-[54px] bg-purple rounded-[1.5px] sm:rounded-[1.7px] md:rounded-[2px]"></div>
                      </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-col gap-[16px] sm:gap-[19px] md:gap-[24px] w-[36%]">
                      <img 
                        src={item.icon} 
                        alt="Icon" 
                        className="w-[32px] sm:w-[38px] md:w-[44px] h-[32px] sm:h-[38px] md:h-[44px]"
                      />
                      <div className="bg-secondary border border-accent rounded-[5px] sm:rounded-[5.5px] md:rounded-[6px] p-2 sm:p-2.5 md:p-[10px] mx-2 sm:mx-2.5 md:mx-[10px]">
                        <div className="bg-[#32cafd] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-2 sm:p-2.5 md:p-[8px] w-[28px] sm:w-[34px] md:w-[40px] h-[28px] sm:h-[34px] md:h-[40px] flex items-center justify-center mb-1 sm:mb-1.5 md:mb-[6px] ml-2 sm:ml-2.5 md:ml-[8px]">
                          <img 
                            src="/images/img_activity_gray_900_02.svg" 
                            alt="Activity" 
                            className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px]"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[18px] sm:text-[21px] md:text-[24px] font-satoshi font-bold leading-[24px] sm:leading-[28px] md:leading-[33px] text-secondary">85</span>
                          <span className="text-[10px] sm:text-[11px] md:text-[12px] font-satoshi font-medium leading-[14px] sm:leading-[15px] md:leading-[17px] text-secondary self-end mt-[-2px] sm:mt-[-3px] md:mt-[-4px]">Complate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="bg-secondary border border-accent rounded-[10px] p-4 sm:p-5 md:p-[22px]">
                  <div className="flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px]">
                    <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px]">
                      <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-satoshi font-bold leading-[24px] sm:leading-[28px] md:leading-[32px] text-light">
                        {item.title}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] text-secondary">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="w-full h-[1px] bg-accent"></div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary self-end">
                        {item.date}
                      </span>
                      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-[3px]">
                        <span className="text-[14px] sm:text-[15px] md:text-[16px] font-satoshi font-medium leading-[19px] sm:leading-[20px] md:leading-[22px] text-primary">
                          Read more
                        </span>
                        <img 
                          src="/images/img_arrow_right.svg" 
                          alt="Arrow right" 
                          className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
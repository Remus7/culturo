import React from 'react';
import Dropdown from '../../components/ui/Dropdown';

const DashboardPreview: React.FC = () => {
  return (
    <section className="w-full bg-primary py-[33px] sm:py-[50px] md:py-[66px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-[900px] sm:max-w-[1000px] md:max-w-[1200px] mx-4 sm:mx-8 md:mx-[168px]">
            <div className="bg-secondary border border-accent rounded-[6px] p-3 sm:p-4 md:p-6">
              {/* Dashboard Header */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-[28px] mb-4 sm:mb-5 md:mb-[38px]">
                <div className="bg-accent border border-accent rounded-t-[5px] px-3 sm:px-4 md:px-[14px] py-2 sm:py-2.5 md:py-[8px]">
                  <img 
                    src="/images/img_group_5.svg" 
                    alt="Dashboard controls" 
                    className="w-[32px] sm:w-[38px] md:w-[42px] h-[8px] sm:h-[9px] md:h-[10px]"
                  />
                </div>
                
                {/* User Info and Date Selector */}
                <div className="px-4 sm:px-6 md:px-[38px]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 md:gap-[22px] mb-4 sm:mb-5 md:mb-[22px]">
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-[14px] flex-1">
                      <img 
                        src="/images/img_ellipse_6.png" 
                        alt="User avatar" 
                        className="w-[40px] sm:w-[45px] md:w-[50px] h-[40px] sm:h-[45px] md:h-[50px] rounded-[20px] sm:rounded-[22px] md:rounded-[24px]"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-satoshi font-bold leading-[22px] sm:leading-[24px] md:leading-[27px] text-light">
                          Hello Sajeeb!
                        </h3>
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary">
                          We hope you are having a great night.
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full sm:w-auto">
                      <Dropdown
                        placeholder="Today"
                        leftIcon="/images/img_calendar.svg"
                        rightIcon="/images/img_arrowdown.svg"
                        className="w-full sm:w-[160px] md:w-[180px]"
                      />
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-accent mb-4 sm:mb-5 md:mb-[20px]"></div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-[16px] mb-4 sm:mb-6 md:mb-[30px]">
                    {[
                      {
                        icon: "/images/img_activity.svg",
                        title: "Total Revenue",
                        value: "$59,158",
                        change: "+15%",
                        positive: true
                      },
                      {
                        icon: "/images/img_document.svg",
                        title: "Subscribers",
                        value: "2,984",
                        change: "+11%",
                        positive: true
                      },
                      {
                        icon: "/images/img_shield_fail.svg",
                        title: "Conversations",
                        value: "698",
                        change: "-5%",
                        positive: false
                      },
                      {
                        icon: "/images/img_chart.svg",
                        title: "Popup sales",
                        value: "$658",
                        change: "+15%",
                        positive: true
                      }
                    ].map((stat, index) => (
                      <div key={index} className="bg-primary rounded-[4px] p-3 sm:p-4 md:p-[16px]">
                        <img 
                          src={stat.icon} 
                          alt={stat.title} 
                          className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px] mb-2 sm:mb-2.5 md:mb-[8px]"
                        />
                        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-[4px] mb-1 sm:mb-1.5 md:mb-[8px]">
                          <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-light">
                            {stat.title}
                          </span>
                          <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-inter font-medium leading-[11px] sm:leading-[12px] md:leading-[13px] px-1 sm:px-1.5 md:px-[4px] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] ml-1 sm:ml-1.5 md:ml-[4px] ${
                            stat.positive 
                              ? 'text-green bg-[#b6ffc419]' 
                              : 'text-[#f6285f] bg-[#ffa6be19]'
                          }`}>
                            {stat.change}
                          </span>
                        </div>
                        <div className="text-[20px] sm:text-[22px] md:text-[24px] font-satoshi font-medium leading-[27px] sm:leading-[30px] md:leading-[33px] text-light">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Section */}
                  <div className="bg-primary rounded-[4px] p-3 sm:p-4 md:p-[12px]">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      {/* Y-axis labels */}
                      <div className="hidden sm:flex flex-col justify-between items-end h-[100px] sm:h-[120px] md:h-[138px] gap-4 sm:gap-5 md:gap-[22px]">
                        <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-[#434b72]">100k</span>
                        <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-[#434b72]">10k</span>
                        <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-[#434b72]">5k</span>
                        <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-[#434b72]">0</span>
                      </div>
                      
                      {/* Chart and X-axis */}
                      <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-[4px] flex-1">
                        <img 
                          src="/images/img_group_20.png" 
                          alt="Analytics chart" 
                          className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[648px] h-[100px] sm:h-[120px] md:h-[134px] object-contain mx-3 sm:mx-4 md:mx-[12px]"
                        />
                        
                        {/* X-axis labels */}
                        <div className="flex justify-center items-center w-full gap-2 sm:gap-4 md:gap-8 text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-[#434b72]">
                          <span>Sat</span>
                          <span>Sun</span>
                          <span>Mon</span>
                          <span>Tus</span>
                          <span>Wen</span>
                          <span>The</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "/images/img_icon.svg",
      title: "Culture Assessment",
      description: "Evaluate candidates based on your company\'s core values and cultural principles using our comprehensive assessment tools."
    },
    {
      icon: "/images/img_group.svg",
      title: "Candidate Filtering",
      description: "Automatically filter candidates who don't align with your culture, saving time and improving hiring quality."
    },
    {
      icon: "/images/img_group_gray_100.svg",
      title: "Team Compatibility",
      description: "Analyze how potential hires will fit with existing team dynamics and collaborative styles."
    },
    {
      icon: "/images/img_icon_gray_100.svg",
      title: "Hiring Analytics",
      description: "Get detailed insights and reports on culture fit scores, hiring success rates, and team performance metrics."
    },
    {
      icon: "/images/img_icon_gray_100_44x44.svg",
      title: "Interview Guidance",
      description: "Receive AI-powered interview questions and guidance to assess culture fit during candidate conversations."
    },
    {
      icon: "/images/img_group_gray_100_44x46.png",
      title: "Onboarding Success",
      description: "Track how culture-fit hiring improves employee retention, satisfaction, and overall team performance."
    }
  ];

  return (
    <section id="features" className="w-full bg-primary py-[70px] sm:py-[87px] md:py-[105px] mt-[50px] sm:mt-[65px] md:mt-[80px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-4 lg:gap-6">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-satoshi font-bold leading-[44px] sm:leading-[54px] md:leading-[58px] lg:leading-[64px] bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent max-w-[900px]">
              Powerful features to help you hire for culture fit
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary max-w-[600px]">
              Our comprehensive platform helps you identify candidates who will thrive in your company culture, leading to better retention and team performance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-secondary border border-accent rounded-[4px] p-6 sm:p-7 md:p-[30px] flex flex-col gap-[20px] sm:gap-[24px] md:gap-[30px] hover:border-lightblue transition-colors duration-300"
              >
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-[36px] sm:w-[40px] md:w-[44px] h-[36px] sm:h-[40px] md:h-[44px] object-contain"
                />
                <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px]">
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-satoshi font-bold leading-[27px] sm:leading-[30px] md:leading-[33px] text-light">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Developer Visual */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-[400px] h-[250px] sm:h-[300px] md:h-[350px]">
              <img 
                src="/assets/images/LaptopGuy-1756654825385.png" 
                alt="Developer working with culture fit technology"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
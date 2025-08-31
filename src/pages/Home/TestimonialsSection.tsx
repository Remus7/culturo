import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      avatar: "/images/img_avatar_40x40.png",
      name: "Sarah Martinez",
      role: "HR Director",
      rating: "/images/img_.svg",
      testimonial: "Culturo transformed our hiring process. We now have 95% culture fit success rate and our team retention improved dramatically since using their platform.",
      background: "/images/img_mask_group.svg"
    },
    {
      avatar: "/images/img_avatar_1.png",
      name: "Michael Chen",
      role: "Talent Acquisition Manager",
      rating: "/images/img_.svg",
      testimonial: "The culture assessment tools are incredibly accurate. We're hiring people who truly align with our values and work style, making our teams more cohesive.",
      background: "/images/img_mask_group_purple_400_02.svg"
    },
    {
      avatar: "/images/img_avatar_2.png",
      name: "Emily Johnson",
      role: "Head of People",
      rating: "/images/img_.svg",
      testimonial: "Since implementing Culturo, our new hires integrate faster and stay longer. The culture fit analysis saves us time and improves hiring quality significantly.",
      background: "/images/img_mask_group_deep_purple_300.svg"
    }
  ];

  return (
    <section className="w-full bg-primary py-[33px] sm:py-[50px] md:py-[66px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-[2px] sm:gap-[3px] md:gap-[4px] mx-6 sm:mx-12 md:mx-[294px]">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-satoshi font-bold leading-[54px] sm:leading-[64px] md:leading-[70px] lg:leading-[76px] text-left bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
              What our clients say
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-secondary">
              See how Culturo is helping companies build stronger, more cohesive teams through culture-fit hiring practices.
            </p>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-[22px] sm:gap-[33px] md:gap-[44px]">
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-[24px]">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col w-full max-w-[392px] mx-auto">
                  {/* Testimonial Card */}
                  <div className="bg-secondary border border-accent rounded-[10px] p-4 sm:p-5 md:p-[22px] mx-4 sm:mx-5 md:mx-[24px] relative z-10">
                    <div className="flex flex-col gap-[16px] sm:gap-[19px] md:gap-[22px]">
                      {/* User Info */}
                      <div className="flex items-center gap-2 sm:gap-2.5 md:gap-[10px]">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-[32px] sm:w-[36px] md:w-[40px] h-[32px] sm:h-[36px] md:h-[40px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px]"
                        />
                        <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[4px] flex-1">
                          <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium leading-[17px] sm:leading-[18px] md:leading-[20px] text-light">
                            {testimonial.name}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-secondary">
                            {testimonial.role}
                          </p>
                        </div>
                        <img 
                          src={testimonial.rating} 
                          alt="Rating" 
                          className="w-[40px] sm:w-[48px] md:w-[56px] h-[28px] sm:h-[34px] md:h-[40px]"
                        />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-light">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="border border-accent rounded-[10px] mt-[-60px] sm:mt-[-70px] md:mt-[-84px] relative z-0">
                    <img 
                      src={testimonial.background} 
                      alt="Background pattern" 
                      className="w-full h-[80px] sm:h-[95px] md:h-[110px] object-cover rounded-[10px]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-[14px]">
              <button className="w-[30px] sm:w-[34px] md:w-[38px] h-[30px] sm:h-[34px] md:h-[38px] bg-accent border border-accent rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex items-center justify-center hover:bg-purple transition-colors duration-200">
                <img 
                  src="/images/img_left_arrow.svg" 
                  alt="Previous" 
                  className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px]"
                />
              </button>
              <button className="w-[30px] sm:w-[34px] md:w-[38px] h-[30px] sm:h-[34px] md:h-[38px] bg-accent border border-accent rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex items-center justify-center hover:bg-purple transition-colors duration-200">
                <img 
                  src="/images/img_right_arrow.svg" 
                  alt="Next" 
                  className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
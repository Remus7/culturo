import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingSection: React.FC = () => {
  const navigate = useNavigate();

  const handlePricingClick = () => {
    navigate('/error');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for small teams getting started with culture-fit hiring",
      features: [
        "Basic culture assessment",
        "Up to 5 candidate evaluations/month",
        "Standard reporting",
        "Email support",
        "Basic team integration"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "secondary" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Ideal for growing teams who want advanced culture matching",
      features: [
        "Advanced culture assessment",
        "Unlimited candidate evaluations",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom culture framework",
        "Integration with ATS",
        "Team culture insights"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "primary" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "per month",
      description: "For large organizations with complex hiring needs",
      features: [
        "Everything in Professional",
        "Custom culture assessments",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced API access",
        "Custom integrations",
        "24/7 phone support",
        "Training & onboarding"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "primary" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="w-full bg-primary py-[33px] sm:py-[50px] md:py-[66px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-[2px] sm:gap-[3px] md:gap-[4px] mx-6 sm:mx-12 md:mx-[180px]">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-satoshi font-bold leading-[54px] sm:leading-[64px] md:leading-[70px] lg:leading-[76px] text-center bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-secondary">
              Find the perfect plan to transform your hiring process with culture-fit assessments
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-[32px]">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="flex flex-col relative">
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-lightblue text-primary px-4 py-1 rounded-full text-sm font-inter font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Pricing Card */}
                <div className={`bg-secondary border rounded-[16px] p-6 sm:p-7 md:p-8 h-full flex flex-col ${
                  plan.popular 
                    ? 'border-lightblue shadow-lg shadow-lightblue/20' 
                    : 'border-accent'
                }`}>
                  {/* Plan Header */}
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-satoshi font-bold text-light">
                        {plan.name}
                      </h3>
                      <p className="text-[14px] font-inter font-normal text-secondary leading-[20px]">
                        {plan.description}
                      </p>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-[32px] sm:text-[40px] md:text-[48px] font-satoshi font-bold text-light">
                        {plan.price}
                      </span>
                      {plan.price !== "Free" && (
                        <span className="text-[14px] font-inter font-normal text-secondary">
                          / {plan.period}
                        </span>
                      )}
                      {plan.price === "Free" && (
                        <span className="text-[14px] font-inter font-normal text-secondary">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-lightblue flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[14px] sm:text-[15px] font-inter font-normal text-light leading-[20px] sm:leading-[22px]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handlePricingClick}
                    className={`w-full py-3 px-6 rounded-[22px] font-satoshi font-medium text-[14px] sm:text-[16px] transition-all duration-200 ${
                      plan.buttonVariant === 'primary' ?'bg-lightblue text-primary hover:bg-opacity-90' :'bg-accent text-light border border-accent hover:bg-lightblue hover:border-lightblue hover:text-primary'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-[14px] font-inter font-normal text-secondary mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="#" className="text-[14px] font-inter font-medium text-lightblue hover:text-opacity-80 transition-colors duration-200">
                View detailed comparison →
              </a>
              <a href="#" className="text-[14px] font-inter font-medium text-lightblue hover:text-opacity-80 transition-colors duration-200">
                Contact our team →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
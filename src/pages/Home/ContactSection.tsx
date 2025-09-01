import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Contact Form Submission');
      const body = encodeURIComponent(`Email: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:remus.rughinis.007@gmail.com?subject=${subject}&body=${body}`;
      
      // Open mail client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-primary py-[70px] sm:py-[87px] md:py-[105px]">
      <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[30px] sm:gap-[45px] md:gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-4 lg:gap-6">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-satoshi font-bold leading-[44px] sm:leading-[54px] md:leading-[58px] lg:leading-[64px] bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary max-w-[600px]">
              Have questions about culture-fit hiring? Want to learn more about how Culturo can help your team? Send us a message and we'll get back to you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary border border-accent rounded-[8px] p-6 sm:p-8 md:p-[40px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="email" 
                  className="text-[16px] font-satoshi font-medium text-light"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@company.com"
                  className="w-full bg-primary border border-accent rounded-[4px] px-4 py-3 text-[16px] font-inter text-light placeholder-secondary focus:outline-none focus:border-lightblue transition-colors duration-200"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="message" 
                  className="text-[16px] font-satoshi font-medium text-light"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell us about your hiring challenges or questions about culture fit assessment..."
                  className="w-full bg-primary border border-accent rounded-[4px] px-4 py-3 text-[16px] font-inter text-light placeholder-secondary focus:outline-none focus:border-lightblue transition-colors duration-200 resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isSubmitting}
                className="bg-lightblue text-primary font-satoshi font-medium rounded-[8px] py-4 hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-400 text-center text-[14px] font-inter">
                  Your email client should have opened with the message. If not, please email us directly at remus.rughinis.007@gmail.com
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center text-[14px] font-inter">
                  Something went wrong. Please try again or email us directly at remus.rughinis.007@gmail.com
                </div>
              )}
            </form>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React from 'react';
import Button from '../../components/ui/Button';

const AppsSection: React.FC = () => {
  return (
    <section className="w-full bg-primary py-[33px] sm:py-[50px] md:py-[66px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[27px] sm:gap-[40px] md:gap-[54px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-[-3px] sm:gap-[-4px] md:gap-[-6px] mx-4 sm:mx-8 md:mx-[160px]">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-satoshi font-bold leading-[54px] sm:leading-[64px] md:leading-[70px] lg:leading-[76px] text-center bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
              Essential apps that protect your
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-[30px] mt-[-3px] sm:mt-[-4px] md:mt-[-6px]">
              <div className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
                <img 
                  src="/images/img_group_purple_a200.svg" 
                  alt="Email icon" 
                  className="w-[28px] sm:w-[35px] md:w-[42px] h-[20px] sm:h-[25px] md:h-[30px] mt-3 sm:mt-4 md:mt-[18px]"
                />
                <span className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-satoshi font-bold leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[65px] text-center bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
                  Email,
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
                <img 
                  src="/images/img_icon_gray_100_30x30.svg" 
                  alt="Events icon" 
                  className="w-[24px] sm:w-[27px] md:w-[30px] h-[24px] sm:h-[27px] md:h-[30px] mt-3 sm:mt-4 md:mt-[18px]"
                />
                <span className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-satoshi font-bold leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[65px] text-center bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
                  Events,
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-2.5 md:gap-[10px]">
                <img 
                  src="/images/img_icon_gray_100_30x36.svg" 
                  alt="Files icon" 
                  className="w-[24px] sm:w-[30px] md:w-[36px] h-[20px] sm:h-[25px] md:h-[30px] mt-3 sm:mt-4 md:mt-[18px]"
                />
                <span className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-satoshi font-bold leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[65px] text-center bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
                  Files,
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-[12px]">
                <img 
                  src="/images/img_group_gray_100_30x22.png" 
                  alt="Documents icon" 
                  className="w-[18px] sm:w-[20px] md:w-[22px] h-[20px] sm:h-[25px] md:h-[30px]"
                />
                <span className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-satoshi font-bold leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[65px] text-center bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
                  Documents
                </span>
              </div>
            </div>
          </div>

          {/* Apps Content */}
          <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px]">
            {/* Email Section */}
            <div className="bg-secondary border border-accent rounded-[10px] overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left Content */}
                <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16">
                  <div className="flex flex-col gap-[20px] sm:gap-[25px] md:gap-[34px] mt-8 sm:mt-16 md:mt-24 lg:mt-[132px] mx-4 sm:mx-8 md:mx-12 lg:mx-[70px]">
                    <div className="flex flex-col gap-[8px] sm:gap-[10px] md:gap-[14px]">
                      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-satoshi font-bold leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] text-light">
                        End-to-end encrypted inbox and messages
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary">
                        Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.
                      </p>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-auto border border-accent text-light font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] bg-gradient-to-br from-[#15183484] via-[#15183414] to-[#1518347c] hover:bg-opacity-90 transition-all duration-200"
                    >
                      Learn More
                    </Button>
                  </div>
                  <div className="w-[100px] sm:w-[120px] md:w-[150px] h-[90px] sm:h-[107px] md:h-[134px] bg-purple rounded-[50px] sm:rounded-[60px] md:rounded-[74px] shadow-[0px_4px_500px_#888888ff] mt-[-1px] sm:mt-[-1.5px] md:mt-[-2px]"></div>
                </div>

                {/* Right Content - Email Interface */}
                <div className="flex-1 relative p-4 sm:p-6 md:p-8">
                  <div className="relative w-full h-[400px] sm:h-[450px] md:h-[512px]">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-[120px] sm:w-[150px] md:w-[186px] h-[150px] sm:h-[187px] md:h-[234px] bg-[#32cafd] rounded-[80px] sm:rounded-[100px] md:rounded-[116px] shadow-[0px_4px_500px_#888888ff] mb-[220px] sm:mb-[250px] md:mb-[276px]"></div>
                    
                    {/* Email Interface */}
                    <div className="absolute inset-0 bg-secondary border border-accent rounded-[10px] p-4 sm:p-5 md:p-[20px] mx-6 sm:mx-8 md:mx-[34px] my-4 sm:my-6 md:my-[70px]">
                      {/* Email Header */}
                      <div className="flex flex-col gap-4 sm:gap-5 md:gap-[22px] mb-4 sm:mb-5 md:mb-[22px]">
                        {/* Top Controls */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                            <img src="/images/img_group_26.svg" alt="Control" className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px]" />
                            <div className="w-[1px] h-[20px] sm:h-[22px] md:h-[24px] bg-primary ml-4 sm:ml-5 md:ml-[20px]"></div>
                            <img src="/images/img_group_27.svg" alt="Control" className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px] ml-3 sm:ml-4 md:ml-[18px]" />
                            <img src="/images/img_group_28.svg" alt="Control" className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px] ml-2" />
                          </div>
                          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-[10px]">
                            <img src="/images/img_group_26_blue_gray_300.svg" alt="Control" className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px]" />
                            <img src="/images/img_group_27_gray_900.svg" alt="Control" className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px]" />
                            <img src="/images/img_group_28_gray_900.svg" alt="Control" className="w-[20px] sm:w-[22px] md:w-[24px] h-[20px] sm:h-[22px] md:h-[24px]" />
                          </div>
                        </div>

                        {/* Email Title */}
                        <h4 className="text-[14px] sm:text-[16px] md:text-[18px] font-satoshi font-bold leading-[19px] sm:leading-[22px] md:leading-[25px] text-light">
                          Invitation to present at Bsides
                        </h4>
                      </div>

                      {/* Email Messages */}
                      <div className="flex flex-col gap-3 sm:gap-4 md:gap-[14px]">
                        {[
                          {
                            avatar: "/images/img_rectangle_17.png",
                            name: "R. Baynham",
                            email: "tranthuy.nute@gmail.com",
                            date: "Feb 8, 2023",
                            message: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus."
                          },
                          {
                            avatar: "/images/img_rectangle_17_30x30.png",
                            name: "Cooper Kristin",
                            email: "tranthuy.nute@gmail.com",
                            date: "Feb 8, 2023",
                            message: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus."
                          }
                        ].map((email, index) => (
                          <div key={index} className="bg-tertiary border border-accent rounded-[4px] p-3 sm:p-3.5 md:p-[12px]">
                            <div className="flex justify-between items-start mb-2 sm:mb-2.5 md:mb-[8px]">
                              <div className="flex items-start gap-2 sm:gap-2.5 md:gap-[8px]">
                                <img 
                                  src={email.avatar} 
                                  alt={email.name}
                                  className="w-[24px] sm:w-[27px] md:w-[30px] h-[24px] sm:h-[27px] md:h-[30px] rounded-[4px] sm:rounded-[4.5px] md:rounded-[5px]"
                                />
                                <div className="flex flex-col">
                                  <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-medium leading-[15px] sm:leading-[16px] md:leading-[17px] text-light">
                                    {email.name}
                                  </span>
                                  <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-secondary">
                                    {email.email}
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-secondary">
                                {email.date}
                              </span>
                            </div>
                            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] text-secondary">
                              {email.message}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Files and Mobile Apps Section */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-[38px]">
              {/* Files Section */}
              <div className="flex-1 bg-secondary border border-accent rounded-[10px] overflow-hidden">
                <div className="relative">
                  {/* Mobile App Preview */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[356px]">
                      {/* Background decorative elements */}
                      <div className="absolute top-[30px] sm:top-[35px] md:top-[38px] right-[20px] sm:right-[23px] md:right-[26px] w-[80px] sm:w-[95px] md:w-[118px] h-[80px] sm:h-[95px] md:h-[118px] bg-green rounded-[40px] sm:rounded-[47px] md:rounded-[58px] shadow-[0px_4px_250px_#888888ff]"></div>
                      
                      {/* Mobile Interface */}
                      <div className="absolute inset-0">
                        <img 
                          src="/images/img_wallet_cryptocu.png" 
                          alt="Mobile app interface" 
                          className="w-full max-w-[200px] sm:max-w-[235px] md:max-w-[270px] h-[240px] sm:h-[270px] md:h-[306px] object-contain mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile App Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="bg-purple w-[80px] sm:w-[95px] md:w-[118px] h-[80px] sm:h-[95px] md:h-[118px] rounded-[40px] sm:rounded-[47px] md:rounded-[58px] shadow-[0px_4px_250px_#888888ff] mb-4 sm:mb-5 md:mb-[22px]"></div>
                    <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-[4px] ml-4 sm:ml-5 md:ml-[20px]">
                      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-satoshi font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[44px] text-light">
                        Mobile applications
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary w-[90%] sm:w-[92%] md:w-[94%]">
                        Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Management Section */}
              <div className="flex-1 bg-secondary border border-accent rounded-[10px] overflow-hidden">
                <div className="flex flex-col">
                  {/* File Upload Header */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="relative">
                      <div className="absolute top-0 right-0 w-[90px] sm:w-[110px] md:w-[130px] h-[90px] sm:h-[110px] md:h-[130px] bg-purple rounded-[45px] sm:rounded-[55px] md:rounded-[64px] shadow-[0px_4px_250px_#888888ff]"></div>
                      <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-[4px] ml-3 sm:ml-4 md:ml-[14px] mb-4 sm:mb-5 md:mb-[22px]">
                        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-satoshi font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[44px] text-light">
                          Upload, share, and preview any file
                        </h3>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary w-[95%] sm:w-[96%] md:w-[98%]">
                          Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* File List */}
                  <div className="relative bg-tertiary border border-accent rounded-t-[10px] mx-4 sm:mx-6 md:mx-[54px] overflow-hidden">
                    <div className="p-4 sm:p-5 md:p-[18px] mx-4 sm:mx-5 md:mx-[18px]">
                      {/* File Header */}
                      <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-[14px]">
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-[14px]">
                          <div className="w-[14px] sm:w-[15px] md:w-[16px] h-[14px] sm:h-[15px] md:h-[16px] border border-[#3a3f57] rounded-[2px] sm:rounded-[2.5px] md:rounded-[3px]"></div>
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-[#474e6f]">Name</span>
                          <img src="/images/img_arrow_up.svg" alt="Sort" className="w-[14px] sm:w-[15px] md:w-[16px] h-[14px] sm:h-[15px] md:h-[16px]" />
                        </div>
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-[#474e6f]">Type</span>
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-[#474e6f]">Size</span>
                      </div>

                      <div className="w-full h-[1px] bg-accent mb-4 sm:mb-5 md:mb-[20px]"></div>

                      {/* File Items */}
                      <div className="flex flex-col gap-6 sm:gap-8 md:gap-[38px]">
                        {[
                          { icon: "/images/img_frame_27.svg", name: "Q1 overview", type: "Files", size: "10.5 GB", checked: false },
                          { icon: "/images/img_frame_27_light_blue_a200.svg", name: "Team review", type: "Docx", size: "5.5 GB", checked: true },
                          { icon: "/images/img_frame_27_indigo_a700.svg", name: "Fetch table.py", type: "Code", size: "7.5 GB", checked: false },
                          { icon: "/images/img_frame_27_purple_400.svg", name: "Cap table.xls", type: "XLS", size: "2.5 GB", checked: false },
                          { icon: "/images/img_frame_27.svg", name: "Q1 overview", type: "Files", size: "10.5 GB", checked: false }
                        ].map((file, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div className="flex items-center gap-3 sm:gap-4 md:gap-[14px] flex-1">
                              {file.checked ? (
                                <img src="/images/img_group_38.png" alt="Checked" className="w-[14px] sm:w-[15px] md:w-[16px] h-[14px] sm:h-[15px] md:h-[16px]" />
                              ) : (
                                <div className="w-[14px] sm:w-[15px] md:w-[16px] h-[14px] sm:h-[15px] md:h-[16px] border border-[#3a3f57] rounded-[2px] sm:rounded-[2.5px] md:rounded-[3px] bg-tertiary"></div>
                              )}
                              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-[10px]">
                                <div className="bg-tertiary border border-accent rounded-[5px] sm:rounded-[5.5px] md:rounded-[6px] p-2 sm:p-2.5 md:p-[8px]">
                                  <img src={file.icon} alt="File type" className="w-[14px] sm:w-[15px] md:w-[16px] h-[14px] sm:h-[15px] md:h-[16px]" />
                                </div>
                                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary">
                                  {file.name}
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center flex-1 max-w-[200px] sm:max-w-[250px] md:max-w-[308px]">
                              <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary ml-12 sm:ml-14 md:ml-[54px]">
                                {file.type}
                              </span>
                              <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-right text-secondary">
                                {file.size}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-[150px] sm:h-[170px] md:h-[202px] bg-gradient-to-t from-secondary to-transparent pointer-events-none"></div>
                  </div>

                  {/* Background Shape */}
                  <div className="relative">
                    <img 
                      src="/images/img_bg_shape.svg" 
                      alt="Background shape" 
                      className="w-full h-[300px] sm:h-[350px] md:h-[392px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-[30px]">
              <Button className="w-full sm:w-auto bg-purple text-primary font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] hover:bg-opacity-90 transition-all duration-200">
                Get a Started
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto border border-accent text-light font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] bg-gradient-to-br from-[#15183484] via-[#15183414] to-[#1518347c] hover:bg-opacity-90 transition-all duration-200"
              >
                Browse all feature
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
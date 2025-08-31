import React from 'react';
import Button from '../../components/ui/Button';

const TransparencySection: React.FC = () => {
  return (
    <section className="w-full bg-primary py-[35px] sm:py-[52px] md:py-[70px]">
      <div className="w-full max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary border border-accent rounded-[10px] p-8 sm:p-10 md:p-[50px]" 
             style={{
               backgroundImage: "url('/images/img_bg_shape_color.svg')",
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-[26px]">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px]">
                <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px] w-full lg:w-[76%] mt-4 sm:mt-5 md:mt-[26px]">
                  <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-satoshi font-bold leading-[38px] sm:leading-[48px] md:leading-[52px] lg:leading-[56px] text-left bg-gradient-to-b from-[#f6f6f7] to-[#7e808f] bg-clip-text text-transparent">
                    Transparent, audited, &open source
                  </h2>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-secondary">
                    Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum.
                  </p>
                </div>
                <Button 
                  variant="outline"
                  className="w-auto border border-accent text-light font-satoshi font-medium text-[14px] sm:text-[16px] leading-[19px] sm:leading-[22px] rounded-[22px] px-[20px] sm:px-[24px] py-[8px] sm:py-[10px] bg-gradient-to-br from-[#15183484] via-[#15183414] to-[#1518347c] hover:bg-opacity-90 transition-all duration-200"
                >
                  Browse all feature
                </Button>
              </div>
            </div>

            {/* Right Content - Code Examples */}
            <div className="flex-1">
              <div 
                className="bg-primary rounded-[10px] p-4 sm:p-5 md:p-[12px]"
                style={{
                  backgroundImage: "url('/images/img_line.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="flex flex-col gap-[35px] sm:gap-[52px] md:gap-[70px]">
                  {/* Code Block 1 */}
                  <div className="bg-primary rounded-[10px] p-4 sm:p-5 md:p-[24px] w-full lg:w-[82%]">
                    <div className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] text-left">
                      <span className="text-[#4f86ef]">const</span>
                      <span className="text-light"> </span>
                      <span className="text-[#9ae7f2]">salt = srp.</span>
                      <span className="text-[#f98e62]">generateSalt</span>
                      <span className="text-light">();{'\n'}</span>
                      <span className="text-[#4f86ef]">const</span>
                      <span className="text-light"> </span>
                      <span className="text-[#9ae7f2]">masterSecret</span>
                      <span className="text-light"> = </span>
                      <span className="text-[#e9708b]">await</span>
                      <span className="text-light"> createKeyFromSecret(</span>
                      <span className="text-[#9ae7f2]">password, salt</span>
                      <span className="text-light">);{'\n\n'}</span>
                      <span className="text-[#4f86ef]">const</span>
                      <span className="text-light"> </span>
                      <span className="text-[#9ae7f2]">verifierPrivateKey</span>
                      <span className="text-light"> = </span>
                      <span className="text-[#e9708b]">await </span>
                      <span className="text-[#f98e62]">createSRPKey</span>
                      <span className="text-light">(</span>
                      <span className="text-[#9ae7f2]">password, salt</span>
                      <span className="text-light">);{'\n'}</span>
                      <span className="text-[#4f86ef]">const</span>
                      <span className="text-light"> </span>
                      <span className="text-[#9ae7f2]">verifier = srp.</span>
                      <span className="text-[#f98e62]">deriveVerifier</span>
                      <span className="text-light">(</span>
                      <span className="text-[#9ae7f2]">verifierPrivateKey);</span>
                    </div>
                  </div>

                  {/* Code Block 2 */}
                  <div className="bg-primary rounded-[10px] p-4 sm:p-5 md:p-[24px] w-full lg:w-[82%] self-end">
                    <div className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] text-left text-[#4c8776]">
                      // recoverySigningPublicKey is the public key component of the keypair used{'\n'}
                      // to sign SSS shards. Upon share re-combination, spliterati verifies attached{'\n'}
                      // signatures of each shard to confirm that the shard is correct.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Sections */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-[26px] mt-8 sm:mt-10 md:mt-[40px]">
            {/* Product Mail */}
            <div className="flex-1 bg-primary border border-accent rounded-[10px] p-6 sm:p-7 md:p-[30px]">
              <div className="flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]">
                <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6px] mt-4 sm:mt-5 md:mt-[26px]">
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-satoshi font-bold leading-[27px] sm:leading-[30px] md:leading-[33px] text-light">
                    Product Mail
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary">
                    Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                  </p>
                </div>

                {/* Email Interface */}
                <div className="bg-secondary rounded-t-[10px] p-4 sm:p-5 md:p-[20px] mx-4 sm:mx-6 md:mx-[30px] mt-3 sm:mt-4 md:mt-[14px]">
                  <div className="flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px]">
                    <span className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[17px] sm:leading-[18px] md:leading-[20px] text-light">
                      New Message
                    </span>
                    
                    {/* Email Form Fields */}
                    <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6px]">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-[16px]">
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary">To</span>
                          <div className="bg-accent rounded-t-[10px] px-2 sm:px-2.5 md:px-[10px] py-[1px] sm:py-[1.5px] md:py-[2px] flex items-center gap-1 sm:gap-1.5 md:gap-[4px]">
                            <span className="text-[10px] sm:text-[11px] md:text-[12px] font-inter font-normal leading-[13px] sm:leading-[14px] md:leading-[15px] text-light">Sajib H.</span>
                            <img src="/images/img_x.png" alt="Remove" className="w-[12px] sm:w-[14px] md:w-[16px] h-[12px] sm:h-[14px] md:h-[16px]" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-[10px]">
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary">CC</span>
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary">BCC</span>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-accent rounded-t-[1px]"></div>
                    </div>

                    <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6px]">
                      <div className="flex items-center gap-4 sm:gap-5 md:gap-[20px]">
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary">Subject</span>
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-light">Dacilisis tellus tinc</span>
                      </div>
                      <div className="w-full h-[1px] bg-accent rounded-t-[1px]"></div>
                    </div>

                    <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6px]">
                      <div className="flex items-center gap-6 sm:gap-8 md:gap-[36px]">
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-secondary">From</span>
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-light">acilisis@email.com</span>
                      </div>
                      <div className="w-full h-[1px] bg-accent rounded-t-[1px]"></div>
                    </div>

                    <span className="text-[12px] sm:text-[13px] md:text-[14px] font-inter font-normal leading-[15px] sm:leading-[16px] md:leading-[17px] text-light">
                      Gilisis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product UI */}
            <div className="flex-1 bg-primary border border-accent rounded-[10px] p-6 sm:p-7 md:p-[30px]">
              <div className="flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]">
                <div className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6px] mt-4 sm:mt-5 md:mt-[26px]">
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-satoshi font-bold leading-[27px] sm:leading-[30px] md:leading-[33px] text-light">
                    Product UI
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-secondary">
                    Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                  </p>
                </div>
                <img 
                  src="/images/img_image_wrapper.svg" 
                  alt="Product UI preview" 
                  className="w-full h-[150px] sm:h-[180px] md:h-[210px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
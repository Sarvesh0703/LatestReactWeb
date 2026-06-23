import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import heroBg from "../assets/banner-9.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-bg flex flex-col items-center gap-6 pt-14 pb-20 px-4 sm:px-12 lg:px-24 xl:px-40
      text-center dark:text-white w-full overflow-hidden text-gray-700"
    style={{ backgroundImage: `url(${heroBg})` }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 p-1.5
      pr-4 rounded-full"
      >
        {/* <img className='w-20' src={assets.group_profile} alt="Hero" />
        <p className='text-lg text-xs font-medium'>Welcome to our website!</p> */}
        <div className="rounded-full mb-3 h-10 gradient-border inline-flex items-center">
          <div className="bg-black text-white dark:bg-black py-2 text-sm items-center gap-2 px-5 inline-flex dark:text-white rounded-full z-10 relative">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1699 0.58575C14.9429 -0.19525 13.7499 -0.19525 13.5229 0.58575L13.2029 1.69275C12.5109 4.07875 11.5669 5.94175 8.99994 6.58375L7.80794 6.88175C7.63097 6.91697 7.47168 7.01246 7.35721 7.15195C7.24274 7.29144 7.18018 7.4663 7.18018 7.64675C7.18018 7.8272 7.24274 8.00206 7.35721 8.14155C7.47168 8.28104 7.63097 8.37653 7.80794 8.41175L8.99994 8.70975C11.5669 9.35275 12.5109 11.2157 13.2029 13.6007L13.5229 14.7078C13.7499 15.4897 14.9429 15.4897 15.1699 14.7078L15.4899 13.6007C16.1819 11.2157 17.1269 9.35275 19.6939 8.71075L20.8839 8.41175C21.0609 8.37653 21.2202 8.28104 21.3347 8.14155C21.4491 8.00206 21.5117 7.8272 21.5117 7.64675C21.5117 7.4663 21.4491 7.29144 21.3347 7.15195C21.2202 7.01246 21.0609 6.91697 20.8839 6.88175L19.6939 6.58375C17.1269 5.94175 16.1819 4.07875 15.4899 1.69375L15.1699 0.58575Z"
                fill="url(#paint0_linear_9274_1469)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.28304 11.8368C5.14704 11.3488 4.43104 11.3488 4.29604 11.8368L4.10304 12.5288C3.68805 14.0188 3.12205 15.1838 1.58104 15.5858L0.867045 15.7718C0.759268 15.7971 0.663206 15.8581 0.594451 15.9448C0.525695 16.0316 0.488281 16.1391 0.488281 16.2498C0.488281 16.3605 0.525695 16.4679 0.594451 16.5547C0.663206 16.6415 0.759268 16.7025 0.867045 16.7278L1.58104 16.9148C3.12104 17.3158 3.68805 18.4808 4.10304 19.9708L4.29604 20.6628C4.43104 21.1518 5.14704 21.1518 5.28304 20.6628L5.47605 19.9708C5.89005 18.4808 6.45805 17.3158 7.99804 16.9148L8.71204 16.7278C8.81982 16.7025 8.91588 16.6415 8.98464 16.5547C9.05339 16.4679 9.09081 16.3605 9.09081 16.2498C9.09081 16.1391 9.05339 16.0316 8.98464 15.9448C8.91588 15.8581 8.81982 15.7971 8.71204 15.7718L7.99804 15.5858C6.45805 15.1848 5.89005 14.0198 5.47605 12.5288L5.28304 11.8368Z"
                fill="url(#paint1_linear_9274_1469)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_9274_1469"
                  x1="7.18018"
                  y1="0"
                  x2="21.5117"
                  y2="15.2943"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF58D5"></stop>
                  <stop offset="1" stop-color="#FFA0E7"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9274_1469"
                  x1="9.09081"
                  y1="11.4708"
                  x2="0.488281"
                  y2="21.0295"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7A5AF8"></stop>
                  <stop offset="1" stop-color="#B5A2FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p>Powerful AI Kit for AI Products, Tools and Startups</p>
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px]
      xl:leading-[95px] max-w-5xl text-white dark:text-white/90"
      style={{ fontWeight: 700, paddingBottom: '15px' }}>
        Turning concepts into engaging
        <span className="bg-gradient-to-r from-[#c33aac] to-[#4d8cea] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
          {" "}
          digital
        </span>{" "}
        experiences.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-lg text-white dark:text-white/90 max-w-2xl"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. incidunt in
        tenetur corporis hic eaque dolor, autem labore cum vero amet?
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* <img className="w-full max-w-6xl" src={assets.hero_img} alt="Hero" /> */}
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-100
        sm:-right-70 -z-1 dark:hidden"
        />
      </motion.div>
      
      <div className="lg:block moov-icons">
        <img src={assets.shap_1} class="absolute top-45 left-16 floating-1" alt=""></img>
        <img src={assets.shap_2} class="absolute top-[350px] right-[170px] floating-2" alt=""></img>
        <img src={assets.shap_3} class="absolute right-16 top-[200px] floating-3" alt=""></img>
        <img src={assets.shap_4} class="absolute left-[130px] top-[350px] floating-4" alt=""></img>
      </div>
    </div>
  );
};

export default Hero;

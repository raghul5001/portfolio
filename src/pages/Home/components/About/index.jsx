import React from 'react';
import { ShapeStarWhite } from '../../../../assets';
import "./style.scss";
import TiltCard from '../../../../components/tiltCard';
import { Fade } from 'react-awesome-reveal';
import ani from '../../../../assets/portfolio/ANI.jpg'

const Aboutme = () => {
  const tiltprops = {
    tiltMaxAngleX: 8,
    tiltMaxAngleY: 8,
    scale: 1.01,
    transitionSpeed: 1000,


  };
  return (
    <section className='v_aboutme v_container v_padding_vertical v_padding_horizontal flex  justify-between gap-x-[24px] gap-y-5  ' id='v_about'>
      {/* pics section */}
      <div className='w-[70%] lg:w-[42%]  md:w-[50%] flex-shrink-0'>

      <Fade duration={2000} easing="ease-out" fraction={.28}  >
        <div className='v_about_img_container relative z-[8px]'>

          {/* shape one */}
          <div className='v_about_img_shape_one absolute right-[-40px] top-[-40px] border-[4px] z-[0] border-[#80db66] w-[120px] h-[120px]'></div>
          {/* shape two */}
          <div className=' absolute v_about_img_shape_two right-[40px] bottom-[-30px]  z-[2] bg-[#80db66] w-[45px] h-[65px]'></div>
          <div className=' absolute v_about_img_shape_three left-[-40px] top-[70px]  z-[2] bg-[#80db66] w-[75px] h-[75px]'></div>
          <TiltCard tiltprops={tiltprops} >
            <img src={ani} alt="vidhun" loading='eager' />
          </TiltCard>
        </div>
        </Fade>

      </div>
      {/* content */}
      <div className='lg:w-[50%] w-[100%] relative'>
        {/* shape star */}
        <img src={ShapeStarWhite} alt="" className='absolute v_about_star_white right-[-22px] top-[0px] z-10 ' />
        <Fade duration={1500} easing="ease-out" fraction={.3}  delay={200} >
        <h2 className='lg:text-[70px] md:text-[50px] text-[36px] mb-[20px] lg:mb-[32px] font-jost text-white'>So. Who am I?</h2>

        <p className='text-white sm:text-[18px] text-[16px] leading-8 font-nunito '>
          As a Software Engineer, I am deeply passionate about the world of technology and its transformative impact on society. My journey began with a strong curiosity for programming, and since then, I have been on a continuous quest to enhance my skills and knowledge in the ever-evolving landscape of software development.

        </p>
        <p className="text-white leading-8  sm:text-[18px] text-[16px] font-nunito mt-3">      My expertise lies in front-end development, and I take pride in my ability to create visually appealing and user-friendly interfaces. Through my hands-on experience with React, React Native, HTML5, CSS, JavaScript and Core Java, I have honed my skills in building interactive and responsive websites, web applications, Mobile application that provide seamless user experiences.</p>

        <p className="text-white leading-8 sm:text-[18px] text-[16px] font-nunito mt-3"> I have successfully crafted websites, web applications, Mobile applications using these technologies. I am Passionate about creating user-friendly interfaces and eager to learn and grow in the ever-evolving tech industry.</p>
      </Fade>
      </div>
    </section>
  );
};

export default Aboutme;
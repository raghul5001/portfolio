import React, { useState } from 'react';
import { StickyHeader } from '../../components';
import HeroBanner from './components/HeroBanner';
import Aboutme from './components/About';
import MySkills from './components/MySkills';
import Marquee from "react-fast-marquee";
import "./style.scss";
import Myworks from './components/MyWorks';
import ContactMe from './components/Contact';
import Footer from '../../components/footer';
import ConfettieV from '../../components/confettie';


const Home = () => {
   const [isTriggerConfettie,setIsTriggerConfettie]=useState(false);
   

  return (
    <div className='v_master_home_container'>
      <StickyHeader />
      <main>
     {isTriggerConfettie &&  <ConfettieV setIsTriggerConfettie={setIsTriggerConfettie} />}

        <HeroBanner />

        <Aboutme />
        {/* marquee about me */}
        <Marquee className='v_about_me_marqee_container'>
          <p>
            Passionate Learner
          </p>
          <p>
            Forward-Thinking
          </p>
          <p>
            Adaptable
          </p>
          <p>
            Continuous Improver
          </p>
          <p>
            Results-Driven
          </p>
          <p>
            Self-Motivated
          </p>
          <p>
            Goal-Oriented
          </p>
        </Marquee>


        <MySkills />

        {/* marquee works */}
        <Marquee className="v_work_marqee_container">
          <p className='text-[60px] md:text-[96px]'>I’m Open for new projects * Let’s Work Together.</p>
          <p className='text-[60px] md:text-[96px]'>I’m Open for new projects * Let’s Work Together. </p>
        </Marquee>


        <Myworks />


        {/* <ContactMe setIsTriggerConfettie={setIsTriggerConfettie} /> */}

      </main>
      <Footer />

    </div>

  );
};

export default Home;
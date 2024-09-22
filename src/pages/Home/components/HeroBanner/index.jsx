import React from 'react';
import "./style.scss";
import { HeroVector,ShapeCrown,ShapeStarWhite } from '../../../../assets';
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import Button from '../../../../components/button';
import { Link } from 'react-scroll';
import { Fade } from "react-awesome-reveal";

const HeroBanner = () => {
      
 
    

    return (
        <section className='v_herobanner v_container v_padding_horizontal flex  justify-between gap-x-3 gap-y-5' id='v_hero'>
            {/* part 1  text content*/}
            <div className='w-[40%] relative'>

                {/*SHape crown  */}
                <img src={ShapeCrown} alt="" className='absolute  v_hero_crown_img top-[10px] sm:top-[30px]  z-10 ' />
               

                <Fade cascade damping={.3} direction='up' duration={900} easing="ease-out"  className='relative top-[80px]' triggerOnce={true}>
                    <h4 className=" text-[40px] leading-none text-uppercase  mb-[20px] text-[#80db66] ">
                        Hello
                        I’m
                    </h4>
                    <h1 className="mb-[20px] text-[#fff] font-jost  font-[600]">
                    ANIRUTHAN RAMAMURTHY
                    </h1>
                    {/* type effect  */}
                    <div>
                        <h6 className='text-[#fff] text-[24px] font-jost '>
                            A Passionate

                            <Typewriter
                            
                            options={{loop:true}}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Website Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Web App Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Application Developer")
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />

                        </h6>

                    </div>
                    
                    <Link to="v_contact" spy={true} className='relative z-20'  smooth={true} offset={-100} duration={220}  >
                    
                    {/* <Button   variant="ripple" textContent="Contact me" className="relative overflow-hidden lg:mt-[80px] mt-[40px] font-[700]" /> */}
                    </Link>
                </Fade>

            </div>
            {/* part 2 gif content*/}
            <div className='w-[60%] relative'>
                <Fade duration={2000} easing="ease-out"  delay={500} triggerOnce={true}>

                <HeroVector className="v_herovector ml-auto" />
                </Fade>
            </div>

        </section>
    );
};

export default HeroBanner; 
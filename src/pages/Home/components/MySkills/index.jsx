import React from 'react';
import "./style.scss";
import { Skills } from '../../../../utils/helper';
import TiltCard from '../../../../components/tiltCard';
import { Fade } from 'react-awesome-reveal';

const MySkills = () => {
    const tiltprops = {

        scale: 1.01,
        transitionSpeed: 1000,


    };
    return (
        <section className='v_container v_padding_horizontal v_padding_vertical !pt-0 !pb-[50px] v_my_skills_master_container' id='v_skills'>
            <Fade direction='up' delay={50} triggerOnce={true}>
            <h2 className='lg:text-[70px] md:text-[50px] text-[36px] mb-[20px] font-jost text-white text-center'>My Skills</h2>
            <p className=' text-white sm:text-[18px] text-[16px] leading-8 mb-5 font-nunito text-center'>Crafting innovative solutions with a versatile and comprehensive programming toolkit.</p>
            </Fade>

            {/* card section */}
            <div className='v_mys_card_wrapper'>

                {Skills?.map((obj, i) => {
                       const filterStyle = {
                        filter: `drop-shadow(0 0 14px ${obj.color})`
                    };

                    return <Fade direction='up' key={i} triggerOnce={true}> <TiltCard  key={i} tiltprops={tiltprops} >
                        <article style={filterStyle}  className='w-[100px] h-[200px] bg-slate-100'>
                            <img src={obj?.logo} alt={obj?.name} />
                            <h3>{obj?.name}</h3>
                        </article>

                    </TiltCard>
                    </Fade>

                })


                }
            </div>


        </section>
    );
};

export default MySkills;
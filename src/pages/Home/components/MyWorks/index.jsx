import React from 'react';
import WorksCards from '../../../../components/WorksCard';
import { Works } from '../../../../utils/helper';
import "./style.scss";
import { Fade } from 'react-awesome-reveal';
const Myworks = () => {
    return (
        <section className='v_myworks_master_container v_container v_padding_horizontal v_padding_vertical ' id='v_works'>
              <Fade direction='up' delay={50} fraction={1} triggerOnce={true}>

                        <h2 className='lg:text-[70px] md:text-[50px] text-[36px] mb-[70px] font-jost  font-extrabold text-center  text-[#80db66]'>Selected Standout Projects</h2>
              </Fade>
            <div className="v_cards_wrapper">
            {

                Works?.map((item,i) => {
                   return  <Fade key={i} fraction={.5} triggerOnce={true}><WorksCards  img={item?.img} alt={item?.alt} title={item?.title} ModalContent={item?.content || ""} /></Fade>
                })
            }

            </div>
     
        </section>
    );
};

export default Myworks;
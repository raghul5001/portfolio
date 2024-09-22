import React, { useState } from 'react';
import "./style.scss";
import VModal from '../modal';
const WorksCards = ({ pnClick, img, style, className, outerContainerClassName, title, alt, ModalTitle, ModalContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    return (
        <article onClick={() => { setIsModalOpen(true) }} className={` v_work_card ${outerContainerClassName}`} >
            <div className='v_work_card_img_container'>
                <img src={img} alt={alt}  />
            </div>
            <div className='v_work_card_con_container'>
                <p>
                    {title}
                </p>
            </div>
            <VModal  openState={isModalOpen}  title={   <h1 className='font-bold md:text-xl text-lg'>{title}</h1>} setOpenstate={setIsModalOpen} onClose={(e) => {
                e?.stopPropagation();
                setIsModalOpen(false)
            }}  >

                  {/* img section */}
                  <section>
                    <div className='flex my-4  justify-center'>
                           <img src={img} alt={alt} loading='lazy' className='w-[280px]  rounded-md' />

                    </div>
                  </section>
                  <section className='pb-[30px]'>

                   <p>
                    {ModalContent || ""}
                    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad impedit ratione, consequuntur harum blanditiis vero labore molestias perspiciatis dicta cum facere sunt. Maxime molestiae est dolor quisquam, corporis dolores vitae possimus aut eligendi dolorum reiciendis sed doloremque labore laudantium repellat tempora laboriosam. Sequi non impedit tenetur necessitatibus possimus minus harum nemo animi nostrum! Perferendis animi quas earum, quisquam, exercitationem dolor delectus facere accusantium fugit, ducimus hic! Nisi quae beatae earum. */}
                   </p>
                  </section>
            </VModal>
        </article>
    );
};

export default WorksCards
    ;

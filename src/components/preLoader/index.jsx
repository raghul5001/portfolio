import React from 'react'
import { PreloaderOne } from '../../assets';
import Lottie from 'react-lottie';

export default function PreLoader() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: PreloaderOne,
        
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className='overflow-hidden w-screen h-screen relative cursor-none' >

       <div className='w-full h-full flex items-center justify-center z-10 cursor-none'>
        <div className='sm:w-[50%] w-[80%] cursor-none'>

       <Lottie options={defaultOptions}
       style={{ cursor: 'none' }}
            //   height={300}
            //   width={300}
              
                />
        </div>
        </div>      
    </div>
  )
}

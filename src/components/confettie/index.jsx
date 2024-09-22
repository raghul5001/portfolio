import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettieV = ({setIsTriggerConfettie}) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth -100,
        height: window.innerHeight
      });
    const [isConfettiActive, setIsConfettiActive] = useState(true);
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth - 100,
            height: window.innerHeight
          });
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [])


 
    
  
      return (
        <div className='h-full w-full fixed top-0 left-0 z-50' >
          {isConfettiActive && <Confetti  recycle={false} onConfettiComplete={() =>   setIsTriggerConfettie(false)}   width={windowSize.width} height={windowSize.height} />}
        </div>
      );
};

export default ConfettieV;
import { useEffect, useState } from 'react';
import './App.scss';
import Router from './Router/route';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CustomCursor from './components/customCursor';
import PreLoader from './components/preLoader';
import { AppContext } from './context/appContext';
function App() {
  const [isLoading,setIsloading]=useState(true);
  const [homeSectionOffsets,setHomeSectionOffsets]=useState({})
  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setIsloading(false);

    },2000);
    return ()=>clearTimeout(timeout);
  },[])
  
  const handleScrollToSection = (offset)=>{
    window.scrollTo({
      top:offset,
      behavior:'smooth'
    })

  }
  
  return (
    <AppContext.Provider value={{homeSectionOffsets,setHomeSectionOffsets,handleScrollToSection}}>
 
    {/* <CustomCursor /> */}
      {
        isLoading ? <PreLoader /> : <Router />
      }

    
      
   
    </AppContext.Provider>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import "./style.scss";
import { LogoNoBackground } from '../../assets';
import { Drawer } from 'antd';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
const StickyHeader = () => {


    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <header className='v_header  v_padding_horizontal' id='v_header'>
            <div id="header-sticky " className={` v_header-area v_container`}>
                {/* logo */}

                {/* <Link  onClick={()=>onClose()}  className='v_logo_container cursor-pointer' to="v_hero" spy={true} smooth={true} offset={-90} duration={260}  ><img src={LogoNoBackground} alt="vidhun" /></Link> */}

                {/* menu */}
                <nav className='v_nav_container'>
                    <ul className='v_nav'>
                        <li> <Link to="v_about" spy={true} smooth={true} offset={-90} duration={260}  >About</Link>  </li>
                        <li> <Link to="v_skills" spy={true} smooth={true} offset={-200} duration={260}  >Skills</Link>  </li>
                        <li> <Link to="v_works" spy={true} smooth={true} offset={-200}   duration={260}  >Works</Link>  </li>
                        {/* <li> <Link to="v_blog" spy={true} smooth={true} offset={-100} duration={260}  >Blogs</Link>  </li> */}
                        {/* <li> <Link to="v_contact" spy={true} smooth={true} offset={-100} duration={260}  >Contact me</Link>  </li> */}

                    </ul>
                </nav>

                {/* responsice menu */}
                {/* hamburger */}
                <div
                    className="v_hamburger"

                    onClick={() => {
                        showDrawer()
                    }}
                >
                    <svg
                        width="31"
                        height="18"
                        viewBox="0 0 31 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    // className={isopen ? "active" : ""}
                    >
                        <line y1="1" x2="30" y2="1" stroke="white" strokeWidth="2" />
                        <line
                            x1="10.0322"
                            y1="9"
                            x2="30.0322"
                            y2="9"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <line y1="17" x2="30" y2="17" stroke="white" strokeWidth="2" />
                    </svg>
                </div>

                <Drawer
                    className='v_mob_header_drawable'
                    placement={"left"}
                    closable={true}
                    width='290'
                    onClose={onClose}
                    open={open}
                    extra={
                        <div>
                            <Link onClick={()=>onClose()}  className='v_logo_container cursor-pointer' to="v_hero" spy={true} smooth={true} offset={-90} duration={260}  ><img src={LogoNoBackground} alt="vidhun" /></Link>
                            {/* <div ></div> */}

                        </div>
                    }

                >

                    <ul className='v_nav'>
                        <li> <Link to="v_about" spy={true} smooth={true} offset={-90} duration={260} onClick={()=>onClose()}  >About</Link>  </li>
                        <li> <Link to="v_skills" spy={true} smooth={true} offset={-100} duration={260} onClick={()=>onClose()}  >Skills</Link>  </li>
                        <li> <Link to="v_works" spy={true} smooth={true} offset={-50} duration={260} onClick={()=>onClose()}  >Works</Link>  </li>
                        {/* <li> <Link to="v_blog" spy={true} smooth={true} offset={-100} duration={260} onClick={()=>onClose()}  >Blogs</Link>  </li> */}
                        {/* <li> <Link to="v_contact" spy={true} smooth={true} offset={-50} duration={260} onClick={()=>onClose()}  >Contact me</Link>  </li> */}
                    </ul>
                </Drawer>

            </div>
        </header>
    );
};

export default StickyHeader;

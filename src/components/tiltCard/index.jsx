import React from 'react';
import Tilt from 'react-parallax-tilt';
const TiltCard = ({children,tiltprops}) => {
    return (
        <Tilt {...tiltprops}>
            {children}
        </Tilt>
    );
};

export default TiltCard;
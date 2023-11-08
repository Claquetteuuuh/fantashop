import React from 'react';
import CountdownContainer from '../components/CountdownContainer/CountdownContainer';

const Countdown = ({objectif}) => {
    return (
        <CountdownContainer objectif={objectif} />
        
    );
};

export default Countdown;
import React from 'react';
import './first.css';

// Image
import chest_banner from '../../assets/chest_banner.png';

const First = () => {
    return (
        <section className='home'>
                <div className="left">
                    <div className="title">
                        <span></span>
                        <h1>Maintenance <br /> en cours</h1>
                    </div>
                    <h4>Pour plus d'information, rejoignez notre discord</h4>
                </div>
                <div className="right">
                    <div className="test">
                        <img src={chest_banner} alt="coffre d'item" />
                    </div>
                </div>
        </section>
    );
};

export default First;
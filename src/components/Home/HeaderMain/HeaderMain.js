import React from 'react';
import Tower from '../../../images/bbn.jpg';

const HeaderMain = () => {
    return (
        <section style={{ height: '400px' }} className="container">
            <img style={{ height: '300px' }} className="d-block w-100 img-fluid" src={Tower} alt="" />
            <div style={{ textAlign: 'center' }} className="container">
                <h1 style={{ color: "tomato" }}>BHURUGAMARI BROAD BANK NETWORK </h1>
                <h4 style={{ color: 'yellowgreen' }}>At Your service</h4>
            </div>
        </section>
    );
};

export default HeaderMain;
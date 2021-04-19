import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Header;